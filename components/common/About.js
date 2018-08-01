export default (props) => {
  return (
    <div id="about">
      <div class="container">
        <div class="section-title text-center center">
          <h2>About Me</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-md-12 text-center"><img src="static/img/about.jpg" class="img-responsive" /></div>
          <div class="col-md-8 col-md-offset-2">
            <div class="about-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
              <p class="text-center"><a class="btn btn-primary" href="#"><i class="fa fa-download"></i> Download Resume</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}