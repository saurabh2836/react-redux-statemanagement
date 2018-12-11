
import * as actionTypes from '../actions';


const intinalState = {
    results: []
}

const reducer = (state = intinalState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id:new Date(),value:action.result})
            }

        case actionTypes.DELETE_RESULT:

            const updatedArray =state.results.filter(result => result.id !== action.resultElementId );
            return {
                ...state,
                results:updatedArray
            }

        default:
            return state;

    }

}

export default reducer;