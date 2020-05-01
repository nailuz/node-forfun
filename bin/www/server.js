import app from '../../src/app/app'
import http from 'http'
import 'dotenv/config'

const server = http.createServer(app)
server.listen(process.env.NODE_PORT, process.env.NODE_HOST)
