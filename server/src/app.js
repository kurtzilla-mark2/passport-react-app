
import express from 'express';
import bodyParser from 'body-parser';

import auth from './routes/auth';
import events from './routes/events';
import users from './routes/users';

require('dotenv').config();

const app = express();


app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);


module.exports = app;
