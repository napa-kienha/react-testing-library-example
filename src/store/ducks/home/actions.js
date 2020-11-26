import homeTypes from "./type";
import { action } from "typesafe-actions";

export const saveCountries = (data) =>
  action(homeTypes.SAVE_COUNTRIES_DATA, data);

export const saveInforUser = (data) => action(homeTypes.SAVE_INFOR_USER, data);
