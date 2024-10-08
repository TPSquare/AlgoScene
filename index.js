import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.joinPath = (p) => path.join(__dirname, p);

app.use(express.static(app.joinPath('/public')));

app.set('view engine', 'ejs');
app.set('views', app.joinPath('/source/ejs'));

import fs from 'fs';
const version = JSON.parse(await fs.readFileSync('package.json')).version;
app.version = version;
app.get('/data/version', (req, res) => res.json(version));

app.get('/data/local-data/key', (req, res) => res.json(process.env.LOCALDATA_KEY));

app.languages = ['vi', 'en'];
app.get('/data/first-language', (req, res) => res.json(process.env.FIRST_LANGUAGE));

app.get('/data/developing', (req, res) => res.json(process.env.DEVELOPING == 'true' ? true : false));

import CommonPages from './source/controllers/common.js';
await CommonPages.init(app, fs);

import HomePage from './source/controllers/home.js';
await HomePage.init(app, fs, CommonPages.data.home.content);

const port = process.env.PORT || 8002;
app.listen(port, () => console.log(`  ===  http://localhost:${port}  ===`));
