import {
    GET_TABLE_DATA_REQUEST_PATH,
    GET_TABLE_DATA_REQUEST,
    GET_TABLE_DATA_SUCCESS,
    GET_DETAILS_DATA_REQUEST_PATH,
    GET_DETAILS_DATA_REQUEST,
    GET_DETAILS_DATA_SUCCESS,
    SET_DETAILS_ROW
} from '../constants/DataTable'
import { fetchRequest } from '../utils/fetchRequest'

export function getTableData() {
  return (dispatch) => {
    dispatch({
      type: GET_TABLE_DATA_REQUEST
    });

    fetchRequest(GET_TABLE_DATA_REQUEST_PATH)
      .then(data => dispatch({
        type: GET_TABLE_DATA_SUCCESS,
        payload: data
      }));
  }
}

export function getDetailsData() {
  return (dispatch) => {
    dispatch({
      type: GET_DETAILS_DATA_REQUEST
    });

    fetchRequest(GET_DETAILS_DATA_REQUEST_PATH)
      .then(data => dispatch({
        type: GET_DETAILS_DATA_SUCCESS,
        payload: data
      }));
  }
}

export function setDetailsRow(id, index){
  return (dispatch, getState) => {
    const currentState = getState().dataTable;
    let payload = {
      id: id,
      index: index
    };

    if(currentState.selectedDetail && currentState.selectedDetail.id == id){
      payload = null;
    }

    dispatch({
      type: SET_DETAILS_ROW,
      payload: payload
    })
  }
}
