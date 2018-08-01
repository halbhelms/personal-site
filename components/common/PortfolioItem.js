export default (props) => {
  return (
    <div class={`col-sm-6 col-md-3 col-lg-3 ${props.filter}`} >
      <div class="portfolio-item">
        <div class="hover-bg"> <a href={`static/img/portfolio/${props.large_image}`} title={props.project_description} rel="prettyPhoto">
          <div class="hover-text">
            <h4>{props.project_title}</h4>
            <small>{props.category}</small> </div>
          <img src={`static/img/portfolio/${props.small_image}`} class="img-responsive" alt={props.project_title} /> </a> </div>
      </div>
    </div>
  );
}