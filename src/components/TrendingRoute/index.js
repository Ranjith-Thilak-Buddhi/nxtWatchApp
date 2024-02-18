import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import AppContext from '../../Context/AppContext'
import Header from '../Header/index'
import Sidebar from '../SideBar/index'
import VideoCard from '../VideoCard/index'

import {
  TrendingPageContainer,
  TrendingContainer,
  TrendingBannerContainer,
  TrendingIconContainer,
  TrendingTitle,
  TrendingLoaderContainer,
  TrendingFailureHeading,
  TrendingFailureTagLine,
  TrendingFailureViewImg,
  TrendingFailureViewContainer,
  TrendingRetryButton,
  TrendingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
        trendingList: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <TrendingLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </TrendingLoaderContainer>
  )

  renderSuccessView = () => {
    const {trendingList} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <TrendingVideosContainer>
                {trendingList.map(eachItem => (
                  <VideoCard key={eachItem.id} videoDetails={eachItem} />
                ))}
              </TrendingVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const url = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <TrendingFailureViewContainer>
            <TrendingFailureViewImg src={url} alt="failure view" />
            <TrendingFailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </TrendingFailureHeading>
            <TrendingFailureTagLine isDark={isDark}>
              We are having some trouble
            </TrendingFailureTagLine>
            <TrendingRetryButton
              type="button"
              onClick={this.fetchTrendingVideos}
            >
              Retry
            </TrendingRetryButton>
          </TrendingFailureViewContainer>
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
        <TrendingPageContainer>
          <Sidebar />
          <AppContext.Consumer>
            {value => {
              const {isDark} = value

              return (
                <TrendingContainer data-testid="trending" isDark={isDark}>
                  <TrendingBannerContainer data-testid="banner" isDark={isDark}>
                    <TrendingIconContainer isDark={isDark}>
                      <HiFire size={30} color="red" />
                    </TrendingIconContainer>
                    <TrendingTitle isDark={isDark}>Trending</TrendingTitle>
                  </TrendingBannerContainer>
                  {this.renderResult()}
                </TrendingContainer>
              )
            }}
          </AppContext.Consumer>
        </TrendingPageContainer>
      </>
    )
  }
}

export default TrendingRoute
