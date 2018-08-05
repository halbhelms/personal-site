export default (props) => {
  return (
    <li className={props.class}>
      <div className="timeline-image">
        <h4>{props.from} <br />
          - <br />
          {props.to} </h4>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.company}</h4>
          <h4 className="subheading">{props.position}</h4>
        </div>
        <div className="timeline-body">
          {props.children}
        </div>
      </div>
    </li>
  );
}