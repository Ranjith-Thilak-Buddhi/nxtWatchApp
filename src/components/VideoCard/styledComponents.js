import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  width: 100%;
  margin-right: auto;
  margin-bottom: 55px;
`

export const VideoCardStyledLink = styled(Link)`
  text-decoration: none;
  color: '#181818';
  display: flex;
`

export const VideoCardStyledThumbnail = styled.img`
  width: 50%;
  margin-bottom: auto;
  margin-top: auto;
`
export const VideoProfileDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 15px;
`

export const VideoDetailsContainer = styled.div``

export const VideoTitle = styled.p`
  font-size: 25px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
`
export const ChannelTitle = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-top: 20px;
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
