import React, { FC } from 'react'

import type { MovieType } from '#types/movie'
import requests from '#utils/requests'
import Layout from '#components/Layout'
import Header from '#components/Header'
import Navbar from '#components/Navbar'
import MoviesCollection from '#components/MoviesCollection'

interface HomeProps {
  movies: Array<MovieType>
}

const Home: FC<HomeProps> = ({ movies }) => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <MoviesCollection movies={movies} />
    </Layout>
  )
}

export const getServerSideProps = async context => {
  const genre = context.query.genre

  const { results } = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json())

  return {
    props: {
      movies: results,
    },
  }
}

export default Home
