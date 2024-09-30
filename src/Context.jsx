import { createContext, useState } from "react"
export const DataContext = createContext();

export default function Context({children}) {

    const [items,setItems] = useState([]);
  return (
    <>

    <DataContext.Provider value={{items,setItems}}>
        {children}
    </DataContext.Provider>

    </>
  )
}
