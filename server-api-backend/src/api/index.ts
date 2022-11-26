import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import route from './register/user_register.router';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/register',route);

export default router;
