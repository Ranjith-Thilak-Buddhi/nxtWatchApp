/* eslint-disable camelcase */
import {formatDistanceToNowStrict} from 'date-fns'
import AppContext from '../../Context/AppContext'
import {
  VideoCardContainer,
  VideoCardStyledLink,
  VideoCardStyledThumbnail,
  VideoProfileDetailsContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoProfileImg,
  ChannelTitle,
  VideoCardViews,
  ViewsAndTimeContainer,
  VideoTime,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnail_url,
    channel,
    published_at,
    view_count,
  } = videoDetails
  const {name, profile_image_url} = channel
  const time = formatDistanceToNowStrict(new Date(published_at), {
    addSuffix: true,
  })

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoCardContainer>
            <VideoCardStyledLink to={`/videos/${id}`}>
              <VideoCardStyledThumbnail
                src={thumbnail_url}
                alt="video thumbnail"
              />
              <VideoProfileDetailsContainer>
                <VideoProfileImg src={profile_image_url} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelTitle isDark={isDark}>{name}</ChannelTitle>
                  <ViewsAndTimeContainer>
                    <VideoCardViews isDark={isDark}>
                      {view_count} views
                    </VideoCardViews>
                    <VideoTime isDark={isDark}>{time}</VideoTime>
                  </ViewsAndTimeContainer>
                </VideoDetailsContainer>
              </VideoProfileDetailsContainer>
            </VideoCardStyledLink>
          </VideoCardContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default HomeVideoCard
