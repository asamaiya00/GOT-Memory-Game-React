import React from 'react';
import { ADD_IMAGE, REMOVE_IMAGE } from './action';

export const reducer = (state, {type, payload}) => {
    console.log("reached store");
    switch (type) {
        case ADD_IMAGE:
            const Images = [...state.images, payload]
            return { ...state, images: Images };

        case REMOVE_IMAGE:
            const newImages = state.images.filter((image, index) => index !== payload);

            return { ...state, images: newImages };

        default:
            return state
    }

}

const AppContext = React.createContext()

export default AppContext;