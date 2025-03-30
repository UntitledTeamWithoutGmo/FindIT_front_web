const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Префикс для API-запросов
    createProxyMiddleware({
      target: 'http://localhost:8080', // Адрес Java-сервера
      changeOrigin: true,
    })
  );
};