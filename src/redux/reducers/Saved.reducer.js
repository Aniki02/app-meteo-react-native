import React from "react";

const initialState = {saved: []}
export const SavedReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'ADD':
            nextState = {
                ...state,
                saved: [...state.saved, action.value]
            }
            return nextState || state;
        case 'DEL':
            const savedIndex = state.saved.findIndex(item => item.id === action.value.id)
            if(savedIndex !== -1){
                nextState = {
                    ...state,
                    saved: state.saved.filter((item, index) => index !== savedIndex)
                }
            }
            return nextState || state;
        default :
            return state;
    }
}
