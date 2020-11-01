import { Router } from 'express';

const router = Router();

router.post('/users', (request, response) => {
  const { name, email } = request.body;

  return response.json({ name, email });
});

export default router;
