import express from 'express';
import sendMailController from './controller/sendMailControler';

const router = express()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/sendmail',sendMailController)

export default router
