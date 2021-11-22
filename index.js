import express from 'express';
import dotenv from 'dotenv';
import twilio from "twilio";
import cors from 'cors';

import routes from './src/routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const { SID, AUTH_TOKEN } = process.env;
const client = twilio(SID, AUTH_TOKEN);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes)

app.listen(PORT, () => console.log(`REST API running in PORT: ${PORT}`));
//+1 415 523 8886 with code join influence-bad.

