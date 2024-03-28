import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationaID: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationaID) {
        return {
          payload: { fullName, nationaID, createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationaID = action.payload.nationaID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
      state.nationaID = action.payload;
    },
  },
});
export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'customer/createCustomer':
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationaID: action.payload.nationaID,
//         createdAt: action.payload.createdAt,
//       };
//     case 'customer/updateName':
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// }
// export function createCustomer(fullName, nationaID) {
//   return {
//     type: 'customer/createCustomer',
//     payload: {
//       fullName,
//       nationaID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }
// export function updateName(fullName) {
//   return {
//     type: 'customer/updateName',
//     payload: fullName,
//   };
// }
