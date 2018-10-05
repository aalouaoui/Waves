import {
  GET_BRANDS,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SALES,
  GET_WOODS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BRANDS:
      return { ...state, brands: action.payload };

    case GET_PRODUCTS_BY_ARRIVAL:
      return { ...state, byArrival: action.payload };

    case GET_PRODUCTS_BY_SALES:
      return { ...state, bySales: action.payload };

    case GET_WOODS:
      return { ...state, woods: action.payload };

    default:
      return state;
  }
}
