import ResumeItem from './ResumeItem';

export default (props) => {
  return (
    <div id="resume" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h2>Experience</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <ResumeItem position="UX Developer" company="Creative Agency" from="Feb 2013" to="Present">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem position="Front-End Developer" company="Development Shop" from="Nov 2011" to="Jan 2013" class="timeline-inverted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem position="JavaScript Programmer" company="Harris &amp; White" from="Dec 2009" to="May 2011">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="section-title center">
          <h2>Education</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">

              {/* <!-- Education Section--> */}
              <ResumeItem company="Design University" position="Master Degree of Design" from="2010" to="2011" class="timeline-inverted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem company="Parson School of Design" position="Undergraduate" from="2008" to="2010">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
              </ResumeItem>

              <ResumeItem company="Ohio State University" position="B.A" from="2006" to="2007" class="timeline-inverted">
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