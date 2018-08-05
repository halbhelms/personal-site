export default (props) => {
  return (
    <div className={`col-sm-6 col-md-3 col-lg-3 ${props.filter}`} >
      <div className="portfolio-item">
        <div className="hover-bg"> <a href={`static/img/portfolio/${props.large_image}`} title={props.project_description} rel="prettyPhoto">
          <div className="hover-text">
            <h4>{props.project_title}</h4>
            <small>{props.category}</small> </div>
          <img src={`static/img/portfolio/${props.small_image}`} className="img-responsive" alt={props.project_title} /> </a> </div>
      </div>
    </div>
  );
}