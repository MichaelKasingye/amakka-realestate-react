import React from 'react'
import Head from 'next/head'

function Header({title, metaName, metaContent}) {
    return (
        <Head>
        <title >{title}</title>
        <meta name={metaName} content={metaContent} />
      </Head>
    )
}

export default Header
