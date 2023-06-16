import express from 'express';
export function errorResponseHelper(
  res: express.Response,
  statusCode: number,
  errorMessage: string
) {
  res.status(statusCode).json({
    success: false,
    message: errorMessage,
  });
}
