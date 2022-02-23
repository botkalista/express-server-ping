
function serverStatus({ path, method } = { path: '/status', method: 'GET' }) {
    return function middleware(request, response, next) {
        if (request.method == method && request.path == path) {
            const now = Date.now();
            return response.json({ time: now });
        }
        next();
    }
}

module.exports = serverStatus;