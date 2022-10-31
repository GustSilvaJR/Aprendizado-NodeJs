import { createProxyMiddleware } from "http-proxy-middleware";

export function teste (app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
    }));
}