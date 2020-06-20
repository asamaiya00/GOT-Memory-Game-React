import { UPDATE_GAME } from "../actions/gameActions";

const gameReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_GAME:
            return { name: payload }


        default:
            return state
    }

}

export default gameReducer;