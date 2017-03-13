//{TYPE: 'ADD', name:'USA'}

export default function countries(state=[], action) {

    console.log("countries", state, action);

    switch(action.type) {
        case "ADD": 
            return [...state, action.name];
        
        case "REMOVE": 
            return state.filter ( c => c != action.name);
    }

    return state;
}