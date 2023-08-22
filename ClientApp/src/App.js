import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { Layout } from './components/Layout'
import NotFoundPage from './components/NotFoundPage'
import './custom.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route
            return <Route key={index} {...rest} element={element} />
          })}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    )
  }
}
