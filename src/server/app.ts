"use strict";

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

// Import the required dependencies

const jwt = require('express-jwt');
const cors = require('cors');

const app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(cors());

const authCheck = jwt({
  secret: new Buffer('MYSecret'),
  audience: 'MYClientID'
});

app.get('/api/deals/public', (req: express.Request, res: express.Response)=>{
  let deals = [
    // Array of public deals
  ];
  res.json(deals);
})

// For the private route, we'll add this authCheck middleware
app.get('/api/deals/private', authCheck, (req: express.Request, res: express.Response)=>{
  let deals = [
    // Array of private deals
  ];
  res.json(deals);
})

app.get('/*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    let err: Error = new Error('Not Found');
    next(err);
});

if ('development' == app.get('env')) {
    app.listen(3000, () => {
        console.log('Currently running express on port 3000.');
    });
} else {
    app.listen(8080, () => {
        console.log('Currently running express on port 8080.');
    });
}