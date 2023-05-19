import { useEffect } from "react"

const usetitle = title =>{
    useEffect(()=>{
        document.title = `Toy Troopers | ${title}`
    },[title])
}
export default usetitle