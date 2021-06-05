import React, { FC } from 'react'
import FlipMove from 'react-flip-move'

import type { MovieType } from '#types/movie'
import MovieCard from '#components/MovieCard'

interface MoviesCollectionProps {
  movies: Array<MovieType>
}

const MoviesCollection: FC<MoviesCollectionProps> = ({ movies }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap justify-center">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </FlipMove>
  )
}

export default MoviesCollection
