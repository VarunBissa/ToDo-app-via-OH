export const env = {
  port: Number(process.env.PORT || 12001),
  corsOrigin: (process.env.CORS_ORIGIN || '*').split(',').map(s => s.trim()),
  accessSecret: process.env.JWT_ACCESS_SECRET || 'dev_access_secret',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'dev_refresh_secret',
  accessTtl: process.env.ACCESS_TOKEN_TTL || '15m',
  refreshTtl: process.env.REFRESH_TOKEN_TTL || '7d',
}
