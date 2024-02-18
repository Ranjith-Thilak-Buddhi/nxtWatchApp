import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdSearch, IoMdClose} from 'react-icons/io'
import HomeVideoCard from '../HomeVideoCard/index'

import Header from '../Header/index'

import SideBar from '../SideBar/index'
import {
  HomePageContainer,
  HomeContainer,
  HomePageBanner,
  HomePageBannerLogo,
  HomepageBannerText,
  BannerItemsContainer,
  BannerGetItNowButton,
  HomePageSearchInput,
  HomePageSearchButton,
  BannerCloseButton,
  HomeVideosSectionContainer,
  HomeSearchTabContainer,
  HomeVideosContainer,
  HomeNoResultContainer,
  HomeNoResultImg,
  HomeNoResultHeading,
  HomeNoResultTagLine,
  HomeRetryButton,
  HomeFailureViewContainer,
  HomeFailureViewImg,
  HomeLoaderContainer,
} from './styledComponents'
import AppContext from '../../Context/AppContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideosList: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const url = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <HomeFailureViewContainer>
            <HomeFailureViewImg src={url} alt="failure view" />
            <HomeNoResultHeading isDark={isDark}>
              Oops! Something Went Wrong
            </HomeNoResultHeading>
            <HomeNoResultTagLine isDark={isDark}>
              We are having some trouble
            </HomeNoResultTagLine>
            <HomeRetryButton type="button" onClick={this.fetchVideos}>
              Retry
            </HomeRetryButton>
          </HomeFailureViewContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderLoadingView = () => (
    <HomeLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </HomeLoaderContainer>
  )

  renderSuccessView = () => {
    const {homeVideosList} = this.state
    const haveVideos = homeVideosList.length > 0

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return haveVideos ? (
            <HomeVideosContainer>
              {homeVideosList.map(eachItem => (
                <HomeVideoCard key={eachItem.id} videoDetails={eachItem} />
              ))}
            </HomeVideosContainer>
          ) : (
            <HomeNoResultContainer>
              <HomeNoResultImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <HomeNoResultHeading isDark={isDark}>
                No Search results found
              </HomeNoResultHeading>
              <HomeNoResultTagLine isDark={isDark}>
                Try different key words or remove search filters
              </HomeNoResultTagLine>
              <HomeRetryButton type="button" onClick={this.fetchVideos}>
                Retry
              </HomeRetryButton>
            </HomeNoResultContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

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
    const {showBanner, searchInput} = this.state
    return (
      <>
        <Header />
        <HomePageContainer>
          <SideBar />
          <AppContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <HomeContainer data-testid="home" isDark={isDark}>
                  {showBanner && (
                    <HomePageBanner data-testid="banner">
                      <BannerItemsContainer>
                        <HomePageBannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <HomepageBannerText>
                          Buy Nxt Watch Premium
                        </HomepageBannerText>
                        <BannerGetItNowButton>GET IT NOW</BannerGetItNowButton>
                      </BannerItemsContainer>
                      <BannerCloseButton
                        type="button"
                        onClick={this.closeBanner}
                        data-testid="close"
                      >
                        <IoMdClose size={20} />
                      </BannerCloseButton>
                    </HomePageBanner>
                  )}
                  <HomeVideosSectionContainer isDark={isDark}>
                    <HomeSearchTabContainer>
                      <HomePageSearchInput
                        type="search"
                        value={searchInput}
                        onChange={this.onSearchInput}
                        placeholder="Search"
                        isDark={isDark}
                      />
                      <HomePageSearchButton
                        type="button"
                        onClick={this.fetchVideos}
                        isDark={isDark}
                        data-testid="searchButton"
                      >
                        <IoMdSearch size={16} />
                      </HomePageSearchButton>
                    </HomeSearchTabContainer>
                    {this.renderResult()}
                  </HomeVideosSectionContainer>
                </HomeContainer>
              )
            }}
          </AppContext.Consumer>
        </HomePageContainer>
      </>
    )
  }
}

export default Home
