/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
     "links.papareact.com"
      
    ],
  },
  env: {
    mapbox_key:'pk.eyJ1IjoiYXJ1bmF2YWJhc3UtMDMiLCJhIjoiY2wwbnlpenlpMGQ0MzNmbXNudnQ3c2lndyJ9.0mvhKd1m9hFvXmOEV6vRMA'
  }
}
