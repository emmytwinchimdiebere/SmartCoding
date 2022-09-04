import axios from 'axios';
import React,{useEffect, useState} from 'react'


const Node = ()=>{
        const [dataFromNode, setDataFromNode] = useState()
       
       
            const asyncCallFromNode = async()=>{
                await axios({
                    method:"get",
                    url:"http://localhost:5000/api/users",
                    headers:{
                        "content-Type":"application/json",
                        "Accept":"application/json"
                    }
                }).then((res)=>{
                    setDataFromNode(res.data);
                    console.log(res);
                }).catch((e)=>console.log(e.message))
               
            }

       
       
       
       
       
 useEffect(()=>{

asyncCallFromNode()    
       
},[])
return(
    <div>
        {(typeof dataFromNode === "undefined") ? (
            <p>....loading</p>
        ):(
          <div>
            {
                  dataFromNode.map((users,i)=>
                  <li key={i}>{users.Email}, {users.Password}</li>
                 
              )
            }
          </div>
        )}
    </div>
)


}

export default Node;