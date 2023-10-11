const gateway = require('fast-gateway');
const port = 9001;

const checkAuth = (req, res, next) => {
    const token = req.headers.token;
    console.log(req.headers.token)
    if (req.headers && token) {
        next();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 401;
        res.end(JSON.stringify({ status: 401, message: "Unauthorized" }));
    }
}

const server = gateway({
    middlewares: [checkAuth],   // this is the middleware
    routes: [
        {
            prefix: '/payment',
            target: 'http://localhost:4001',
            middlewares: [checkAuth],   // this is the middleware
            methods: ['GET'],
            hooks: {

            }
        },
        {
            prefix: '/order',
            target: 'http://localhost:4000',
            hooks: {

            }
        }
    ]
})

server.get('/mytesting', (req, resp) => resp.send('Yes called gateway'))

server.start(port).then(server => {
    console.log("Api gateway is running on port 9001")
})