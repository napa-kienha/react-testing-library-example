import homeTypes from "./types";
import { action } from "typesafe-actions";

export const fetchAllCountries = (data) =>
  action(homeTypes.FETCH_ALL_COUNTRIES_DATA, data);

export const saveCountries = (data) =>
  action(homeTypes.SAVE_COUNTRIES_DATA, data);

export const saveInforUser = (data) => action(homeTypes.SAVE_INFOR_USER, data);
