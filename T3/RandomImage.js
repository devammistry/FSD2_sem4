import {useState, useEffect} from "react"
import axios from "axios"
function RandomImage() {
    const[myimg, setimg]=useState("");
    useEffect(()=>{
        setInterval(()=>{
            axios.get("http://dog.ceo/api/breeds/image/random")
            .then((response)=>{
                console.log(response.data)
                setimg(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        },2000)
        
    },[])
    return(
            <div>
                <img src={myimg.message} height={300} width={300}></img>
            </div>
        )
}
export default RandomImage