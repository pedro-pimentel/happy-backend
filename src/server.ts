import path from 'path';

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

// var corsOptions = {
//     origin: 'https://happy-backend-nlw.herokuapp.com/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

var corsOptions = {
    origin: function (origin, callback) {
        // db.loadOrigins is an example call to load
        // a list of origins from a backing database
        db.loadOrigins(function (error, origins) {
            callback(error, origins)
        })
    }
}

// app.use(cors());
app.use(express.json());
app.use(routes);
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(process.env.PORT || 3333)