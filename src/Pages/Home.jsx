import Card from "../components/Card"

export default function Home(){
    const articles=[{
        image:'https://resource.market.sodonsolution.org/olz/product/2019/11/28/r8jjhfr4uqt7oqjg/imageform_m.jpg',
        title:"wdauhudjawudhuawu"
    },{
        image:'https://resource.market.sodonsolution.org/olz/product/2019/11/28/r8jjhfr4uqt7oqjg/imageform_m.jpg',
        title:"wdauhudjawudhuawu"
    },{
        image:'https://resource.market.sodonsolution.org/olz/product/2019/11/28/r8jjhfr4uqt7oqjg/imageform_m.jpg',
        title:"wdauhudjawudhuawu"
    }]
    return(
        <>
        <main>
            <div className="container">
                <div className="row">
                    {articles.map((article)=>(

                    <div className="col-md-3 col-sm-6 col-12">
                        <Card title={article.title} image={article.image} />
                        

                    </div>
                    ))}
                </div>
            </div>
        </main>
        
       

        </>
    )
}
