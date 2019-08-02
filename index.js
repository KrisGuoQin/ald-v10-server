const express = require('express');
const proxy = require('http-proxy-middleware');
const server = express();
const staticMiddleware = express.static('build');


server.use(staticMiddleware);
server.use('/zh-hans', proxy({
    target: 'http://139.196.28.170:8811',
    changeOrigin: true
}));

server.listen(8080, () => {
    console.log('app run on port 8080');
});