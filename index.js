import express  from 'express';
import morgan  from 'morgan';
import path  from 'path';
import ejs  from 'ejs';
import { fileURLToPath } from 'url';

import routehome from './routerhome.js';
import routerjob from './router/job.js';

const __dirname = path.dirname(fileURLTopath(import.meta.url));

const app=express();
const port = 3000;

app.use(morgan("common"));
app.set('./views', path.join(__dirname));
app.engine('html', ejs.renderFile);
app.set('views engine, 'html');
app.use(express.static('./public'));

app.use(morgan("common"));


