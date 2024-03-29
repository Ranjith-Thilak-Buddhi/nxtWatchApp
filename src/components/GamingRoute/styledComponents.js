import styled from 'styled-components'

export const GamingPageContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
`
export const GamingContainer = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 80vw;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingLoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`
export const GamingBannerContainer = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  background-color: ${props => (props.isDark ? '#212121' : '#f4f4f4')};
`

export const GamingIconContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e2e8f0')};
`

export const GamingTitle = styled.p`
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  margin-left: 20px;
  font-family: 'Roboto';
`

export const GamingVideosContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const GamingFailureViewContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const GamingFailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 5px;
`

export const GamingFailureTagLine = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#313131')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  width: 400px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 15px;
`

export const GamingRetryButton = styled.button`
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

export const GamingFailureViewImg = styled.img`
  width: 350px;
`
