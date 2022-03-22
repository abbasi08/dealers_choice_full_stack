import axios from "axios";

// Action Types
const CREATE_ITEM = "CREATE_ITEM";
const SET_ITEMS = "SET_ITEMS";
const DONATE_ITEM = "DONATE_ITEM";

// Action Creators
const _createItem = (item) => {
  return {
    type: CREATE_ITEM,
    item,
  };
};

const _setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};

const _donateItem = (item) => {
  return {
    type: DONATE_ITEM,
    item,
  };
};

// Thunks
const createItem = (item, category) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/items", item);
    dispatch(_createItem(created));
    category.push("/");
  };
};

const fetchItems = () => {
  return async (dispatch) => {
    const { data: items } = await axios.get("/items");
    dispatch(_setItems(items));
  };
};

// Reducer
const currItemsReducer = (state = [], action) => {
  if (action.type === SET_ITEMS) {
    return action.items;
  }
  if (action.type === DONATE_ITEM) {
    return state.filter((item) => item.id !== action.item.id);
  }
  if (action.type === CREATE_ITEM) {
    return [...state, action.item];
  }
  return state;
};

export default currItemsReducer;
export { createItem, fetchItems };
