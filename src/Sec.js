
function Sec(props1) {
    return (
      <div className="col mb-5">
        <div className="card h-100">
          {/* <div className = FontAwesomeIcon icon="fa-sharp fa-solid fa-square-full"style="top: 0.5rem; right: 0.5rem">Sale</div> */}
  
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
  
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props1.PlaneName}</h5>
             
              <span className="text-muted text-decoration-line-through">$ {props1. dashprice} </span> ${props1.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                              </div>
                          </div>
                      </div>
      
    );
  }
  export default Sec;
  