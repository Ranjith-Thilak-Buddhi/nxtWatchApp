import './App.css'

import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './Context/AppContext'
import ProtectedRoute from './components/ProtectedRoute/index'
import LoginRoute from './components/LoginRoute/index'
import NotFoundRoute from './components/NotFoundRoute/index'
import Home from './components/Home/index'
import SavedVideosRoute from './components/SavedVideoRoute/index'
import TrendingRoute from './components/TrendingRoute/index'
import GamingRoute from './components/GamingRoute/index'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute/index'

class App extends Component {
  state = {isDark: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  saveOrRemoveVideo = video => {
    const {savedVideos} = this.state
    const videoExist = savedVideos.find(eachItem => eachItem.id === video.id)

    if (videoExist) {
      const filterVideos = savedVideos.filter(
        eachItem => eachItem.id !== video.id,
      )
      this.setState({savedVideos: filterVideos})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    }
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          savedVideos,
          saveOrRemoveVideo: this.saveOrRemoveVideo,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
