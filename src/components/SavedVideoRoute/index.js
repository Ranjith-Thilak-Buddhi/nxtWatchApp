import {HiFire} from 'react-icons/hi'
import AppContext from '../../Context/AppContext'
import Header from '../Header/index'
import Sidebar from '../SideBar/index'
import VideoCard from '../VideoCard/index'

import {
  SavedVideosPageContainer,
  SavedVideosSectionContainer,
  SavedVideosBannerContainer,
  SavedVideoIconContainer,
  SavedVideoTitle,
  SavedVideosContainer,
  NoVideosViewContainer,
  NoVideosViewImg,
  NoVideosHeading,
  NoVideosTagLine,
} from './styledComponents'

const SavedVideosRoute = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const videosAvailable = savedVideos.length > 0
      return (
        <>
          <Header />
          <SavedVideosPageContainer>
            <Sidebar />
            <SavedVideosSectionContainer
              data-testid="savedVideos"
              isDark={isDark}
            >
              <SavedVideosBannerContainer data-testid="banner" isDark={isDark}>
                <SavedVideoIconContainer isDark={isDark}>
                  <HiFire size={30} color="red" />
                </SavedVideoIconContainer>
                <SavedVideoTitle isDark={isDark}>Saved Videos</SavedVideoTitle>
              </SavedVideosBannerContainer>
              {videosAvailable && (
                <>
                  <SavedVideosContainer>
                    {savedVideos.map(eachItem => (
                      <VideoCard key={eachItem.id} videoDetails={eachItem} />
                    ))}
                  </SavedVideosContainer>
                </>
              )}
              {!videosAvailable && (
                <NoVideosViewContainer>
                  <NoVideosViewImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoVideosHeading isDark={isDark}>
                    No saved videos found
                  </NoVideosHeading>
                  <NoVideosTagLine isDark={isDark}>
                    You can save your videos while watching them
                  </NoVideosTagLine>
                </NoVideosViewContainer>
              )}
            </SavedVideosSectionContainer>
          </SavedVideosPageContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideosRoute
