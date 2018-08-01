export default (props) => {
  return (
    <li class={props.class}>
      <div class="timeline-image">
        <h4>{props.from} <br />
          - <br />
          {props.to} </h4>
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>{props.company}</h4>
          <h4 class="subheading">{props.position}</h4>
        </div>
        <div class="timeline-body">
          {props.children}
        </div>
      </div>
    </li>
  );
}