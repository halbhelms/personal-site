import PortfolioItem from './PortfolioItem';

export default (props) => {
  return (
    <div id="portfolio">
      <div class="container">
        <div class="section-title text-center center">
          <h2>Portfolio</h2>
          <hr />
        </div>
        <div class="categories">
          <ul class="cat">
            <li>
              <ol class="type">
                <li><a href="#" data-filter="*" class="active">All</a></li>
                <li><a href="#" data-filter=".web">Web Design</a></li>
                <li><a href="#" data-filter=".app">App Development</a></li>
                <li><a href="#" data-filter=".branding">Branding</a></li>
              </ol>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="row">
          <div class="portfolio-items">
            <PortfolioItem small_image="01-small.jpg" large_image="01-large.jpg" project_title="Mobile App" project_description="Pictuary" category="App Development" filter="app" />
            <PortfolioItem small_image="02-small.jpg" large_image="02-large.jpg" project_title="Online Study Hall" project_description="Kids meet virtually to study and do homework" category="Web Design" filter="web" />
            <PortfolioItem small_image="03-small.jpg" large_image="03-large.jpg" project_title="Study Calendar" project_description="Mobile Study Calendar" category="App Development" filter="app" />
            <PortfolioItem small_image="04-small.jpg" large_image="04-large.jpg" project_title="A Study In Branding" project_description="Branding for International School" category="Branding" filter="branding" />
            <PortfolioItem small_image="05-small.jpg" large_image="05-large.jpg" project_title="Study Aids" project_description="Site Offering Study Aids" category="Web Design" filter="web"/>
            <PortfolioItem small_image="06-small.jpg" large_image="06-large.jpg" project_title="Branding Guidelines" project_description="Branding Guidelines for Charity" category="Branding" filter="branding" />
            <PortfolioItem small_image="07-small.jpg" large_image="07-large.jpg" project_title="Portfolio" project_description="Portfolio Site" category="Branding" filter="branding" />
            <PortfolioItem small_image="08-small.jpg" large_image="08-large.jpg" project_title="Sandy's Shop" project_description="Ecommerce" category="Web Design" filter="web" />
          </div>
        </div>
      </div>
    </div>
  );
}