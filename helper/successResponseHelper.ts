import express from 'express';
export const successResponseHelper = (
  res: express.Response,
  statusCode: number,
  message: string,
  data?: any,
  totalCount?: number
) => {
  if (!data) {
    res.status(statusCode).json({ message });
  } else {
    if (totalCount) {
      res.status(statusCode).json({ message, success: true, data, totalCount });
    } else {
      res.status(statusCode).json({ message, success: true, data });
    }
  }
};
