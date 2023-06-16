import express from 'express';
import jwt from 'jsonwebtoken';
import { errorResponseHelper } from '../../helper/errorResponseHelper';

const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader?.split(' ')[1];
    if (!token) res.status(401).send('Unauthorized Access');
    const tokenSecret = process.env.ACCESS_TOKEN_SECRET;
    if (tokenSecret && token) {
      jwt.verify(token, tokenSecret, (err, user: any) => {
        if (err) res.status(403).send('Unauthorized Access!');
        res.locals.token = token;
        next();
      });
    }
  } catch (e: any) {
    errorResponseHelper(res, e.statusCode(), e.message());
  }
};

export default authMiddleware;
