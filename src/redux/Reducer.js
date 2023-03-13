// import {
//   addContactAction,
//   deleteContactAction,
//   setNameFilterAction,
// } from './Actions';
// import { createReducer } from '@reduxjs/toolkit';

// export const contactsInitialState = [
//   { id: 1, name: 'mateusz', number: '83823023032' },
//   { id: 2, name: 'mateusze k', number: '83823023032' },
// ];
// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContactAction]: (state, action) => {
//     return [...state, action.payload];
//   },

//   [deleteContactAction]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });
// export const filterInitialState = '';
// export const filterReducer = createReducer(filterInitialState, {
//   [setNameFilterAction]: action => {
//     return action.payload;
//   },
// });
