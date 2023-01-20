export default function Card({image,title}){
    return(<>
    <div className="card">
                            <div className="card-img">
                                <img src={image} />
                            <div className="card-body">{title}</div>
                            </div>
                        </div>
    </>)
}