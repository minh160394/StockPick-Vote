import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import route_login from './login/user_auth.router';
import route_register from './register/user_register.router';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/register',route_register);
router.use('/login',route_login);
export default router;
