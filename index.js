import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server);



// app.get("/", (req,res)=>{
//     res.send('<h1>Hello WOrld</h1>');
// });
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user Connected');
})

server.listen(5000, () => {
    console.log('Listening at port 5000');
})
