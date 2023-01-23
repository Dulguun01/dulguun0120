import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Articles() {
    const {id} = useParams();
    const [article,setArticle]=useState({});
    useEffect(()=>{
        fetch("https://demo-api-one.vercel.app/api/articles/"+id)
        
        .then((res)=>res.json())
        .then((data)=>{
            setArticle(data.body);
        })
    },[])

  return (
    <div>
<p>{article.text}</p>
    </div>
    
  );
}
