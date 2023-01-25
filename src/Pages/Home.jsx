import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios, { Axios } from "axios";



export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/status')
    .then((res)=>{
      setCategories(res.data)
      console.log(res);
    })
  
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {categories.map((article,index) => (
              <div className="col-md-3 col-sm-6 col-12" key={index}>
                
                <Card title={article.title} image={article.imageUrl}
                articleId={article.id}/>
             
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
