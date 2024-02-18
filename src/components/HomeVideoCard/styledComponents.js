import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  width: 32%;
  margin-right: auto;
  margin-bottom: 55px;
`

export const VideoCardStyledLink = styled(Link)`
  text-decoration: none;
  color: '#181818';
`

export const VideoCardStyledThumbnail = styled.img`
  width: 100%;
  margin-bottom: auto;
  margin-top: auto;
`
export const VideoProfileDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
`

export const VideoProfileImg = styled.img`
  width: 40px;
  margin-right: 18px;
`

export const VideoDetailsContainer = styled.div``

export const VideoTitle = styled.p`
  font-size: 15px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#231f20')};
`

export const ViewsAndTimeContainer = styled.div`
  display: flex;
  margin-top: 0px;
  color: #475569;
`

export const VideoCardViews = styled.p`
  margin-top: 5px;
`

export const VideoTime = styled.p`
  margin-left: 10px;
  margin-top: 5px;
`
export const ChannelTitle = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-top: 20px;
`
