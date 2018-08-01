import Link from 'next/link';

export default (props) => {
  return (
    <div id="nav">
      <nav class="navbar navbar-custom">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>

            <a class="navbar-brand page-scroll" href="#page-top">John Doe</a> </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
              {/* <!-- Hidden li included to remove active class from about link when scrolled up past about section --> */}
              <li class="hidden"> <a href="#page-top"></a> </li>
              <li> <a class="page-scroll" href="#about">About</a> </li>
              <li> <a class="page-scroll" href="#skills">Skills</a> </li>
              <li> <a class="page-scroll" href="#portfolio">Portfolio</a> </li>
              <li> <a class="page-scroll" href="#resume">Resume</a> </li>
              <li> <a class="page-scroll" href="#contact">Contact</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}