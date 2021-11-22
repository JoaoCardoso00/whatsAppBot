import express from 'express';
import dotenv from 'dotenv';
import twilio from "twilio";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const { SID, AUTH_TOKEN } = process.env;
const client = twilio(SID, AUTH_TOKEN);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    await client.messages.create({ 
      body: 'Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/', 
      from: `whatsapp:+${process.env.PHONE_BOT}`,
      to: `whatsapp:+${process.env.PHONE_USER}` 
    }).done();
    return res.send({ message: 'Send' });
  } catch (e) {
    return res.status(400).send({ Error: e });
  }
});

app.listen(PORT, () => console.log(`REST API running in PORT: ${PORT}`));
//+1 415 523 8886 with code join influence-bad.

