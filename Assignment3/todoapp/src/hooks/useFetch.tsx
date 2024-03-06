import { useEffect, useState } from "react"
import todoInfo from "../models/todoItem"

const useFetch=(url: string)=>{
    const [data,setData] = useState<todoInfo[]>([])

    useEffect(()=>{
        fetch(url)
     .then(res=>res.json())
     .then(data=>{
        setData(data)
     })
    },[url])

    return [data,setData] as [todoInfo[],React.Dispatch<React.SetStateAction<todoInfo[]>>]
    // return [data,setData]!
    // return data
}

export default useFetch;