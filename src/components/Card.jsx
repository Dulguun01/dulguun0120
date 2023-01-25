import { Link } from "react-router-dom";

export default function Card({ image, title ,index,articleId}) {

  return (

    <Link  to={"/articles/"+articleId}>
      <div className="card" >
        <div className="card-img">
          <img src={image} />
          <div className="card-body">{title}</div>
        </div>
      </div>
    </Link>
      
  );
}
