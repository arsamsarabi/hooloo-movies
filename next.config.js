const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: ['images.tmdb.org'],
  },
})
