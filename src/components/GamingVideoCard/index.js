/* eslint-disable camelcase */
import AppContext from '../../Context/AppContext'
import {
  VideoCardContainer,
  VideoCardStyledLink,
  VideoCardStyledThumbnail,
  VideoTitle,
  VideoDetailsContainer,
  VideoCardViews,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnail_url, view_count} = videoDetails

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
              <VideoDetailsContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <VideoCardViews isDark={isDark}>
                  {view_count} Watching Worldwide
                </VideoCardViews>
              </VideoDetailsContainer>
            </VideoCardStyledLink>
          </VideoCardContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GamingVideoCard
