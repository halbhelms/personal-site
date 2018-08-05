export default (props) => {
  return (
    <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="200ms">
      <div className="achievement-box"> <span className="count">{props.count}</span>
        <h4>{props.type}</h4>
      </div>
    </div>
  );
}