void setBuildStatus(String message, String state) {
    step([
        $class: "GitHubCommitStatusSetter",
        reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/mo-gaafar/tessera-frontend/"],
        contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
        errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
        statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
    ]);
}

pipeline {
    agent any

    stages {
        stage('Build') {
            environment {
                DOCKERHUB_USERNAME = credentials('DOCKERHUB_USERNAME')
            }
            steps {
                sh 'docker build -f ./Dockerfile -t $DOCKERHUB_USERNAME/tessera-frontend-dev .'
                sh 'docker build -f ./Dockerfile.dev -t test .'
            }
        }

        stage('Test') {
            environment {
                DOCKERHUB_USERNAME = credentials('DOCKERHUB_USERNAME')
            }
            steps {
                sh 'docker run \
                    test sh -c "CI=true npm run test"'
            }
        }

        stage('Push') {
            environment {
                DOCKERHUB_USERNAME = credentials('DOCKERHUB_USERNAME')
                DOCKERHUB_ACCESS_TOKEN = credentials('DOCKERHUB_ACCESS_TOKEN')
            }
            steps {
                sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_ACCESS_TOKEN'
                sh 'docker push $DOCKERHUB_USERNAME/tessera-frontend-dev'
            }
        }

        stage('Deploy') {
            steps {
                build job: "deploy", wait: true
            }
        }
    }
    
    post {
        always {
            deleteDir()
        }
        success {
            setBuildStatus("Build succeeded", "SUCCESS");
        }
        failure {
            setBuildStatus("Build failed", "FAILURE");
        }
    }
}