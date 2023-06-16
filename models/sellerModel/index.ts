import mongoose, { Schema } from 'mongoose';
import { EAuthType } from './enums';

const sellerSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true },
        name: { type: String },
        contact_info: { type: String },
        auth_type: { type: String, enum: EAuthType },
        fetch_status: { type: Boolean },
        recustion_interval: { type: String },
        default_values: { type: JSON },
        credentials: { type: JSON }
    },
    {
        timestamps: true,
    }
);

const sellerModel = mongoose.model('seller', sellerSchema);

export default sellerModel;