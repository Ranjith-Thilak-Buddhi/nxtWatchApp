import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import AppContext from '../../Context/AppContext'
import Header from '../Header/index'
import Sidebar from '../SideBar/index'
import GamingVideoCard from '../GamingVideoCard/index'
import {
  GamingPageContainer,
  GamingContainer,
  GamingLoaderContainer,
  GamingBannerContainer,
  GamingFailureHeading,
  GamingFailureTagLine,
  GamingFailureViewContainer,
  GamingFailureViewImg,
  GamingIconContainer,
  GamingRetryButton,
  GamingTitle,
  GamingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.fetchGamingVideos()
  }

  fetchGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({
        gamingList: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingList} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <GamingVideosContainer>
                {gamingList.map(eachItem => (
                  <GamingVideoCard key={eachItem.id} videoDetails={eachItem} />
                ))}
              </GamingVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <GamingLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </GamingLoaderContainer>
  )

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const url = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GamingFailureViewContainer>
            <GamingFailureViewImg src={url} alt="failure view" />
            <GamingFailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </GamingFailureHeading>
            <GamingFailureTagLine isDark={isDark}>
              We are having some trouble
            </GamingFailureTagLine>
            <GamingRetryButton type="button" onClick={this.fetchGamingVideos}>
              Retry
            </GamingRetryButton>
          </GamingFailureViewContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingPageContainer>
          <Sidebar />
          <AppContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <GamingContainer isDark={isDark} data-testid="gaming">
                  <GamingBannerContainer data-testid="banner" isDark={isDark}>
                    <GamingIconContainer isDark={isDark}>
                      <SiYoutubegaming size={35} color="red" />
                    </GamingIconContainer>
                    <GamingTitle isDark={isDark}>Gaming</GamingTitle>
                  </GamingBannerContainer>
                  {this.renderResult()}
                </GamingContainer>
              )
            }}
          </AppContext.Consumer>
        </GamingPageContainer>
      </>
    )
  }
}

export default GamingRoute
