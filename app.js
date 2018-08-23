const net = require('net');
const Request = require('./handlers/request');
const Response = require('./handlers/response');
const resolveAPI = require('./helpers/Resolver').resolveAPI;

global.jobs = {};

net.createServer(function (socket) {

  socket.on('data', function (data) {
    req = new Request(data);
    res = new Response(socket);
    try{
        responseObj =  resolveAPI(req, res) || {};
    } catch(err) {
        res.sendError({
            status: -1,
            message: 'Something went wrong!'
        }, 500);
        console.log('Internal Error!', 500);
    }
    socket.destroy();
  });

}).listen(process.env.PORT || 3104, () => {
    process.stdout.write('Server listening at http://localhost:'+(process.env.PORT || 3104)+'\n');
}).on('error', (err) => {
    console.log('Server error: '+err.toString())
});