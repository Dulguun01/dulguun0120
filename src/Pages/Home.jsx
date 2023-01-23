import { useEffect, useState } from "react";
import Card from "../components/Card";
import Articles from "./Articles";



export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      });
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {categories.map((article,index) => (
              <div className="col-md-3 col-sm-6 col-12" key={index}>
                
                <Card title={article.name} image={article.imageUrl} id={article.id}
                articleId={article.id}/>
             
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
