import 'react-native-get-random-values';
import uuidV4 from 'uuid/dist/v4';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item: {
      ...item,
      id: uuidV4(),
    },
  };
};

export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    item,
  };
};
