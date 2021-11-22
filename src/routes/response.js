import { Router } from 'express';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { SID, AUTH_TOKEN } = process.env;
    const client = twilio(SID, AUTH_TOKEN);

    await client.messages.create({ 
      body: `teste ${JSON.stringify(req)}`, 
      from: `whatsapp:+${process.env.PHONE_BOT}`,
      to: `whatsapp:+${process.env.PHONE_USER}` 
    }).done();

    return res.send({ message: `Send ${JSON.stringify(req)}` });
  } catch (e) {
    return res.status(400).send({ Error: [e, JSON.stringify(req)] });
  }
});

export default router;