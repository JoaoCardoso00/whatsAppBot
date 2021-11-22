import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './src/routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes)

app.get('/', (req, res) => {
  return res.send({ Hello: 'World!' });
});

app.listen(PORT, () => console.log(`REST API running in PORT: ${PORT}`));
//+1 415 523 8886 with code join influence-bad.

