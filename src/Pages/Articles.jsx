import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Articles() {
    const {id} = useParams();
    const [article,setArticle]=useState([]);
    console.log(id);
    useEffect(()=>{
      axios.get("http://localhost:8000/status/"+id)
      .then((res)=>{
        setArticle(res.data)
        console.log(res.data);
      })
        
    },[])

  return (
    
    <div>
      {article.title}
    </div>
   
   
    
  );
}
