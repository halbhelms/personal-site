export default (props) => {
  return (
    <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent={props.percent}> <span class="percent">{props.percent}</span> </span>
      <h4>{props.type}</h4>
    </div>
  );
}