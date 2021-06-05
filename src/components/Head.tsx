import NextHead from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { MetaProps } from '#types/layout'

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter()

  const meta: MetaProps = {
    title: 'Hooloo Movies',
    description: 'Hooloo movies suggestions',
    image: `http://localhost:3000/images/site-preview.png`,
    type: 'website',
    date: '05/06/2021',
    ...customMeta,
  }

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="canonical" href={`http://localhost:3000/${router.asPath}`} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </NextHead>
  )
}

export default Head
