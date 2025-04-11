import { images } from "../ShopGreenImages";
import Footer from "./Footer";
import HeaderAndText from "./HeaderAndText";
import ProjectInfo from "./ProjectInfo";
import quotemark from "../assets/quotemark.svg";

const info: IProjectInfo = {
  year: "2021",
  projectRole: "owner & designer",
  deliverables: "clickable prototypes",
  skills: "prototyping, wireframing, storyboarding, research",
  tools: "Figma",
};

const ShopGreen = () => {
  return (
    <div className="projectPage">
      <img
        className="container projectTopImage"
        src={images["top_image"]}
        alt="Mockup of ShopGreen"
      />
      <div className="projectPageContent">
        <h1 className="projectTitle">ShopGreen</h1>
        <ProjectInfo info={info} />

        <div className="sectionSpacer" />

        {/* overview */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText type="section header" title="overview" text={""} />
          </div>
          <div className="col-6">
            A <span className="highlight">curated database</span> for consumers
            who want to shop sustainably.
            <div className="paragraphSpacer" />
            ShopGreen helps users understand what different certifications and
            ecolabels entail, as well as helps them find and compare sustainable
            businesses. It also aims to reduce barriers to certification for
            smaller businesses.
            <div className="paragraphSpacer" />
            <img
              src={images["overview"]}
              alt="mockup of ShopGreen"
              className="col-12"
            />
          </div>
        </div>

        <div className="sectionSpacer" />

        {/* process */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText type="section header" title="process" text={""} />
          </div>
          <div className="col-6 fst-italic">
            define {"->"} research {"->"} 1st iteration {"->"} usability testing{" "}
            {"->"} 2nd iteration
          </div>
        </div>

        <div className="sectionSpacer" />

        {/* background */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText type="section header" title="background" text={""} />
          </div>
          <div className="col-6">
            <a
              href="https://time.com/6341884/climate-change-consumption/"
              target="_blank"
            >
              TIME Magazine
            </a>{" "}
            shared that
            <span className="highlight">
              consumption is responsible for 60% of global emissions
            </span>
            , giving partial agency to consumers to affect change. For the
            United States in particular,{" "}
            <a
              href="https://www.pewresearch.org/short-reads/2023/08/09/what-the-data-says-about-americans-views-of-climate-change/"
              target="_blank"
            >
              {" "}
              a survey
            </a>{" "}
            in 2023 showed that 43% of Americans don't believe they personally
            are doing enough to reduce climate change repercussions, suggesting
            a{" "}
            <span className="highlight">
              gap between user desires and behaviors
            </span>
            .
          </div>
        </div>

        <div className="sectionSpacer" />

        {/* defining the problem */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText
              type="section header"
              title="defining the problem"
              text={"Interviewing to explore and define"}
            />
          </div>
          <div className="col-6">
            <hr />
            To tackle that discrepancy, I wanted to determine{" "}
            <span className="highlight">
              {" "}
              what external factors might affect consumers' day-to-day choices
            </span>{" "}
            when purchasing goods. Thus, I posed the question,{" "}
            <div className="fst-italic">
              {" "}
              "How can sustainable living be made more accessible for the
              average consumer?"
            </div>
            <div className="paragraphSpacer" />
            I conducted five initial interviews to gain an understanding of
            people's current practices, how they acquire knowledge about
            sustainable practices, what obstacles they encounter, and desires
            that they have.
            <div className="paragraphSpacer" />
            Interviewees were young adults from multiple states in the U.S. and
            had varying budgets. I felt they would be fairly representative of a
            target audience, as they wanted to reduce their carbon footprint and
            had some ability to change their behavior, yet ranged in the
            intensity of that desire and monetary capacity.
            <div className="row mt-4 mb-5">
              <img
                src={images["interview_notes"]}
                alt="compiled notes from interview"
                className="col-12 mb-2"
              />
              <div className="fst-italic">interview notes</div>
            </div>
            <div className="row mt-4 mb-5">
              <div className="col-6 stat ml-4">
                <div className="KeyNumber">100%</div>
                listed the price of sustainable goods as an obstacle
              </div>
              <div className="col-6 stat">
                <div className="KeyNumber">100%</div>
                called out large corporations' practices or lack of transparency
              </div>
            </div>
            Based on their responses, I saw{" "}
            <span className="highlight">a gap</span> between people's desire to
            make sustainable purchases and their busy lifestyles , which created
            <span className="highlight">friction for learning</span> about their
            options as a consumer.
            <div className="row mt-5 mb-5 text-center filter-coolgreen">
              <div className="col-1">
                <img src={quotemark} alt='"' />
              </div>
              <div className="col-6 fst-italic">
                I’ve only toyed with living sustainably because I’m too lazy and
                uninformed...the info is out there, you just have to find it.
              </div>
            </div>
            <div className="row mt-4 mb-4 text-center justify-content-end filter-coolgreen">
              <div className="col-1">
                <img src={quotemark} alt='"' />
              </div>
              <div className="col-7 fst-italic">
                Large corporations and their supply chain networks are super
                secretive but the largest generator of big carbon footprints...
              </div>
            </div>
            There appeared to be a lack of knowledge of alternative options
            (e.g. smaller businesses with lesser environmental impact) and what
            certifications or terminology meant (one interviewee mentioned
            having to look up what plant-based laundry detergent was). Some
            participants also expressed concern over greenwashing, such as
            whether the label on a product was legitimate or had a meaningful
            standard to justify the price.
            <div className="paragraphSpacer" />
            Thus, I wanted to create a "
            <span className="highlight">curated database</span>" that would
            consolidate information in a way that was{" "}
            <span className="highlight">quick and digestible</span>, so that the
            average consumer could learn just enough to make more informed
            decisions without sorting through too much text or technicality. I
            also wanted to address potential obstacles for businesses that
            wanted to become more sustainable or certified.
          </div>
        </div>

        <div className="sectionSpacer" />

        {/* additional research */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText
              type="section header"
              title="additional research"
              text={
                "Conducting competitive analysis and researching initiatives for businesses"
              }
            />
          </div>
          <div className="col-6">
            <hr />I researched existing websites with similar goals to
            understand what I should consider for my own platform.
            <div className="paragraphSpacer" />
            <div className="row mt-4 mb-3">
              <img
                src={images["competitive_analysis"]}
                alt="competitive analysis of sites similar to ShopGreen's concept"
                className="col-12 mb-4"
              />
              <div className="fst-italic">
                competitive analysis of three databases
              </div>
            </div>
            <div className="subsectionSpacer" />
            <h4>takeaways</h4>
            Some aspects that I found successful were the use of categories to
            scaffold the search experience, as well as the types of filters that
            could be used to sort through the results. I also took note of what
            was included on a business's profile page and how it was structured.
            <div className="paragraphSpacer" />I saw an opportunity to improve
            the search experience with more guided inputs; for example, instead
            of a blank searchbox or saying "Enter a keyword," I wanted to list
            explicit examples and clearly split up the search inputs.
            Furthermore, I wanted to add more information to each business's
            search results and avoid some of the awkward UI I observed. Finally,
            I wanted to assume minimal background knowledge on both the consumer
            and business side to reduce the knowledge barrier.
            <div className="subsectionSpacer" />
            <h4>certifications and ecolabels</h4>
            Another thing I wanted to highlight were certifications and
            ecolabels, as they are the main ways for businesses to demonstrate
            their sustainable practices. This would include an overview of the
            certificate (e.g. is for businesses that aim to alleviate poverty
            and protect marine environments) and the standards for receiving the
            certificate (e.g. must meet requirements and attain 30 points on an
            application).
            <div className="subsectionSpacer" />
            <h4>moodboard</h4>
            <img
              src={images["moodboard"]}
              alt="moodboard images"
              className="col-12 mt-2 mb-2"
            />
          </div>

          <div className="sectionSpacer" />

          {/* first iteration */}
          <div className="row">
            <div className="col-4 sectionHeaderColumn">
              <HeaderAndText
                type="section header"
                title="first iteration"
                text={"Sitemap and wireframes / lo-fi mockups"}
              />
            </div>
            <div className="col-6">
              <hr />
              After interviewing folks and researching other sites, I began
              fleshing out my site's features and structure. While
              brainstorming, I decided I wanted to leverage the camera
              functionality on smartphones, which lead to an additional feature
              on the mobile breakpoint that allows for users to scan an ecolabel
              and bring up an overview.
              <div className="subsectionSpacer" />
              <h4>storyboards</h4>
              <div className="row mt-2 mb-5">
                <img
                  src={images["storyboard1"]}
                  alt="storyboard of user using ShopGreen on laptop"
                  className="col-6"
                />
                <img
                  src={images["storyboard2"]}
                  alt="storyboard of user using ShopGreen on their phone in a supermarket"
                  className="col-6"
                />
              </div>
              <div className="subsectionSpacer" />
              <h4>sitemaps</h4>
              <div className="row mt-2 mb-5">
                <div className="col-6" id="shopgreen_desktop_sitemap">
                  <img
                    src={images["initial_desktop_sitemap"]}
                    alt="sitemap for desktop version"
                    className="col-12"
                  />
                  <div
                    className="fst-italic"
                    id="shopgreen_desktop_sitemap_caption"
                  >
                    desktop
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src={images["initial_mobile_sitemap"]}
                    alt="sitemap for mobile version"
                    className="col-12"
                  />
                  <div className="fst-italic">mobile</div>
                </div>
              </div>
              <div className="subsectionSpacer" />
              <h4>wireframes</h4>
              <div className="row mt-3 mb-5">
                <img src={images["interviews1_framework"]} />
                <div className="row mb-3">
                  <img
                    src={images["main_wireframes"]}
                    alt="ShopGreen landing page wireframes"
                    className="col-12 mb-4"
                  />
                </div>
                <div className="row mb-3">
                  <img
                    src={images["additional_wireframes"]}
                    alt="additional ShopGreen wireframes"
                    className="col-12 mt-4 mb-2"
                  />
                  <div className="fst-italic mb-4">additional wireframes</div>
                </div>
                <div className="row mb-3">
                  <img
                    src={images["mobile_wireframes"]}
                    alt="ShopGreen mobile wireframes"
                    className="col-6 mt-4 mb-2"
                  />
                  <div className="fst-italic mb-4">mobile wireframes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="sectionSpacer" />

          {/* usability testing */}
          <div className="row">
            <div className="col-4 sectionHeaderColumn">
              <HeaderAndText
                type="section header"
                title="usability testing"
                text={"Identifying design successes and points for improvement"}
              />
            </div>
            <div className="col-6">
              <hr />
              <h4>methodology</h4>I tested the lo-fi mockups by asking three
              potential users to complete a set of tasks on both versions,
              including
              <ol className="mt-3 mb-3">
                <li>
                  finding a skincare business and identifying various
                  characteristics of it,{" "}
                </li>
                <li>learning about a certification given a name, and </li>
                <li>identifying an ecolabel.</li>
              </ol>
              Participants quantified how easy the task felt on a scale from
              1-5, with 1 being very difficult and 5 being very easy, and were
              then invited to explore the platform.
              <div className="subsectionSpacer" />
              <h4>takeaways</h4>
              The average ratings for each task were
              <div className="row mt-2 mb-5">
                <div className="col-4">
                  <div className="KeyNumber">4.3</div>
                  <div className="fst-italic">task 1</div>
                </div>
                <div className="col-3">
                  <div className="KeyNumber">5</div>
                  <div className="fst-italic">task 2</div>
                </div>
                <div className="col-4">
                  <div className="KeyNumber">4.7</div>
                  <div className="fst-italic">task 3</div>
                </div>
              </div>
              One user felt it was{" "}
              <span className="highlight">
                "definitely addressing a gap between consumers and producers,"
              </span>{" "}
              while another really enjoyed the camera feature on mobile.
              <div className="paragraphSpacer" />
              My biggest next step based on their feedback was to revise the
              wording for parts of the site to{" "}
              <span className="highlight">
                address ambuity and confusion when navigating
              </span>
              . One paricipant expressed a desire to be able to shop directly on
              the site; because I wanted to uplift the individual businesses
              over being a third-party retailer, I decided on a middle ground of
              suggesting products on ShopGreen and linking directly to that
              product on the original seller's site. Other ideas that stemmed
              from feedback included the ability to compare businesses within
              the database, creating a more personalized experience with
              consumer accounts, and having a standardized way to quantify how
              sustainable a business is within the site, based on industry and
              size.
              <div className="paragraphSpacer" />
              As for the different layouts I tested, I found that users{" "}
              <span className="highlight">
                liked the "shallower" versions
              </span>{" "}
              that required less clicking and more visibility to content as a
              default. This was something I also wanted to apply to the
              filtering functionality, bringing them out as a sidebar rather
              than dropdowns.
            </div>
          </div>
          <div className="sectionSpacer" />

          {/* second iteration */}
          <div className="row">
            <div className="col-4 sectionHeaderColumn">
              <HeaderAndText
                type="section header"
                title="second iteration"
                text={"Editing desktop and mobile breakpoints"}
              />
            </div>
            <div className="col-6">
              <hr />
              <h4>sitemaps</h4>
              <div className="row mt-2 mb-5">
                <div className="col-6" id="shopgreen_desktop_sitemap">
                  <img
                    src={images["desktop_sitemap"]}
                    alt="sitemap for desktop version"
                    className="col-12"
                  />
                  <div
                    className="fst-italic"
                    id="shopgreen_desktop_sitemap_caption"
                  >
                    desktop
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src={images["mobile_sitemap"]}
                    alt="sitemap for mobile version"
                    className="col-12"
                  />
                  <div className="fst-italic">mobile</div>
                </div>
              </div>
              <h4>UI kit</h4>
              <img
                src={images["ui_kit"]}
                alt="moodboard images"
                className=" row col-12 mt-2 mb-2"
              />
              <div className="subsectionSpacer" />
              <h4>clickable prototypes</h4>
              <div className="row mt-3">
                <div className="col-7">
                  <img
                    src={images["laptop_mockup"]}
                    className=" col-12"
                    alt="final iteration of desktop breakpoint"
                  />
                  <div className="justify-content-center d-flex">
                    <a
                      className="btn mt-2"
                      role="button"
                      href="https://www.figma.com/proto/3PX2j7m0wPGmGlAsAqa0AT/Interaction-Design-Final-Project-Wireframes-v4?page-id=1920%3A1748&type=design&node-id=1920-1805&viewport=577%2C220%2C0.07&t=wC1FsUMC7bHhEQUO-1&scaling=min-zoom&starting-point-node-id=1920%3A1805&mode=design"
                      target="_blank"
                    >
                      desktop
                    </a>
                  </div>
                </div>

                <div className="col-3 justify-content-center d-grid">
                  <img
                    src={images["phone_mockup"]}
                    className="col-12"
                    alt="final iteration of mobile"
                  />
                  <a
                    className="btn mt-2"
                    role="button"
                    href="https://www.figma.com/proto/3PX2j7m0wPGmGlAsAqa0AT/Interaction-Design-Final-Project-Wireframes-v4?page-id=2198%3A3380&type=design&node-id=2198-3381&viewport=1010%2C330%2C0.09&t=1zx6JKj5p5B7N5ZF-1&scaling=min-zoom&starting-point-node-id=2198%3A3381&show-proto-sidebar=1&mode=design"
                    target="_blank"
                  >
                    mobile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="subsectionSpacer" />
          {/* hifi mockups */}
          <span
            className="hifi_mockups_background"
            id="shopgreen_hifi_mockups_background"
          >
            <div className="subsectionSpacer" />
            <HeaderAndText title="landing page" text="" type="project info" />
            <div className="row projectImage justify-content-center">
              <img
                src={images["hifi_landingpage"]}
                alt="ShopGreen landing page on desktop and mobile"
                className="col-10"
              />
            </div>
            <div className="paragraphSpacer" />
            <HeaderAndText title="search results" text="" type="project info" />
            <div className="row projectImage justify-content-center">
              <img
                src={images["hifi_searchresults"]}
                alt="ShopGreen search results on desktop and mobile"
                className="col-12"
              />
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText
              title="business profile page"
              text=""
              type="project info"
            />

            <div className="row projectImage justify-content-center">
              <img
                src={images["hifi_businessprofilepage"]}
                alt="ShopGreen business profile pages on desktop and mobile"
                className="col-12"
              />
            </div>

            <HeaderAndText
              title="compare businesses"
              text=""
              type="project info"
            />

            <div className="row projectImage justify-content-center">
              <img
                src={images["hifi_comparebusinesses"]}
                alt="ShopGreen comparison tool on desktop and mobile"
                className="col-12"
              />
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText title="resource pages" text="" type="project info" />
            <div className="row projectImage">
              <img
                src={images["resource_pages"]}
                alt="resources provided by ShopGreen for consumers and businesses"
                className="col-12"
              />
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText title="blog" text="" type="project info" />
            <div className="row projectImage justify-content-end">
              <img
                src={images["blog"]}
                alt="blog pages on ShopGreen for desktop and mobile"
                className="col-12"
              />
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText title="account pages" text="" type="project info" />
            <div className="row projectImage">
              <div className="mb-2 fst-italic">business account</div>
              <img
                src={images["business_account_pages"]}
                alt="account pages for a business"
                className="col-12"
              />
              <div className="subsectionSpacer" />
              <div className="mb-2 fst-italic">consumer account</div>
              <img
                src={images["consumer_account_pages"]}
                alt="account pages for a consumer"
                className="col-12"
              />
            </div>

            <div className="subsectionSpacer" />
          </span>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ShopGreen;
