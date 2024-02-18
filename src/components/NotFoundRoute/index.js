import Header from '../Header/index'
import SideBar from '../SideBar/index'
import AppContext from '../../Context/AppContext'
import {
  NotFoundPageContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundTagLine,
} from './styledComponents'

const NotFoundRoute = () => (
  <>
    <Header />
    <NotFoundPageContainer>
      <SideBar />
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const NotFoundImg = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <NotFoundContainer isDark={isDark}>
              <NotFoundImage src={NotFoundImg} alt="not found" />
              <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundTagLine isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundTagLine>
            </NotFoundContainer>
          )
        }}
      </AppContext.Consumer>
    </NotFoundPageContainer>
  </>
)

export default NotFoundRoute
