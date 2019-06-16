const http = require ('http');

const app = require('./app')

const PORT = process.env.PORT || 8000;

const server = http.createServer( app )

const socketIO = require('socket.io');
const io = socketIO( server );

io.on ('connection', ( socket ) => {
   console.log(" Successfully connected to Socket! Socket id is:", socket.id );
   socket.on('chat', message => {
       io.sockets.emit( 'chat', data )
   })
})

server.listen( PORT, () => console.log( `Server is running on port: ${ PORT }` ) )
