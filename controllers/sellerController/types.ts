import { EAuthType } from "../../models/sellerModel/enums";

export interface ISellerTypes {
  _id?: string;
  username?: string,
  name?: string,
  contact_info?: string,
  auth_type?: EAuthType,
  fetch_status?: boolean,
  recustion_interval?: string,
  default_values?: JSON,
  credentials?: JSON,
}
