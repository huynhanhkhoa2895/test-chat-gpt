import {createAction} from '@reduxjs/toolkit';

export const ADD_CHAT = 'ADD_CHAT';
export const UPDATE_CHAT = 'UPDATE_CHAT';

export const addChat = createAction<any, any>(
  ADD_CHAT,
  (value: Message) => ({payload: value})
);

export const updateChat = createAction<any, any>(
  UPDATE_CHAT,
  (index: number,value: Message) => ({payload: {index,value}})
);