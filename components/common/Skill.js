export default (props) => {
  return (
    <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent={props.percent}> <span className="percent">{props.percent}</span> </span>
      <h4>{props.type}</h4>
    </div>
  );
}