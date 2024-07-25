import React, { useReducer } from 'react'

const UseReducer = () => {
    /* const initialState = { count: 0 };
    const reducer = (state,action) => {
        switch(action.type)
        {
            case 'increment':
                return {count : state.count + 1}
            case 'decrement':
                if(state.count!=0)
                return {count : state.count -1}
                else
                return {count : state.count}
            case 'reset':
                return {count : 0}
            default: 
                alert("The value is null please set value.")
                return {count : state.count}
        }
    };
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
         <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'test' })}>test</button>
         </div>
    </>
  ) */
    const initialState = 0;
    const reducer = (currvalue,action) => {
        switch(action)
        {
            case 'increment':
                return currvalue + 1
            case 'decrement':
                if(currvalue!=0)
                return currvalue -1
                else
                return currvalue
            case 'reset':
                return  0
            default: 
                alert("The value is null please set value.")
                return currvalue
        }
    };
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
         <div>
            <p>Count: {state}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch()}>test</button>
         </div>
    </>
  )
}

export default UseReducer