import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  saveOrRemoveVideos: () => {},
})

export default AppContext
