import Achievement from './Achievement';

export default (props) => {
  return (
    <div id="achievements" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h2>Some Stats</h2>
          <hr />
        </div>
        <div class="row">
          <Achievement type="Happy Clients" count="310" />
          <Achievement type="Hours of Work" count="4700" />
          <Achievement type="Awards Won" count="30" />
          <Achievement type="Years of Experience" count="8" />
        </div>
      </div>
    </div>
  );
}