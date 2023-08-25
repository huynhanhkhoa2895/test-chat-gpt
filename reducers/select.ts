import {createSelector} from 'reselect';
import {State} from './index';

const selectRootItems = (state: any) => state.root;
export const selectChat = createSelector(
  selectRootItems,
  (state: State) => state.chats
);
