void setBuildStatus(String message, String state) {
    step([
        $class: "GitHubCommitStatusSetter",
        reposSource: [$class: "ManuallyEnteredRepositorySource", url: env.GIT_URL],
        contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/${STAGE_NAME}"],
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
                setBuildStatus("Building container", "PENDING");
                sh 'docker build -f ./Dockerfile -t $DOCKERHUB_USERNAME/tessera-frontend-dev .'
                sh 'docker build -f ./Dockerfile.dev -t test .'
            }
            post {
                success {
                    setBuildStatus("Container built successfully", "SUCCESS");
                }
                failure {
                    setBuildStatus("Container build failed", "FAILURE");
                }
            }
        }

        stage('Test') {
            environment {
                DOCKERHUB_USERNAME = credentials('DOCKERHUB_USERNAME')
            }
            steps {
                setBuildStatus("Running tests", "PENDING");
                sh 'docker run \
                    test sh -c "CI=true npm run test"'
            }
            post {
                success {
                    setBuildStatus("Passed all tests", "SUCCESS");
                }
                failure {
                    setBuildStatus("One or more tests failed", "FAILURE");
                }
            }
        }

        stage('Push') {
            environment {
                DOCKERHUB_USERNAME = credentials('DOCKERHUB_USERNAME')
                DOCKERHUB_ACCESS_TOKEN = credentials('DOCKERHUB_ACCESS_TOKEN')
            }
            steps {
                setBuildStatus("Pushing container", "PENDING");
                sh 'echo $DOCKERHUB_ACCESS_TOKEN | docker login -u $DOCKERHUB_USERNAME --password-stdin'
                sh 'docker push $DOCKERHUB_USERNAME/tessera-frontend-dev'
            }
            post {
                success {
                    setBuildStatus("Container pushed", "SUCCESS");
                }
                failure {
                    setBuildStatus("Failed to push to Docker Hub", "FAILURE");
                }
            }
        }

        stage('Deploy') {
            steps {
                setBuildStatus("Deploying", "PENDING");
                build job: "deploy", wait: true
            }
            post {
                success {
                    setBuildStatus("Deployed successfully", "SUCCESS");
                }
                failure {
                    setBuildStatus("Deployment failed", "FAILURE");
                }
            }
        }
    }
    
    post {
        always {
            deleteDir()
        }
    }
}