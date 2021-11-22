import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  const data = req;
  
  try {
    await client.messages.create({ 
      body: `${data}`, 
      from: `whatsapp:+${process.env.PHONE_BOT}`,
      to: `whatsapp:+${process.env.PHONE_USER}` 
    }).done();
    return res.send({ message: `Send ${data}` });
  } catch (e) {
    return res.status(400).send({ Error: [e, data] });
  }
});

export default router;