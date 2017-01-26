import path from 'path';
import fs from 'fs';
import Express from 'express';

const server = Express();
const port = process.env.PORT || 3000;

/* At the top, with other redirect methods before other routes */
server.get('*',function(req,res,next){
  
});

server.listen(port);
console.log('=== Go to http://localhost:' + port + ' ===');