import {createAction, handleActions} from 'redux-actions';
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import produce from "immer";
import {fetcher} from "../core/fetcher";
import {GET_PLACE} from "../core/query";
import createAsyncAction from "../core/createAsyncAction";
import reducerMap from "../core/reducerMap";


enum PlaceAction {
  GET_PLACE = '@Place/GET_PLACE'
}

const GET_TEST = "@test/GET_TEST";

const initialState = {
  data: null,
  error: null,
  loading: null
}

export const testActions = {
  getTest: createAsyncAction(GET_TEST, () => {
    return fetcher.fetch().query(GET_PLACE);
  })
}

export const testReducer = handleActions({
  ...reducerMap(PlaceAction.GET_PLACE, {
    onRequest: (state, action) => {
      return produce(state, draft => {

      })
    },
    onSuccess: (state, action) => {
      return produce(state, draft => {

      })
    },
    onFailure: (state, action) => {
      return produce(state, draft => {

      })
    }
  })
}, initialState)
