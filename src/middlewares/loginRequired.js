import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ errors: ['Login necessário'] });

  const [, token] = authorization.split(' ');

  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = payload;
    const user = await User.findOne({ where: { id, email } });
    if (!user) return res.status(401).json({ errors: ['Usuário inválido'] });
    req.userId = id;
    req.userEmail = email;
    return next();
  }
  catch (err) {
    return res.status(401).json({ errors: ['Token inválido ou expirado'] });
  }
};
