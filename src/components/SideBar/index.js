import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import AppContext from '../../Context/AppContext'

import {
  SideBarContainer,
  SideBarLinksContainer,
  SideBarLinkContainer,
  SideBarLinkTitle,
  StyledLink,
  ContactContainer,
  ContactHeading,
  SocialImagesContainer,
  SocialImage,
  ContactTagLine,
} from './styledComponents'

const Sidebar = props => {
  const {location} = props
  const {pathname} = location
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SideBarContainer isDark={isDark}>
            <SideBarLinksContainer>
              <StyledLink to="/">
                <SideBarLinkContainer
                  selectedOption={pathname === '/'}
                  isDark={isDark}
                >
                  <AiFillHome size={18} color={pathname === '/' ? 'red' : ''} />
                  <SideBarLinkTitle
                    selectedOption={pathname === '/'}
                    isDark={isDark}
                  >
                    Home
                  </SideBarLinkTitle>
                </SideBarLinkContainer>
              </StyledLink>

              <StyledLink to="/trending">
                <SideBarLinkContainer
                  selectedOption={pathname === '/trending'}
                  isDark={isDark}
                >
                  <HiFire
                    size={18}
                    color={pathname === '/trending' ? 'red' : ''}
                  />
                  <SideBarLinkTitle
                    selectedOption={pathname === '/trending'}
                    isDark={isDark}
                  >
                    Trending
                  </SideBarLinkTitle>
                </SideBarLinkContainer>
              </StyledLink>

              <StyledLink to="/gaming">
                <SideBarLinkContainer
                  selectedOption={pathname === '/gaming'}
                  isDark={isDark}
                >
                  <SiYoutubegaming
                    size={18}
                    color={pathname === '/gaming' ? 'red' : ''}
                  />
                  <SideBarLinkTitle
                    selectedOption={pathname === '/gaming'}
                    isDark={isDark}
                  >
                    Gaming
                  </SideBarLinkTitle>
                </SideBarLinkContainer>
              </StyledLink>

              <StyledLink to="/saved-videos">
                <SideBarLinkContainer
                  selectedOption={pathname === '/saved-videos'}
                  isDark={isDark}
                >
                  <BiListPlus
                    size={18}
                    color={pathname === '/saved-videos' ? 'red' : ''}
                  />
                  <SideBarLinkTitle
                    selectedOption={pathname === '/saved-videos'}
                    isDark={isDark}
                  >
                    Saved Videos
                  </SideBarLinkTitle>
                </SideBarLinkContainer>
              </StyledLink>
            </SideBarLinksContainer>
            <ContactContainer>
              <ContactHeading isDark={isDark}>CONTACT US</ContactHeading>
              <SocialImagesContainer>
                <SocialImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialImagesContainer>
              <ContactTagLine isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </ContactTagLine>
            </ContactContainer>
          </SideBarContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Sidebar)
