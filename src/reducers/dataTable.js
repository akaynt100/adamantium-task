import {
    GET_TABLE_DATA_REQUEST,
    GET_TABLE_DATA_SUCCESS,
    GET_DETAILS_DATA_REQUEST,
    GET_DETAILS_DATA_SUCCESS,
    SET_DETAILS_ROW
} from '../constants/DataTable'

const initialState = {
  data: [],
  details: {},
  selectedDetail: null,
  fetching: false
};

export default function dataTable(state = initialState, action) {

  switch (action.type) {
    case GET_TABLE_DATA_REQUEST:
      return { ...state, fetching: true }

    case GET_TABLE_DATA_SUCCESS:
      return { ...state, data: action.payload, fetching: false }

    case GET_DETAILS_DATA_REQUEST:
      return { ...state, fetching: true }

    case GET_DETAILS_DATA_SUCCESS:
      return { ...state, details: action.payload, fetching: false }

    case SET_DETAILS_ROW:
      return { ...state, selectedDetail: action.payload, fetching: false }

    default:
      return state;
  }

}
