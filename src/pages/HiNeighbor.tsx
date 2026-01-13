import { images } from "../HiNeighborImages";
import Footer from "../components/Footer";
import HeaderAndText from "../components/HeaderAndText";
import HighlightedNumber from "../components/HighlightedNumber";
import ProjectInfo from "../components/ProjectInfo";
import quotemark from "../assets/quotemark.svg";
import ProjectSubtitles from "../components/ProjectSubtitles";
import {
  sectionHeaderColumnSpacing,
  sectionContentColumnSpacing,
} from "../constants";

const info: IProjectInfo = {
  year: "2023",
  projectRole: "owner & designer",
  deliverables: "clickable prototype, onboarding video, UI kit",
  skills: "research, prototyping, video",
  tools: "Figma, After Effects, Photoshop, Canva",
};

const HiNeighbor = () => {
  return (
    <div className="projectPage">
      <img
        className="container projectTopImage"
        src={images["top_image"]}
        alt="Mockup of hi neighbor"
      />
      <div className="projectPageContent">
        <h1>hi neighbor!</h1>
        <ProjectSubtitles
          subtitle1={
            "A digital bulletin board experience to encourage relationships in hyperlocal communities via user-generated content."
          }
        />
        <ProjectInfo info={info} />

        <div className="sectionSpacer" />

        <div className="row">
          {/* process */}
          <div className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}>
            <HeaderAndText type="section header" title="process" text={""} />
            <div className="fst-italic">
              research {"->"} ideation {"->"} 1st iteration {"->"} interviews{" "}
              {"->"} 2nd iteration {"->"} interviews {"->"} final
            </div>
          </div>
          {/* background */}
          <div className={sectionContentColumnSpacing}>
            <HeaderAndText type="section header" title="background" text={""} />
            A <span className="highlight">“loneliness epidemic”</span> has been
            on the rise, with American individualism and current social norms
            seemingly exacerbating the issue. Specifically, social media and
            technology are being used in place of in-person interactions, often
            leading to lower quality relationships while giving an illusion of
            close connection. Even in apartment buildings with shared hallways
            and lobbies, it can be difficult to meet neighbors.
            <div className="paragraphSpacer" />
            Co-living spaces have been designed to address these issues, but{" "}
            <span className="highlight">
              not every community can be physically altered
            </span>{" "}
            to mirror the scale of these bigger projects. Furthermore, while
            social media has been a powerful tool to connect neighborhoods and
            communities, it often{" "}
            <span className="highlight">
              lacks community-building intention
            </span>
            , which can lead to unproductive or transactional interactions.
          </div>
        </div>
        <div className="paragraphSpacer" />
        <img
          src={images["overview_mockup_fewer"]}
          alt="various mockup of hi neighbor"
          className="col-12"
        />

        {/* overview */}
        {/* <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText type="section header" title="overview" text={""} />
          </div>
          <div className="col-6">
            A{" "}
            <span className="highlight">digital bulletin board experience</span>{" "}
            to encourage and support relationships in hyperlocal communities via
            user-generated content.
            <div className="paragraphSpacer" />
            This proof of concept, inspired by the triple-decker buildings of
            the American Northeast, was designed for small apartment buildings
            with around 12-20 tenants and limited communal space between the
            units.
            <div className="paragraphSpacer" />
            <img
              src={images["overview_mockup"]}
              alt="various mockup of hi neighbor"
              className="col-12"
            />
          </div>
        </div> */}

        <div className="sectionSpacer" />
        <hr />
        <div className="sectionSpacer" />

        {/* initial research */}
        <div className="row">
          <div className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}>
            <HeaderAndText
              type="section header"
              title="initial research"
              text={
                "Related solutions, competitive analysis, and visual inspiration"
              }
            />
          </div>
          <div className={sectionContentColumnSpacing}>
            <h4>related solutions</h4>
            I looked to see how both physical and online spaces were being
            leveraged to connect communities.
            <div className="paragraphSpacer" />
            For example, one designer implemented a project in a co-living house
            to improve the guest experience. One of the pain points he saw was a
            lack of between-guest interaction, partially due to an{" "}
            <span className="highlight">
              absence of house culture to guide and encourage certain behaviors
            </span>
            ; this was something I wanted to address in my concept.
            <div className="paragraphSpacer" />
            Researching neighborhood and mutual aid Facebook groups gave me a
            sense of neighbor and virtual community dynamics.
            <div className="subsectionSpacer" />
            <h4>competitive analysis</h4>
            I researched the following 3 types of platforms, which ultimately
            did not appear to be direct competitors.
            <div className="paragraphSpacer" />
            <div className="gx-2" id="hi_neighbor_competitive_analysis">
              <div className="row hi_neighbor_ca_column">
                <div
                  className="bold-italic"
                  style={{
                    width: "fit-content",
                    background:
                      "linear-gradient(to top, var(--transparent-yellow) 35%, transparent 50%)",
                  }}
                >
                  building message boards
                </div>
                <ul>
                  <li>often part of a larger housing management suite</li>
                  <li>
                    not designed to emphasize community among tenants (i.e. were
                    partially HOA boards or management messages)
                  </li>
                  <li>mobile-only</li>
                </ul>
              </div>

              <div className="row hi_neighbor_ca_column">
                <div
                  className="bold-italic"
                  style={{
                    width: "fit-content",
                    background:
                      "linear-gradient(to top, var(--transparent-yellow) 35%, transparent 50%)",
                  }}
                >
                  digital bulletin board
                </div>
                <ul>
                  <li>designed for corporate building usage</li>
                  <li>essentially rotating PowerPoint slides</li>
                </ul>
              </div>

              <div className="row hi_neighbor_ca_column">
                <div
                  className="bold-italic"
                  style={{
                    width: "fit-content",
                    background:
                      "linear-gradient(to top, var(--transparent-yellow) 35%, transparent 50%)",
                  }}
                >
                  Sidechat app
                </div>
                <ul>
                  <li>local to a university</li>
                  <li>
                    followed paradigm of most social media (could maintain
                    anonymity, could like and comment, etc.)
                  </li>
                </ul>
              </div>

              <div className="row mt-3">
                <img src={images["competitiveanalysis_images"]} />
              </div>
            </div>
            <div className="subsectionSpacer" />
            <h4>visual inspiration</h4>
            <div className="row mt-3">
              <img src={images["visualinspiration"]} />
            </div>
          </div>
        </div>

        <div className="sectionSpacer" />
        <hr />
        <div className="sectionSpacer" />

        {/* initial ideation */}
        <div className="row">
          <div className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}>
            <HeaderAndText
              type="section header"
              title="initial ideation"
              text={
                "Defining a target audience, sketching, and building a concept"
              }
            />
          </div>
          <div className={sectionContentColumnSpacing}>
            I wanted to create something that helped{" "}
            <span className="highlight">build a sense of community</span> by
            providing an infrastructure for neighbors to interact. However, any
            technological aspect of the concept{" "}
            <span className="highlight">
              should not encourage extended interaction on the technology itself
            </span>
            , unlike traditional social media which aims to engage users as long
            as possible.
            <div className="paragraphSpacer" />
            Starting with the idea of a bulletin board, I addressed issues that
            arise with analog bulletin boards, such as outdated bulletins, poor
            information/visual design, and no convenient access to printers.
            <div className="paragraphSpacer" />I also hypothesized that{" "}
            <span className="highlight">physical infrastructure</span>– such as
            a physical onboarding card or setting up bins in the shared space
            for neighbors to leave things for each other– would add to a user's
            experience.
            <div className="subsectionSpacer" />
            <h4>target audience</h4>
            <div className="row">
              <div className="col-6">
                <div className="bold-italic">demographics</div>
                from research about renting in the U.S.
              </div>
              <div className="col-6">
                <div className="bold-italic">psychographics</div>
                potential motivations and behaviors
              </div>
            </div>
            <div className="row mt-3">
              <img
                src={images["demographics"]}
                className="hi_neighbor_targetaudience_images col-6"
              />
              <img
                src={images["psychographics"]}
                className="hi_neighbor_targetaudience_images col-6"
              />
            </div>
            <div className="subsectionSpacer" />
            <h4>sketching</h4>
            I began with a simple sitemap and sketched layouts for the 3
            different screen dimensions– bulletin board, in-unit (the size of a
            smart fridge screen, or a picture frame), and mobile– before
            creating digital mockups.
            <div className="paragraphSpacer" />I wanted to use the interviews to
            flesh out the concept and layout, so I made the mockups as high
            fidelity as necessary for that purpose.
            <div className="row mt-3">
              <img src={images["sitemap_initialsketches"]} />
            </div>
            <div className="subsectionSpacer" />
            <h4>concept</h4>
            <div className="paragraphSpacer" />
            <div className="bold-italic">designing a system</div>
            One key component was having a pre-registered profile for every
            tenant, to both reduce activation energy and give tenants a sense of
            who lived around them. Originally, I proposed having the first name
            and last initial and a blank profile picture as the default. Then to
            post, users would have to use the in-unit screen or the app to
            access their profile and complete a minimal number of required
            fields.
            <div className="paragraphSpacer" />
            Users would be able to upload content in the form of text posts,
            polls, and multimedia. It would have a check before uploading (e.g.
            flagged key words and machine learning to guess sensitive content)
            and be self-moderated (users could report a post, and at a certain
            threshold the post would be taken down automatically).
            <div className="row mt-4 mb-5">
              <img src={images["designing_a_system"]} />
            </div>
            I wanted users to be able to customize their posts' color and font.
            When considering typefaces, I looked for one “fun” font, one serif,
            and one san serif that complemented each other. For colors, I wanted
            a warm, friendly feeling with a range of hues.
            <div className="subsectionSpacer" />
            <div className="bold-italic">lofi mockups</div>
            For the purpose of interviewing, I created two versions for a
            handful of pages to gauge visual appeal between different layouts.
            <div className="row mt-3 mb-5">
              <img src={images["lofi_mockups"]} />
            </div>
            I also designed a welcome card that would be taped to a new tenant's
            door. The goal was to give a quick introduction on how to use the
            platform, as well as establish the community culture and standards.
            <div className="row mt-3 col-8">
              <img src={images["concept_welcomecard"]} />
            </div>
          </div>
          <div className="sectionSpacer" />
          <hr />
          <div className="sectionSpacer" />

          {/* interviews - round 1 */}
          <div className="row">
            <div
              className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}
            >
              <HeaderAndText
                type="section header"
                title="interviews - round 1"
                text={"Questions and key takeaways"}
              />
            </div>
            <div className={sectionContentColumnSpacing}>
              Once I finished the initial mockups, I conducted six interviews
              averaging 35 minutes each, following the framework below.
              Participants lived in small apartment buildings, either in
              attending university or working a full-time corporate job.
              <div className="row mt-3 mb-5">
                <img src={images["interviews1_framework"]} />
              </div>
              After the interviews, I created an affinity diagram to derive
              patterns and note down suggestions that participants shared for my
              next iteration.
              <div className="row mt-3">
                <img src={images["interviews1_takeaways"]} />
              </div>
              <div className="subsectionSpacer" />
              Of the 6 interviewees,
              <div className="row">
                <div className="col-5 d-grid text-start p-2">
                  {/* <div className="KeyNumber">5</div> */}
                  <HighlightedNumber num="5" />
                  said they would read the bulletin’s content
                </div>
                <div className="col-1" />
                <div className="col-5 d-grid text-start p-2">
                  {/* <div className="KeyNumber">4</div> */}
                  <HighlightedNumber num="4" />
                  mentioned liking the board's aesthetic/colors
                </div>
              </div>
              <div className="row">
                <div className="col-1" />
                <div className="col-5 d-grid text-start p-2">
                  {/* <div className="KeyNumber">5</div> */}
                  <HighlightedNumber num="5" />
                  wanted to feel close enough to their neighbors to meet up
                  monthly
                </div>
                <div className="col-1" />
                <div className="col-5 d-grid text-start p-2">
                  {/* <div className="KeyNumber">5</div> */}
                  <HighlightedNumber num="5" />
                  stated they were much more likely to use the platform if they
                  saw others using it
                </div>
              </div>
              <div className="subsectionSpacer" />
              Five of the six participant expressed that they wanted a stronger
              sense of community between their apartment building's units and
              felt the platform would help them achieve that.
              <div className="paragraphSpacer" />
              They also found the physical aspects charming or beneficial,
              thinking the card was a nice touch or that having bins in the
              shared space below the bulletin would make it seem more legitimate
              and fun.
              <div className="paragraphSpacer" />
              The main concern that arose was engagement. Most interviewees said
              they would{" "}
              <span className="highlight">
                only be active on the platform if they saw there was an active
                community already established
              </span>
              . Many also said they would be much more likely to engage in
              "quieter" ways (e.g. reading anything new or voting in a poll)
              rather then create a full post.
              <div className="paragraphSpacer" />
              Another concern was <span className="highlight">
                privacy
              </span>{" "}
              with the pre-registered profiles. People were hesitant to have
              names be included as a default, or to have the profiles be
              accessible from the shared space, where anyone who entered the
              building could access it. Finally, some interviewees were hesitant
              to have another piece of technology in their life in the form of
              an in-unit screen or an additional app to download.
            </div>
          </div>

          <div className="sectionSpacer" />
          <hr />
          <div className="sectionSpacer" />

          {/* second iteration */}
          <div className="row">
            <div
              className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}
            >
              <HeaderAndText
                type="section header"
                title="second iteration"
                text={"Editing and focusing on the onboarding experience"}
              />
            </div>
            <div className={sectionContentColumnSpacing}>
              From that feedback, I saw the need to emphasize the platform's
              usefulness and lightheartedness to encourage engagement.
              <div className="paragraphSpacer" />I began by making edits to the
              bulletin-dimension screen and starting on the in-unit dimensions,
              which would include a workflow of creating and customizing posts.
              <div className="row mt-3 mb-5">
                <img src={images["seconditerations"]} />
              </div>
              To specifically address engagement, I wanted to leverage the
              onboarding experience, which would have to
              <div className="paragraphSpacer" />
              <ol>
                <li>provide users a reason to use the platform,</li>
                <li>help them understand how to use it, and </li>
                <li>
                  reduce the friction of creating that first post by scaffolding
                  the process.
                </li>
              </ol>
              <div className="paragraphSpacer" />
              So, I designed a user workflow of turning on the in-unit screen,
              being shown an onboharding video, and then getting a walkthrough
              tutorial to create a self-introductory post.
              <div className="row mt-3">
                <img src={images["onboarding"]} />
              </div>
            </div>
          </div>
          <div className="sectionSpacer" />
          <hr />
          <div className="sectionSpacer" />

          {/* interviews - round 2 */}
          <div className="row">
            <div
              className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}
            >
              <HeaderAndText
                type="section header"
                title="interviews - round 2"
                text={"Evaluating BoundarEase as a tool"}
              />
            </div>
            <div className={sectionContentColumnSpacing}>
              I first gave participants a persona and task scenario. Then, to
              simulate the onboarding experience, I showed them the revised
              welcome card before playing the video. Lastly, I gave them the
              clickable prototype to explore and complete the given task.
              <div className="paragraphSpacer" />
              There was an overall positive reaction. Interviewees understood
              the concept from the artefacts presented to them, appreciating the
              simple and succinct intructions. They also found the interface
              straightforward.
              <div className="row mt-4 text-center filter-darkblue">
                <div className="col-1">
                  <img src={quotemark} alt='"' />
                </div>
                <div className="col-10 fst-italic">
                  [The video] encouraged me to want to use the display because I
                  realized it’s not just junk, it could actually help me out”
                </div>
              </div>
              <div className="row mt-4 mb-4 text-center filter-darkblue">
                <div className="col-1">
                  <img src={quotemark} alt='"' />
                </div>
                <div className="col-10 fst-italic">
                  [It] made me somewhat believe this is a tech I would use...and
                  this is coming from a place where I don’t want tech to be a
                  part of my solution interactions.
                  <div className="paragraphSpacer" />
                  It had to prove to me it was something that could be useful
                  and it did so by being non-intrusive and to the point.”
                </div>
              </div>
              One interviewee mentioned how something like this would have been
              helpful when he moved into a small apartment building in a new
              city by himself. Another reflected how this would have been
              extremely useful in her dormitory when her school still had COVID
              restrictions.
              <div className="paragraphSpacer" />
              Though originally I didn't want to include messaging capabilities
              (to avoid additional technological communication), many
              interviewees wanted a way to communicate through the app, stating
              convenience or accessibility concerns. Some thought the video was
              overly-simplistic visually.
              <div className="row mt-3">
                <img
                  src={images["interviews2_takeaways"]}
                  alt="affinity clusters from second round of interviews"
                />
              </div>
            </div>
          </div>

          <div className="sectionSpacer" />
          <hr />
          <div className="sectionSpacer" />

          {/* final iteration */}
          <div className="row">
            <div
              className={sectionHeaderColumnSpacing + " sectionHeaderColumn"}
            >
              <HeaderAndText
                type="section header"
                title="final iteration"
                text={
                  "Prototype + UI kit, welcome card, and onboarding video with walkthrough"
                }
              />
            </div>
            <div className={sectionContentColumnSpacing}>
              Making adjustments per that feedback, I created the last iteration
              of hi neighbor!, consisting of two clickable prototypes (bulletin
              and in-unit dimensions), a welcome card, and an onboarding video.
              <div className="row mt-3">
                <div className="col-7">
                  <img
                    src={images["final_bulletin"]}
                    className="hi_neighbor_prototypeimg col-12"
                    alt="final iteration of bulletin dimension"
                  />
                  <a
                    className="btn"
                    role="button"
                    href="https://www.figma.com/proto/4ZcMvRb3jubectZyCW6k31/digital-bulletin-board-v4?page-id=0%3A1&type=design&node-id=1402-3792&viewport=334%2C-632%2C0.08&t=MrIK9TrHGijHeaYt-1&scaling=contain&mode=design"
                    target="_blank"
                  >
                    bulletin prototype
                  </a>
                </div>

                <div className="col-4">
                  <img
                    src={images["final_inunit"]}
                    className="hi_neighbor_prototypeimg col-12"
                    alt="final iteration of in-unit dimension"
                    id="hi_neighbor_prototypeimg2"
                  />
                  <a
                    className="btn"
                    role="button"
                    href="https://www.figma.com/proto/4ZcMvRb3jubectZyCW6k31/digital-bulletin-board-v4?page-id=241%3A363&type=design&node-id=257-381&viewport=-2371%2C-1002%2C0.07&t=y17Mxier8gftivtz-1&scaling=scale-down&starting-point-node-id=257%3A381&show-proto-sidebar=1&mode=design"
                    target="_blank"
                  >
                    in-unit prototype
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="subsectionSpacer" />
          {/* hifi mockups */}
          <span
            className="hifi_mockups_background"
            id="hineighbor_hifi_mockups_background"
          >
            <div className="subsectionSpacer" />
            <HeaderAndText title="bulletin" text="" type="project info" />
            <div className="row projectImage">
              <img
                src={images["annotated_bulletin"]}
                alt="annotated high-fidelity mockup of hi neighbor bulletin"
              />
            </div>
            <div className="paragraphSpacer" />
            <div className="row projectImage justify-content-center">
              <img
                src={images["additional_bulletin1"]}
                alt="additional high-fidelity mockups of hi neighbor bulletin"
                className="col-5"
              />
              <div className="col-1" />
              <img
                src={images["additional_bulletin2"]}
                alt="additional high-fidelity mockups of hi neighbor bulletin"
                className="col-5"
              />
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText title="in-unit" text="" type="project info" />

            <div className="row projectImage justify-content-center">
              <img
                src={images["annotated_inunit_home"]}
                alt="annotated high-fidelity mockup of hi neighbor in-unit screen"
                className="col-10"
              />
            </div>

            <div className="row projectImage justify-content-end">
              <div className="col-7">
                <div className="mb-2 fst-italic">messaging capabilities</div>
                <img
                  src={images["inunit_messaging"]}
                  alt="high-fidelity mockup of hi neighbor in-unit screen's messaging feature"
                  className="col-12"
                />
              </div>
            </div>

            <div className="subsectionSpacer" />

            <div className="row projectImage">
              <div className="col-12">
                <div className="fst-italic">
                  profile creation and onboarding
                </div>
                <img
                  src={images["annotated_onboarding"]}
                  alt="high-fidelity mockup of hi neighbor in-unit screen's onboarding experience"
                  className="col-12"
                />
              </div>
            </div>

            <div className="paragraphSpacer" />

            <div className="row projectImage justify-content-end">
              <div className="col-10">
                <div className="mb-2 fst-italic">post customization</div>
                <img
                  src={images["post_customization"]}
                  alt="high-fidelity mockup of hi neighbor in-unit screen's post customization feature"
                  className="col-12"
                />
              </div>
            </div>

            <div className="subsectionSpacer" />

            <div className="row projectImage">
              <div className="col-7">
                <div className="mb-2 fst-italic">neighbor profiles</div>
                <img
                  src={images["inunit_neighbors"]}
                  alt="high-fidelity mockup of hi neighbor in-unit screen's neighbor profiles"
                  className="col-12"
                />
              </div>
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText title="welcome card" text="" type="project info" />

            <div className="row projectImage">
              <img
                src={images["welcome_card"]}
                alt="hi neighbor welcome card"
              />
            </div>

            <div className="subsectionSpacer" />

            <HeaderAndText
              title="onboarding experience + demo"
              text=""
              type="project info"
            />

            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="embed-responsive responsive-iframe-wrapper ">
                  <iframe
                    width="500"
                    height="650"
                    className="embed-responsive-item responsive-iframe"
                    src="https://www.youtube.com/embed/9u1TqpiGUzo?si=luPY4QpqzyJgWzhF&amp;controls=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-12 col-md-4 offset-md-1">
                <img
                  src={images["decision_tree"]}
                  alt="decision tree for onboarding"
                  className="img-fluid mb-4"
                />
                <div className="fst-italic mt-5">decision tree</div>
              </div>
            </div>

            <div className="subsectionSpacer" />
          </span>
          <div className="subsectionSpacer" />
          <HeaderAndText title="ui kit" text="" type="project info" />
          <div className="row projectImage">
            <img src={images["ui_kit"]} alt="hi neighbor UI kit" />
          </div>

          <div className="sectionSpacer" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HiNeighbor;
