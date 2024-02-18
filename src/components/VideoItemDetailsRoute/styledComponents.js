import styled from 'styled-components'

export const VideoItemDetailsPageContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
`

export const VideoItemContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: ;
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  margin-top: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#231f20')};
`

export const VideoSecondSectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const ViewsAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  color: #475569;
`
export const VideoViews = styled.p`
  margin-top: 5px;
`
export const VideoTime = styled.p`
  margin-left: 10px;
  margin-top: 5px;
`
export const ReactionButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
`

export const ReactionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 65px;
  padding: 0px;
  color: ${props => (props.isTrue ? '#2563eb' : '#64748b')};
`

export const HorizontalRule = styled.hr`
  width: 100%;
  background-color: ${props => (props.isDark ? ' #64748b' : '#cccccc')};
  color: 'red';
  border: none;
  height: 2px;
  border-radius: 1px;
`
export const VideoProfileDetailsContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
`
export const VideoProfileImg = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 25px;
`
export const VideoDetailsContainer = styled.div``

export const ChannelTitle = styled.p`
  color: ${props => (props.isDark ? 'white' : '#181818')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 0px;
`
export const ChannelSubs = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #475569;
`
export const ChannelDescription = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 30px;
  color: ${props => (props.isDark ? 'white' : ' #1e293b')};
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 5px;
`

export const FailureTagLine = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#313131')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  width: 400px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 15px;
`

export const RetryButton = styled.button`
  color: #f9f9f9;
  background-color: #4f46e5;
  height: 40px;
  width: 90px;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
`

export const FailureViewContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const FailureViewImg = styled.img`
  width: 350px;
`
