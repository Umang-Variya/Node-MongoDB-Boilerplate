import express from 'express';
import router from './routes';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { corsOptions, swaggerOptions } from './constants';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 3300;
const mongoUrl = process.env.MONGOURL || "mongodb://localhost:27017/diamond";
const specs = swaggerJsDoc(swaggerOptions);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.static('public'));
app.use('/images', express.static('/images'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/v1', router);

if (mongoUrl) {
  mongoose.connect(mongoUrl).then(() => console.log('Mongo Connected'));
} else {
  console.log('Mongo is not connected!!');
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
