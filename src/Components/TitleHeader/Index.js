import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Index({title}) {
  return (
    <HelmetProvider>
    <Helmet>
      <title>{title}</title>
    </Helmet>
  </HelmetProvider>
  )
}
