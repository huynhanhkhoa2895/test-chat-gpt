import {createReducer} from '@reduxjs/toolkit';
import {
  ADD_CHAT,
  UPDATE_CHAT
} from './actions';

export interface State {
  chats: Message[];
}

const defaultState: State = {
  chats: []
};

const rootReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(ADD_CHAT, (state, action: any) => {
      state.chats = [...state.chats, ...[action.payload]];
      return state
    })
    .addCase(UPDATE_CHAT, (state, action: any) => {
      const {index,value} = action.payload;
      const content: any = state.chats[index].content+value.content;
      state.chats[index].content = content;
      return state
    });
});

export default rootReducer;
