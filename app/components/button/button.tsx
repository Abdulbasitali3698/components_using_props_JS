import { ButtonProps } from "@/types/componentsTypes"
import { count } from "console"
export default function Button(props:ButtonProps){
    console.log("props", props.title)
    return(
        <button>{props.title}</button>
    )
}