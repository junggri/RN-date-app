import createActionType from "./createActionType";
import {ReducerMapValue} from "redux-actions";

interface IReducer<State, Payload, Failure = Error> {
  onRequest?: ReducerMapValue<State, Payload>
  onSuccess?: ReducerMapValue<State, Payload>,
  onFailure?: ReducerMapValue<State, Failure>
}

export default function ReducerMap<State, Payload, Failure = Error>(
  type: string,
  reducer: IReducer<State, Payload>
) {

  const {REQUEST, SUCCESS, FAILURE} = createActionType(type);
  const reducerMap: { [key: string]: ReducerMapValue<State, Payload> | ReducerMapValue<State, Payload> | ReducerMapValue<State, Failure> } = {}

  if (reducer.onRequest) {
    reducerMap[REQUEST] = reducer.onRequest
  }

  if (reducer.onSuccess) {
    reducerMap[SUCCESS] = reducer.onSuccess
  }

  if (reducer.onFailure) {
    reducerMap[FAILURE] = reducer.onFailure
  }
  return reducerMap
}
