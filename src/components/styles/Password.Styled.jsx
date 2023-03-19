import styled from 'styled-components';
export const Wrapper = styled.div`

width:100%
text-align: left;
margrin-right:0px;
margin: 0 auto;
`

export const PwdLabel = styled.p`
font-size: 22px;
`
export const PwdProgress = styled.progress`
  margin:1rem;
  width:38rem;
  height: 0.4rem;
  border-radius: 0px;
   
  ::-webkit-progress-bar {
    border-radius: 0.2rem;
    background-color: rgb(246, 241, 241);

   };
  
  ::-webkit-progress-value {
    
    background-color: ${props => props.inputColor || "red"};
    
    
   };

  
`
export const PasswordShowButton = styled.button`
border:none;
height:4rem;
padding: 0rem;
width: 4rem;
cursor:pointer;
border-radius:5rem;
background-color:white;
transition: 1s;
&:hover{
  background-color:#F5F5F5;
}
`
export const PasswordShowImg = styled.img`
width:3.5rem;
display: inline-block;
margin: 0 auto;
background-color:white;
color:#4b4d63;
vertical-align: middle;
background-size: contain;
`

export const PasswordStrenghP = styled.p`
  font-size: 1.35rem;
  color: 	#505050;
  margin-left:1rem;
  line-height: 1.25rem;
`