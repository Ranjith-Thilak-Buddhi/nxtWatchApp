/* eslint-disable camelcase */
import {formatDistanceToNowStrict} from 'date-fns'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiListPlus, BiDislike, BiLike} from 'react-icons/bi'
import AppContext from '../../Context/AppContext'
import Header from '../Header/index'
import Sidebar from '../SideBar/index'

import {
  VideoItemDetailsPageContainer,
  VideoItemContainer,
  LoaderContainer,
  FailureHeading,
  FailureTagLine,
  FailureViewImg,
  FailureViewContainer,
  RetryButton,
  VideoTitle,
  VideoSecondSectionContainer,
  ViewsAndTimeContainer,
  VideoViews,
  VideoTime,
  ReactionButtonsContainer,
  ReactionButton,
  HorizontalRule,
  VideoProfileDetailsContainer,
  VideoProfileImg,
  VideoDetailsContainer,
  ChannelTitle,
  ChannelSubs,
  ChannelDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoItemDetails: {},
    apiStatus: apiStatusConstants.initial,
    liked: false,
    saved: false,
    disliked: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  onClickLike = () => {
    this.setState({liked: true, disliked: false})
  }

  onClickDisLike = () => {
    this.setState({disliked: true, liked: false})
  }

  onClickSave = () => {
    this.setState(preState => ({saved: !preState.saved}))
  }

  fetchVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
        videoItemDetails: data.video_details,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoItemDetails, liked, disliked, saved} = this.state
    const {
      title,
      channel,
      published_at,
      view_count,
      video_url,
      description,
    } = videoItemDetails
    const {name, profile_image_url, subscriber_count} = channel
    const time = formatDistanceToNowStrict(new Date(published_at), {
      addSuffix: true,
    })

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, saveOrRemoveVideo} = value
          const saveVideo = () => {
            saveOrRemoveVideo(videoItemDetails)
            this.onClickSave()
          }
          return (
            <>
              <ReactPlayer width="100%" url={video_url} />
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <VideoSecondSectionContainer>
                <ViewsAndTimeContainer>
                  <VideoViews isDark={isDark}>{view_count} views</VideoViews>
                  <VideoTime isDark={isDark}>{time}</VideoTime>
                </ViewsAndTimeContainer>
                <ReactionButtonsContainer>
                  <ReactionButton
                    isTrue={liked}
                    type="button"
                    onClick={this.onClickLike}
                  >
                    <BiLike size={18} />
                    Like
                  </ReactionButton>
                  <ReactionButton
                    isTrue={disliked}
                    type="button"
                    onClick={this.onClickDisLike}
                  >
                    <BiDislike size={18} />
                    Dislike
                  </ReactionButton>
                  <ReactionButton
                    isTrue={saved}
                    type="button"
                    onClick={saveVideo}
                  >
                    <BiListPlus size={20} />
                    {saved ? 'Saved' : 'Save'}
                  </ReactionButton>
                </ReactionButtonsContainer>
              </VideoSecondSectionContainer>
              <HorizontalRule isDark={isDark} />
              <VideoProfileDetailsContainer>
                <VideoProfileImg src={profile_image_url} alt="channel logo" />
                <VideoDetailsContainer>
                  <ChannelTitle isDark={isDark}>{name}</ChannelTitle>
                  <ChannelSubs isDark={isDark}>
                    {subscriber_count} subscribers
                  </ChannelSubs>
                  <ChannelDescription isDark={isDark}>
                    {description}
                  </ChannelDescription>
                </VideoDetailsContainer>
              </VideoProfileDetailsContainer>
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
          <FailureViewContainer>
            <FailureViewImg src={url} alt="failure view" />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureTagLine isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureTagLine>
            <RetryButton type="button" onClick={this.fetchVideoDetails}>
              Retry
            </RetryButton>
          </FailureViewContainer>
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
        <VideoItemDetailsPageContainer>
          <Sidebar />
          <AppContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <VideoItemContainer
                  data-testid="videoItemDetails"
                  isDark={isDark}
                >
                  {this.renderResult()}
                </VideoItemContainer>
              )
            }}
          </AppContext.Consumer>
        </VideoItemDetailsPageContainer>
      </>
    )
  }
}

export default VideoItemDetailsRoute
