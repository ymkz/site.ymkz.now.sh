/* eslint-disable @typescript-eslint/no-var-requires */

const size = require('next-size')
const offline = require('next-offline')
const optimize = require('next-optimized-images')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([[size], [offline], [optimize], [typescript]], {
  target: 'serverless',
  webpack: config => config
})
