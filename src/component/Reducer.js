const Reducer = (state, action) => {

    switch (action.type) {
        case 'Name':
            return { ...state, [action.input]: action.value }
    };
}


export default Reducer;

