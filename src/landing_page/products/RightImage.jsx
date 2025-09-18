export default function RightImage({imgURL,
    title,
    description,
    learnMore,
}){
    return(
        <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="p-3">{title}</h1>
            <p classNmae="text-muted p-3">{description}</p>
            <div>
              {" "}
              <a href={learnMore} style={{textDecoration:"none" , color:"#387ED1"}}>
                learnMore<i className="fa-solid fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
            <img src={imgURL} className="img-fluid productImage" />
          </div>
        </div>
      </div>
    );
}