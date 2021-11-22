import { Router } from 'express';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { SID, AUTH_TOKEN } = process.env;
    const client = twilio(SID, AUTH_TOKEN);

    const { MESSAGE } = req;

    await client.messages.create({ 
      body: `teste ${MESSAGE}`, 
      from: `whatsapp:+${process.env.PHONE_BOT}`,
      to: `whatsapp:+${process.env.PHONE_USER}` 
    }).done();

    return res.send({ message: `Send ${MESSAGE}` });
  } catch (e) {
    return res.status(400).send({ Error: [e, MESSAGE] });
  }
});

export default router;