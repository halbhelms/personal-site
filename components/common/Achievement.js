export default (props) => {
  return (
    <div class="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="200ms">
      <div class="achievement-box"> <span class="count">{props.count}</span>
        <h4>{props.type}</h4>
      </div>
    </div>
  );
}