import React from 'react'

import { MetaProps } from '#types/layout'
import Head from '#components/Head'

type LayoutProps = {
  children: React.ReactNode
  customMeta?: MetaProps
}

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Head customMeta={customMeta} />
      <div>{children}</div>
    </div>
  )
}

export default Layout
