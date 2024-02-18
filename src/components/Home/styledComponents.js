import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 90vh;
  display: flex;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  min-height: 90vh;
  width: 80vw;
  height: 100%;
`

export const HomePageBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 225px;
  padding: 25px;
  background-size: cover;
  background-position-x: left;
  display: flex;
`

export const BannerItemsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const HomePageBannerLogo = styled.img`
  width: 150px;
`

export const HomepageBannerText = styled.p`
  color: #212121;
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 400;
  margin-top: 25px;
`

export const BannerGetItNowButton = styled.button`
  border: 1px solid #212121;
  background: none;
  height: 40px;
  width: 115px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  margin-top: auto;
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  margin-bottom: auto;
`
export const HomeVideosSectionContainer = styled.div`
  width: 100%;
  padding: 25px;
  height: 100%;
`
export const HomeLoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

export const HomeSearchTabContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HomePageSearchInput = styled.input`
  height: 35px;
  width: 40%;
  padding-left: 15px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  outline: none;
  background-color: ${props => (props.isDark ? 'inherit' : '')};
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const HomePageSearchButton = styled.button`
  height: 35px;
  width: 80px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  color: #909090;
  background-color: ${props => (props.isDark ? '#313131' : '')};
`
export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const HomeNoResultContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HomeNoResultImg = styled.img`
  width: 350px;
`

export const HomeNoResultHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 5px;
`

export const HomeNoResultTagLine = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#313131')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  width: 400px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 15px;
`

export const HomeRetryButton = styled.button`
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

export const HomeFailureViewContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const HomeFailureViewImg = styled.img`
  width: 350px;
`
