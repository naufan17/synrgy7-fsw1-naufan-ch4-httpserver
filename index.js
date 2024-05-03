const http = require('http');
const { getPeople, getPeopleById, getPeopleByUsername } =  require('./app/services/people')

const port = 5000;
const host = 'localhost';
 
const onRequest = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const { url, method } = req;
    const username = req.url.split('/')[2]
    const id = Number(req.url.split('/')[2])

    if (url === '/people' && method === 'GET') {
        getPeople(req, res);
    } else if (id && method === 'GET') {
        getPeopleById(req, res, id);
    } else if (username && method === 'GET') {
        getPeopleByUsername(req, res, username);
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: 'Route not found!',
        }));
    }
};

const server = http.createServer(onRequest);
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});