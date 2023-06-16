import express from 'express';
import { errorResponseHelper } from '../../helper/errorResponseHelper';
import { successResponseHelper } from '../../helper/successResponseHelper';
import {
  sellerModel
} from '../../models';
import jwt from 'jsonwebtoken';
import { ISellerTypes } from './types';

// fetch all game

export const addSeller = async (req: express.Request, res: express.Response) => {
  try {
    const sellerData: ISellerTypes = req.body;
    // const { game_name } = gameData;
    // const data = await gameModel.find({ game_name });
    // if (data.length > 0) {
    //   return errorResponseHelper(res, 400, 'The Game Already Exists!');
    // }
    const seller = await sellerModel.create(sellerData);
    successResponseHelper(res, 200, 'seller Added Successfully!', seller);
  } catch (e: any) {
    errorResponseHelper(res, 500, e.message);
  }
};