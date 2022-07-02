import '../styles/globals.scss'
import { AppProps } from 'next/app'
import "tailwindcss/tailwind.css"
import React, { useState, useEffect } from "react"
import { Layout } from "../components"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
