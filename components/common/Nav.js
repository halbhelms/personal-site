import Link from 'next/link';

export default (props) => {
  return (
    <div id="nav">
      <nav className="navbar navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>

            <a className="navbar-brand page-scroll" href="#page-top">John Doe</a> </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              {/* <!-- Hidden li included to remove active class from about link when scrolled up past about section --> */}
              <li className="hidden"> <a href="#page-top"></a> </li>
              <li> <a className="page-scroll" href="#about">About</a> </li>
              <li> <a className="page-scroll" href="#skills">Skills</a> </li>
              <li> <a className="page-scroll" href="#portfolio">Portfolio</a> </li>
              <li> <a className="page-scroll" href="#resume">Resume</a> </li>
              <li> <a className="page-scroll" href="#contact">Contact</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}