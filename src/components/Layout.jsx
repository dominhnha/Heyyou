import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Routes from '../routes/Routes'


import Header from './Header'
 import Footer from './Footer'

const layout = () => {
  return (
      <BrowserRouter>
            <Route
                render={props => (
                  <div>
                      <div className="container">
                          <Header {...props} />
                      </div>
                      <div className="main">
                        <div className="container">
                          <Routes/>
                        </div>
                      </div>
                       <Footer/>
                  </div>
                )}
            />
      </BrowserRouter>
  )
}

export default layout