import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
`
export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImage = styled.img`
  width: 450px;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 900;
  color: ${props => (props.isDark ? 'white' : '#231f20')};
  margin-top: 50px;
  margin-bottom: 15px;
`

export const NotFoundTagLine = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin-top: 10px;
`
