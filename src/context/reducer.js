import { SET_VISIBLE, SET_NOT_VISIBLE } from './types';

export const initialState = {
  visible: [],
};

const addVisible = (array, value) => {
  let arr = array;
  if (Array.isArray(arr) && arr.indexOf(value) <= -1) {
    arr = [...arr, value];
  }
  return arr ?? [];
};

const removeVisible = (array, value) => {
  let arr = array;
  if (Array.isArray(arr) && arr.length) {
    arr = arr.filter((res) => res !== value);
  }
  return arr ?? [];
};

function reducer(state, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: addVisible(state.visible, action.payload),
      };
    case SET_NOT_VISIBLE:
      return {
        ...state,
        visible: removeVisible(state.visible, action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
