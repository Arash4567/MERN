import React from 'react'
import Index from '../Pages/Index'
import Login from '../Pages/Login'
import MainPage from '../Pages/MainPage'

export const privateRoutes = [
  {path: "", element: <Index />, exact: true},
  {path: "/posts", element: <MainPage />, exact: true}
]

export const publicRoutes = [
  {path: "/login", element: <Login />, exact: true}
]
