import styled from 'styled-components'
import {Link} from 'react-router-dom'

const getColor = (selectedOption, isDark) => {
  if (isDark) {
    return selectedOption ? ' #383838' : ''
  }
  return selectedOption ? '#f1f5f9' : ''
}

export const SideBarContainer = styled.div`
  height: 90vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#313131' : 'white')};
`

export const SideBarLinksContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  background-color: inherit;
`
export const SideBarLinkContainer = styled.li`
  height: 40px;
  background-color: ${props => getColor(props.selectedOption, props.isDark)};
  padding-left: 15px;
  display: flex;
  align-items: center;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;
`

export const SideBarLinkTitle = styled.h1`
  color: ${props => (props.isDark ? 'white' : '#212121')};
  font-size: 14px;
  margin-left: 25px;
  font-family: 'Roboto';
  font-weight: ${props => (props.selectedOption ? 900 : 500)};
`

export const ContactContainer = styled.div`
  margin-top: auto;
  padding-left: 15px;
  margin-bottom: 50px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-weight: bolder;
`

export const SocialImagesContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`

export const SocialImage = styled.img`
  width: 30px;
  margin-right: 5px;
`
export const ContactTagLine = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-weight: bold;
`
