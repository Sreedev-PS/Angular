import { createReducer, on } from "@ngrx/store"
import { counterDecrement, counterIncrement } from "./counter-action"

export const counter_Value = 0

export const counterReducer = createReducer(
    counter_Value,

    on(counterIncrement,(state)=>{
        return state +1
    }),

    on(counterDecrement,(state)=> state-1)
)