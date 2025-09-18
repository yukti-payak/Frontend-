export default function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 p-5">
          <img src={imageURL} className="img-fluid productImage" />
        </div>
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="p-3">{productName}</h1>
          <p classNmae="text-muted p-3">{productDescription}</p>
          <div>
            {" "}
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" , textDecoration:"none"}}>
              learnMore <i className="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>
          <div className=" p-3 d-flex justify-content-center justify-content-md-start">
            <a href={googlePlay} style={{maxWidth:"150px"}}>
              <img
                src="media/images/googlePlayBadge.svg"
                className="img-fluid logo-store"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" , maxWidth:"150px"}}>
              <img src="media/images/appstoreBadge.svg" className="img-fluid logo-store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
