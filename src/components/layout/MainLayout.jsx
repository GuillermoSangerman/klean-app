import React from 'react'
import { Appbar } from '../Appbar'
import { Outlet } from 'react-router'
import {Footer} from "../Footer"

export function MainLayout() {
  return (
    <>
        <Appbar/>
        <Outlet/>
        <Footer/>
    </>

  )
}
