import {createAction, handleActions} from 'redux-actions';
import produce from "immer";
import {fetcher} from "../core/fetcher";
import {GET_PLACE} from "../core/query";
import createAsyncAction from "../core/createAsyncAction";
import reducerMap from "../core/reducerMap";
import {Place} from "../core/schema";


enum PlaceAction {
  GET_PLACE = '@Place/GET_PLACE'
}

interface InitialState {
  data: null | Place[]
  error: null | Error
  loading: boolean
}

const initialState: InitialState = {
  data: null,
  error: null,
  loading: false
}

export const PlaceActions = {
  getPlace: createAsyncAction(PlaceAction.GET_PLACE, () => {
    return fetcher.fetch().query(GET_PLACE);
  })
}

export const place = handleActions({
  ...reducerMap<InitialState, { data: { getPlace: Place[] } }>(PlaceAction.GET_PLACE, {
    onRequest: (state, action) => {
      return produce(state, (draft: InitialState) => {
        draft.data = null
        draft.error = null
        draft.loading = true
      })
    },
    onSuccess: (state, action) => {
      return produce(state, (draft: InitialState) => {
        draft.data = action.payload.data.getPlace
        draft.error = null
        draft.loading = false
      })
    },
    onFailure: (state, action) => {
      return produce(state, (draft: InitialState) => {
        draft.data = null
        draft.error = action.payload
        draft.loading = false
      })
    }
  })
}, initialState)
