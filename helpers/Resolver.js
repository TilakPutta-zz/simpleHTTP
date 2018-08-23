const routes = require('../routes');
const getParams = require('./Params').getParams;
module.exports = {
    resolveAPI: (req, res) => {
        matchedPath = null;
        for (const path in routes) {
            if (routes.hasOwnProperty(path)) {
                re = new RegExp('<[A-z]*>');
                rePath = path.split(re).join('[A-z 0-9]*');
                re = new RegExp('^'+rePath+'$');
                if (re.test(req.path)){
                    matchedPath = path;
                }
            }
        }
        
        if (!matchedPath) {
            res.sendError({
                status: -1,
                message: 'Path not Found!'
            }, 404);
            console.log('Path not Found!', 404);
        } else if(!routes[matchedPath].hasOwnProperty(req.method)) {
            res.sendError({
                status: -1,
                message: `Invalid Request - ${req.method} not allowed!`
            }, 403);
            console.log(matchedPath, 403);
        } else {
            req.query = getParams(req.path, matchedPath);
            api = require('.'+routes[matchedPath][req.method].api);
            api(req, res);
            console.log(matchedPath, 200);
        }
        // console.log(routes);
    }

}