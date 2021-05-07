import React from 'react'

import Nav from './components/Nav'
import Dashboard from './Dashboard';

class Layout extends React.Component {
  render() {
    return (<>
      <Nav />
      <Dashboard />
    </>);
  }
}

export default Layout;