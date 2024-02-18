import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPageContainer,
  LoginFormContainer,
  LoginFormLogo,
  UserInputContainer,
  UserInputLabel,
  UserInput,
  ShowPasswordContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
  LoginButton,
  UserInputsContainer,
  ErrorMsg,
} from './styledComponents'

import AppContext from '../../Context/AppContext'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    gotError: false,
    errorMsg: '',
    showPassword: false,
  }

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  loginSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({gotError: true, errorMsg})
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.loginSuccessful(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  onShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {username, password, showPassword, errorMsg, gotError} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const imageUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginPageContainer isDark={isDark}>
              <LoginFormContainer
                isDark={isDark}
                onSubmit={this.onSubmitDetails}
              >
                <LoginFormLogo src={imageUrl} alt="website logo" />
                <UserInputsContainer>
                  <UserInputContainer>
                    <UserInputLabel isDark={isDark} htmlFor="username">
                      USERNAME
                    </UserInputLabel>
                    <UserInput
                      id="username"
                      type="text"
                      value={username}
                      placeholder="Username"
                      onChange={this.onUsernameInput}
                    />
                  </UserInputContainer>
                  <UserInputContainer>
                    <UserInputLabel isDark={isDark} htmlFor="password">
                      PASSWORD
                    </UserInputLabel>
                    <UserInput
                      id="password"
                      type={inputType}
                      value={password}
                      placeholder="Password"
                      onChange={this.onPasswordInput}
                    />
                  </UserInputContainer>
                </UserInputsContainer>
                <ShowPasswordContainer>
                  <ShowPasswordInput
                    id="showPassword"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.onShowPassword}
                  />
                  <ShowPasswordLabel htmlFor="showPassword" isDark={isDark}>
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {gotError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginPageContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default LoginRoute
