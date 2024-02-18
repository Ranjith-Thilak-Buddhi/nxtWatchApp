import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  background-color: ${props => (props.isDark ? '#313131' : 'white')};
  margin: 0px;
`
export const HeaderLogo = styled.img`
  width: 130px;
`
export const ChangeThemeButton = styled.button`
  border: none;
  background: none;
  height: 30px;
  width: 30px;
`
export const HeaderRightContainer = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileImage = styled.img`
  width: 30px;
`
export const LogoutButton = styled.button`
  border: 1px solid ${props => (props.isDark ? 'white' : '#3b82f6')};
  background: none;
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  height: 25px;
  width: 75px;
  border-radius: 3px;
`

export const StyledPopup = styled(Popup)``

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  height: 130px;
  width: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupHeading = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#00306e')};
  margin: 20px;
`

export const PopupCancelButton = styled.button`
  border: 1px solid #94a3b8;
  background: none;
  color: #94a3b8;
  height: 35px;
  width: 80px;
  margin-right: 20px;
  border-radius: 3px;
`

export const PopupConfirmButton = styled.button`
  border: none;
  background: #3b82f6;
  color: white;
  height: 35px;
  width: 80px;
  border-radius: 3px;
  margin-left: 20px;
`

export const PopupButtonsContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`
