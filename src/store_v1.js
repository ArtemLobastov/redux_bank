import { combineReducers, createStore } from 'redux';
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};
const initialStateCustomer = {
  fullName: '',
  nationaID: '',
  createdAt: '',
};
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdrawal':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
function customerReducer(state = initialStateCustomer, action) {
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
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}
function withdrawal(amount) {
  return { type: 'account/withdrawal', payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } };
}
function payLoan() {
  return { type: 'account/payLoan' };
}
function createCustomer(fullName, nationaID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationaID,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
}
store.dispatch(deposit(500));
store.dispatch(withdrawal(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer('Artem', 'MT4815162342'));
console.log(store.getState());
store.dispatch(updateName('Jonas', '361054'));
console.log(store.getState());
store.dispatch(deposit(999));
console.log(store.getState());
