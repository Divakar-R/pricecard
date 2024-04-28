function Card({details}){
    return<>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
            <h6 className="card-price text-center">{details.price}<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
              <li className={details.isUser?"":"text-muted"}><span className="fa-li"><i className={details.isUser?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="Pro"?<span><b className="green">Unlimited </b>{details.user}</span>:details.user}</li>
              <li className={details.isStorage?"":"text-muted"}><span className="fa-li"><i className={details.isStorage?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
              <li className={details.isPublicprojects?"":"text-muted"}><span className="fa-li"><i className={details.isPublicprojects?"fas fa-check":"fas fa-times"}></i></span>{details.publicprojects}</li>
              <li className={details.isAccess?"":"text-muted"}><span className="fa-li"><i className={details.isAccess?"fas fa-check":"fas fa-times"}></i></span>{details.access}</li>
              <li className={details.isPrivateprojects?"":"text-muted"}><span className="fa-li"><i className={details.isPrivateprojects?"fas fa-check":"fas fa-times"}></i></span>{details.privateprojects}</li>
              <li className={details.isSupport?"":"text-muted"}><span className="fa-li"><i className={details.isSupport?"fas fa-check":"fas fa-times"}></i></span>{details.support}</li>
              <li className={details.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={details.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="Pro"?<span><b className="green">Unlimited </b>{details.subdomain}</span>:details.subdomain}</li>
              <li className={details.isReports?"":"text-muted"}><span className="fa-li"><i className={details.isReports?"fas fa-check":"fas fa-times"}></i></span>{details.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Card