import {createContext} from 'react'
export const updateContext = createContext();

export const UpdateProvider = (props) => {


    return(
    <updateContext.Provider value={{}}>
        {props.children}
    </updateContext.Provider>
    )
}