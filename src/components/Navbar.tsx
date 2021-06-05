import React, { FC } from 'react'
import { useRouter } from 'next/router'

import requests from '#utils/requests'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = props => {
  const router = useRouter()

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <div
            key={key}
            className="group last:pr-1"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            <h2 className="cursor-pointer transition duration-100 transform group-hover:scale-125 hover:text-white active:text-red-500">
              {title}
            </h2>
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#1e272e] h-10 w-1/12" />
    </nav>
  )
}

export default Navbar
