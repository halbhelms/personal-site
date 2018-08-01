export default (props) => {
  return (
    <div id="contact" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h2>Contact</h2>
          <hr />
        </div>
        <div class="col-md-8 col-md-offset-2">
          <div class="col-md-4"> <i class="fa fa-map-marker fa-2x"></i>
            <p>4321 California St,<br />
              San Francisco, CA 12345</p>
          </div>
          <div class="col-md-4"> <i class="fa fa-envelope-o fa-2x"></i>
            <p>info@company.com</p>
          </div>
          <div class="col-md-4"> <i class="fa fa-phone fa-2x"></i>
            <p> +1 123 456 1234</p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="col-md-8 col-md-offset-2">
          <h3>Leave me a message</h3>
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" id="name" class="form-control" placeholder="Name" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="email" id="email" class="form-control" placeholder="Email" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" class="btn btn-default">Send Message</button>
          </form>
          <div class="social">
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa fa-github"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}