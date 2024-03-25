import { combineReducers, createStore } from 'redux';
const initialStateCustomer = {
  fullName: '',
  nationaID: '',
  createdAt: '',
};
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationaID: action.payload.nationaID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}
export function createCustomer(fullName, nationaID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationaID,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
}
