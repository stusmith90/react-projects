const ADD = "ADD";
const DELETE = "DELETE";
const COMPLETE = "COMPLETE";
const FILTER = "FILTER";
const CLEAR= "CLEAR";

const types = {
  ADD,
  DELETE,
  COMPLETE,
  FILTER,
  CLEAR
}

export default types;

export interface Action {
  type: string;
  payload?: any;
}