import ResumeItem from './ResumeItem';

export default (props) => {
  return (
    <div id="resume" className="text-center">
      <div className="container">
        <div className="section-title center">
          <h2>Experience</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <ResumeItem position="UX Developer" company="Creative Agency" from="Feb 2013" to="Present">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem position="Front-End Developer" company="Development Shop" from="Nov 2011" to="Jan 2013" className="timeline-inverted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem position="JavaScript Programmer" company="Harris &amp; White" from="Dec 2009" to="May 2011">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-title center">
          <h2>Education</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">

              {/* <!-- Education Section--> */}
              <ResumeItem company="Design University" position="Master Degree of Design" from="2010" to="2011" className="timeline-inverted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem company="Parson School of Design" position="Undergraduate" from="2008" to="2010">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem company="Ohio State University" position="B.A" from="2006" to="2007" className="timeline-inverted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem company="Daniels High School" position="Student" from="2002" to="2006">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}