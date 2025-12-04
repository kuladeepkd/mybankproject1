import { createStore } from "redux"


const initialState={
    username:"",
    mobile: "",
email:"",
balance:0

}
function reducer (state=initialState,action){
    if (action.type=='diposit') 
        return {
        ...state,balance:state.balance+ +action.payload
    }
  else  if (action.type =='withdraw')
        return {
        ...state,balance:state.balance- +action.payload
    }
    else if(action.type=='mobileupdate')
        return {
    ...state,mobile:action.payload
    }
    else if (action.type=="emailupdate") 
        return{
        ...state,email:action.payload
    } 
      else if (action.type=="usernameupdate") 
        return{
        ...state,username:action.payload
    } 
    else return state

}
const store=createStore(reducer); 
export default store;


// store.dispatch({type:'diposit',payload:1000})
// store.dispatch({type:'withdraw',payload:10})
// store.dispatch({type:'newMobile',payload:"9490947066"})
// console.log(store.getState());