// Action types

export const SET_WIND_OPTIONS = 'flagwaver/wind/SET_WIND_OPTIONS';

// Action creators

export const setWindOptions = (value) => ({
    type: SET_WIND_OPTIONS,
    payload: value
});

// Reducer

const initialState = {
    enabled:                    true,
    controlled:                 false,
    direction:                  270,
    speed:                      10
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_WIND_OPTIONS:
            return { ...state, ...action.payload };

        default:
            return state;
    }
}
