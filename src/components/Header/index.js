import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {IoSunnySharp} from 'react-icons/io5'

import AppContext from '../../Context/AppContext'
import {
  HeaderContainer,
  HeaderLogo,
  ChangeThemeButton,
  ProfileImage,
  HeaderRightContainer,
  LogoutButton,
  StyledPopup,
  PopupContainer,
  PopupHeading,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupConfirmButton,
} from './styledComponents'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const imageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <HeaderContainer isDark={isDark}>
            <Link to="/">
              <HeaderLogo src={imageUrl} alt="website logo" />
            </Link>
            <HeaderRightContainer>
              <ChangeThemeButton
                data-testid="theme"
                type="button"
                onClick={changeTheme}
              >
                {isDark ? (
                  <IoSunnySharp size={25} color="white" />
                ) : (
                  <FaMoon size={25} />
                )}
              </ChangeThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <StyledPopup
                modal
                trigger={
                  <LogoutButton
                    type="button"
                    onClick={onClickLogOut}
                    isDark={isDark}
                  >
                    Logout
                  </LogoutButton>
                }
                position="center center"
              >
                {close => (
                  <PopupContainer isDark={isDark}>
                    <PopupHeading isDark={isDark}>
                      Are you sure, you want to logout
                    </PopupHeading>
                    <PopupButtonsContainer>
                      <PopupCancelButton type="button" onClick={() => close()}>
                        Cancel
                      </PopupCancelButton>
                      <PopupConfirmButton type="button" onClick={onClickLogOut}>
                        Confirm
                      </PopupConfirmButton>
                    </PopupButtonsContainer>
                  </PopupContainer>
                )}
              </StyledPopup>
            </HeaderRightContainer>
          </HeaderContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
