import 'react-native-get-random-values';
import uuidV4 from 'uuid/dist/v4';

import {ADD_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
  items: [
    {name: 'tomatoes', price: '100', id: uuidV4()},
    {name: 'flowers', price: '5', id: uuidV4()},
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        items: [...state.items, action.item],
      };
    }
    case DELETE_ITEM: {
      const index = state.items.findIndex(item => item.id === action.item.id);
      return {
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;
