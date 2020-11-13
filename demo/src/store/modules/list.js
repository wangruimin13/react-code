const initState = {
    list:[],
    total:0
}
export function reducer(state = initState,action){
    // let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD_ACOUNT':
        let newState = state;
        if(newState.list.find(action.val)){
            let index = newState.list.findIndex(item=>item.name==action.val.name);
            newState.list[index].count++;
        }
        return {...state,newState}
    }
}