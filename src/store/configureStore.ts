import { createStore } from "redux"
import reducer from "./reducer"
import { initialState } from "./types"

export default function buildStore() {
    return createStore(reducer, initialState, undefined);
}