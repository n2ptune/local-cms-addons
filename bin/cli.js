#!/usr/bin/env node
const handler = require('serve-handler')
const http = require('http')
const path = require('path')
const PORT = 4500

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: path.resolve(__dirname, '../', 'dist')
  })
})

server.listen(PORT, () => {
  console.log(`started server at http://localhost:${PORT}`)
})
