import { DATA_ERR, DATA_SUCESS, DATA_LOADING } from "./ActionTypes";

export const initstate = {
    image_data: {
        loading: false,
        data: [],
        err: false,
    },
};

export const reducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case DATA_SUCESS:
            return {
                ...state,
                image_data: {
                    loading: false,
                    data: payload,
                },
            };
        case DATA_ERR:
            return {
                ...state,
                image_data: {
                    ...state.image_data,
                    err: true,
                },
            };

        case DATA_LOADING:
            return {
                ...state,
                image_data: {
                    ...state.image_data,
                    loading: true,
                },
            };
    }
};