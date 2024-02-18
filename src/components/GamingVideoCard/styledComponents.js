import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  width: 30%;
  margin-right: auto;
  margin-bottom: 55px;
`

export const VideoCardStyledLink = styled(Link)`
  text-decoration: none;
  color: '#181818';
  display: flex;
  flex-direction: column;
`

export const VideoCardStyledThumbnail = styled.img`
  width: 100%;
  margin-bottom: auto;
  margin-top: auto;
`

export const VideoDetailsContainer = styled.div``

export const VideoTitle = styled.p`
  font-size: 15px;
  margin-top: 20px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  margin-bottom: 4px;
`

export const VideoCardViews = styled.p`
  margin-top: 0px;
  color: #475569;
`
