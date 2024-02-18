import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  width: 100vw;
  min-height: 90vh;
  display: flex;
  height: 100%;
`

export const SavedVideosSectionContainer = styled.div`
  min-height: 90vh;
  width: 80vw;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 100%;
`

export const SavedVideosBannerContainer = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  background-color: ${props => (props.isDark ? '#212121' : '#f4f4f4')};
`

export const SavedVideoIconContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e2e8f0')};
`

export const SavedVideoTitle = styled.h1`
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  margin-left: 20px;
  font-family: 'Roboto';
`

export const SavedVideosContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NoVideosHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 5px;
`

export const NoVideosTagLine = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#313131')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  width: 400px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 15px;
`

export const NoVideosViewContainer = styled.div`
  height: 90vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoVideosViewImg = styled.img`
  width: 350px;
`