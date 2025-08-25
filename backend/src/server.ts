import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'pino'
import pinoHttp from 'pino-http'
import { env } from './env'

const app = express()
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
app.use(pinoHttp({ logger }))

app.use(express.json())
app.use(cors({ origin: env.corsOrigin, credentials: true }))

// Allow iframes for dev
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }))

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.listen(env.port, '0.0.0.0', () => {
  logger.info({ port: env.port }, 'API listening')
})
