let initialState
if(localStorage.getItem("user")){
    initialState = JSON.parse(localStorage.getItem("user"))
}else{
     initialState = {
        isUserLoggedIn:false
    }
}


console.log("Initial State::",initialState)


const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case "LOGIN":
            state = {...state,...action.payload,isUserLoggedIn:true}
            localStorage.setItem("user",JSON.stringify(state))
            return state;

        case "LOGOUT":
            localStorage.removeItem("user")
            state=initialState;
            return state;

        default:
            return state;
    }
}

export default userReducer;