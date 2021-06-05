import React, { FC } from 'react'

import Layout from '#components/Layout'
import Header from '#components/Header'

interface HomeProps {}

const Home: FC<HomeProps> = props => {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default Home
