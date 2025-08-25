import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'pino'
import pinoHttp from 'pino-http'

const app = express()
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
app.use(pinoHttp({ logger }))

app.use(express.json())
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: true,
}))

// Allow iframes for dev
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}))

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const PORT = Number(process.env.PORT || 12001)
app.listen(PORT, '0.0.0.0', () => {
  logger.info({ port: PORT }, 'API listening')
})
