import React, { FC, forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

import type { MovieType } from '#types/movie'

interface MovieCardProps {
  movie: MovieType
}

const MovieCard = forwardRef<HTMLElement, MovieCardProps>(({ movie }, ref) => {
  const IMAGE_BASE_URL = 'https://images.tmdb.org/t/p/original/'
  return (
    <article
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${IMAGE_BASE_URL}${movie.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div>
        <h2 className="mt-1 text-l text-white">
          {movie.title || movie.original_title || movie.name}
        </h2>
        <p className="truncate max-w-md">{movie.overview}</p>
        <p className="flex items-center opacity-0 transition-all  ease-in-out group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} -`}{' '}
          {movie.release_date || movie.first_air_date} -{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </article>
  )
})

export default MovieCard
