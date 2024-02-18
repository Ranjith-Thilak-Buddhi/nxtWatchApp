import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : 'white')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.form`
  height: 500px;
  width: 500px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 25px 0px
    ${props => (props.isDark ? '#231f20' : '#94a3b8')};
  padding: 40px;
  border-radius: 10px;
`
export const LoginFormLogo = styled.img`
  width: 200px;
  align-self: center;
  margin-top: 20px;
`
export const UserInputsContainer = styled.div`
  margin-top: auto;
`

export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  margin-top: 20px;
`
export const UserInputLabel = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#616e7c')};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
`
export const UserInput = styled.input`
  height: 45px;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  font-size: 14px;
  outline: none;
  background-color: inherit;
`
export const ShowPasswordContainer = styled.div``

export const ShowPasswordLabel = styled.label`
  margin-left: 10px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#616e7c')};
`
export const ShowPasswordInput = styled.input.attrs({type: 'checkbox'})`
  height: 16px;
  width: 16px;
  background-color: red;
`
export const LoginButton = styled.button`
  border: none;
  border-radius: 8px;
  height: 45px;
  margin-top: 25px;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: auto;
  color: #ffffff;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 0px;
`
