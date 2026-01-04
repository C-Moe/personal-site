import { images } from "../BoundareaseImages";
import Footer from "./Footer";
import HeaderAndText from "./HeaderAndText";
import HighlightedNumber from "./HighlightedNumber";
import ProjectInfo from "./ProjectInfo";

const info: IProjectInfo = {
  year: "2023",
  projectRole: "co-designer & developer",
  deliverables: "live website, academic paper",
  skills: "programming, research analysis, project management",
  tools: "Figma, VS Code, React, Python, Notion",
};

const BoundarEase = () => {
  return (
    <div className="projectPage">
      <img
        className="container projectTopImage"
        src={images["boundarease"]}
        alt="Mockup of BoundarEase"
      />
      <div className="projectPageContent">
        <h1 className="projectTitle">BoundarEase</h1>
        <ProjectInfo info={info} />

        <div className="sectionSpacer" />

        {/* overview */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText type="section header" title="overview" text={""} />
          </div>
          <div className="col-6">
            A project of{" "}
            <a href="https://www.pluralconnections.org/" target="_blank">
              Plural Connections Group
            </a>
            , BoundarEase is a web platform that allows community members to{" "}
            <span className="highlight">
              explore potential school attendance boundaries
            </span>{" "}
            based on their preferences and offer feedback.
            <div className="paragraphSpacer" />
            It aims to{" "}
            <span className="highlight">facilitate community engagement</span>,
            as well as foster{" "}
            <span className="highlight">
              more equitable student assignment policies
            </span>
            .
            <div className="subsectionSpacer" />
            <img
              src={images["overview_mockup"]}
              alt="laptop mockup of BoundarEase"
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
            formative study {"->"} ideation / design {"->"} development {"->"}{" "}
            user study
          </div>
        </div>

        <div className="sectionSpacer" />

        {/* background */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText type="section header" title="background" text={""} />
          </div>
          <div className="col-6">
            Plural Connections' mission is to use tools from data science and
            design to advance pluralism: an inclusive response to diversity in
            society. It focuses especially on inclusive education and mindful
            media consumption and sharing.
            <div className="paragraphSpacer" />
            So, one project we took on was in{" "}
            <span className="highlight">
              collaboration with a large US public school district
            </span>{" "}
            serving nearly 150,000 students . At the start of the project, the
            district was{" "}
            <span className="highlight">
              changing their school attendance boundaries
            </span>
            , i.e. boundaries that school districts draw to determine which
            neighborhoods are assigned to which schools. It wanted to foster{" "}
            <span className="highlight">
              more, as well as more constructive
            </span>
            , community engagement in their process.
            <div className="paragraphSpacer" />
            Working with the district and subject matter experts (SMEs), I along
            with two other group members designed a technology-based solution,
            "BoundarEase."
            <div className="paragraphSpacer" />
            {/* TODO: laptop mockup */}
          </div>
        </div>

        <div className="sectionSpacer" />

        {/* formative study */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText
              type="section header"
              title="formative study"
              text={"Gaining a better understanding of user challenges"}
            />
          </div>
          <div className="col-6">
            <hr />A teammate and I conducted{" "}
            <span className="highlight">16 semi-structured interviews</span>{" "}
            with parents who were actively going through the change to better
            understand the challenges around participating in community
            engagement initiatives for attendance boundary planning. We
            synthesized recurring themes and consolidated ideas by creating an
            affinity diagram from our notes and transcripts, finding three major
            patterns.
            <div className="row projectImage">
              <img
                src={images["affinity_diagrams"]}
                alt="affinity diagrams from formative study notes"
              />
            </div>
            <h4>usability challenges</h4>
            Parents expressed how cumbersome the existing community engagement
            process was. It took a significant amount of time to find
            information about the redistricting, and it was difficult to use the
            supplied map interface to understand possible boundary scenarios.
            <div className="paragraphSpacer" />
            Those who were leaders in their communities shared that people often
            were not aware of what information was available, what was
            happening, etc.
            <div className="subsectionSpacer" />
            <h4>tension between individual and collective</h4>
            Some interviewees mainly wanted to know how boundary changes would
            impact their own families, while others wanted to look at the bigger
            picture. Interviewees also brought up not trusting other parents, or
            on the other end, wanting to hear from other parents to get more
            ideas and viewpoints.
            <div className="subsectionSpacer" />
            <h4>distrust between community and the district</h4>
            Parents also felt that feedback was being ignored by the school
            district, which led some to not fill out the surveys at all.
            <div className="paragraphSpacer" />
            They also did not understand the rationale behind the decisions that
            were being made. A couple of parents suggested framing the boundary
            changes in terms of four priorities that the school board agreed
            upon in the past.
          </div>
        </div>

        {/* <div className="paragraphSpacer" />
        <div className="row projectImage">
          <img
            src={images["themes"]}
            // TODO
            alt="example notes from interviews supporting each theme"
          />
        </div> */}

        <div className="sectionSpacer" />

        {/* design questions */}
        <div className="row">
          <div className="col-4 sectionHeaderColumn">
            <HeaderAndText
              type="section header"
              title="design questions"
              text={"Motivating our design with three questions"}
            />
          </div>
          <div className="col-6 d-grid">
            <hr />
            We combined our findings from the formative study and our own
            hypotheses to define the following three questions.
            <div className="d-flex justify-content-center">
              <HighlightedNumber num="1" />
            </div>
            <div className="text-center mb-4 col-9 m-auto">
              Can helping families see how they are embedded in a connected
              system increase their awareness of how certain policies,
              particularly their own preferences, might impact other families?
            </div>
            <div className="d-flex justify-content-center">
              <HighlightedNumber num="2" />
            </div>
            <div className="text-center mb-4 col-9 m-auto">
              Can exposing families to the individual perspectives of those
              adversely affected by their policy priorities lead them to
              moderate their policy preferences?
            </div>
            <div className="d-flex justify-content-center">
              <HighlightedNumber num="3" />
            </div>
            <div className="text-center col-9 m-auto">
              If the redistricting goals of the district are presented through a
              shared vocabulary or set of community values, can it increase
              community trust in the district’s decision-making process?
            </div>
          </div>
          <div className="paragraphSpacer" />

          <div className="sectionSpacer" />

          {/* ideation */}
          <div className="row">
            <div className="col-4 sectionHeaderColumn">
              <HeaderAndText
                type="section header"
                title="ideation"
                text={"Leading a design sprint and expanding on ideas"}
              />
            </div>
            <div className="col-6">
              <hr />
              Next, I led a sprint to help us come up with possible solutions.
              With the above research in mind, we brainstormed answers to four{" "}
              <a
                href="https://www.nngroup.com/articles/how-might-we-questions/"
                target="_blank"
              >
                How might we" questions
              </a>
              , expanding with{" "}
              <a
                href="https://boardofinnovation.com/staff_picks/50-what-if-questions-to-reimagine-the-future/"
                target="_blank"
              >
                "What if" questions
              </a>{" "}
              if helpful. We wrote our ideas and potential features individually
              on Post-it notes and clustered similar ideas together.
              <div className="paragraphSpacer" />
              We then brainstormed potential platforms, using our similar ideas
              as a starting point. Some possibilities included a chat app to
              address questions and establish a feedback loop through "read
              receipts," and a "choose your own adventure" app for a more
              engaging experience that could also encourage empathy.
              <div className="paragraphSpacer" />
              We initially settled on a website that would revolve around a
              timeline, with elements that highlighted feedback events, as well
              as documented the process. We saw positive reactions when we
              talked with the school and SMEs, but felt that the idea was not
              pushing what was possible or already known.
              <div className="paragraphSpacer" />
              So, we{" "}
              <span className="highlight">
                pivoted to focus more on the survey experience
              </span>{" "}
              and how users could interact with data and receive information,
              which would receive much more enthusiastic feedback.
              <div className="row projectImage">
                <img
                  src={images["clusters"]}
                  alt="clusters of ideas the team generated during a design sprint"
                />
                <div className="subsectionSpacer" />
                <img
                  src={images["joined_clusters"]}
                  alt="clusters of similar ideas from the design sprint"
                />
              </div>
            </div>
          </div>

          <div className="sectionSpacer" />

          {/* design */}
          <div className="row">
            <div className="col-4 sectionHeaderColumn">
              <HeaderAndText
                type="section header"
                title="design: a new feedback experience"
                text={"Streamlining information and scaffolding feedback"}
              />
            </div>
            <div className="col-6">
              <hr />
              There were five high-level considerations we wanted to keep in
              mind.
              <div className="paragraphSpacer" />
              <ol>
                <li>
                  <h4>establishment of feedback loops</h4>
                  <p>
                    To address the feeling of not being heard because the
                    district historically never follow up on / seemed to address
                    feedback
                  </p>
                </li>
                <li>
                  <h4>providing context of redistricting</h4>
                  <p>
                    To reduce possible knowledge gaps of community members not
                    understanding the point of redistricting, or historical /
                    societal context and impact
                  </p>
                </li>
                <li>
                  <h4>standardization and demystification of language</h4>
                  <p>
                    To clarify confusing messaging from the district and empower
                    the community with knowledge of the language being used
                  </p>
                </li>
                <li>
                  <h4>asking the "right" questions</h4>
                  <p>
                    To address the feeling that survey questions are leading,
                    lack nuance, or aren't being asked at all
                  </p>
                </li>
                <li>
                  <h4>streamline relevant information</h4>
                  <p>
                    To reduce cognitive overload, decentralized information,
                    etc.
                  </p>
                </li>
              </ol>
              <div className="paragraphSpacer" />
              <h4>low-fidelity mockups</h4>I began testing layouts at the mobile
              breakpoint, meeting with stakeholders and SMEs throughout the
              process for feedback; this helped with details such as word
              choice, or including the definitions of terms for clarity.
              <div className="row projectImage">
                <img
                  src={images["lofi_mockups"]}
                  alt="low-fidelity mobile mockups for boundarease app"
                />
              </div>
              <div className="subsectionSpacer" />
              <h4>high-fidelity prototype</h4>We{" "}
              <span className="highlight">grounded the platform</span> in the
              four priorities, or "four pillars," that the school board
              established.
              <div className="paragraphSpacer" />
              A user is asked to rank the four pillars from most important to
              least important and provide their address. They are then presented
              with a proposed boundary scenario optimized for their ranking.
              <div className="paragraphSpacer" />
              The scenario is described in terms of the four pillars, where each
              pillar has a textual description of the impact and an accompanying
              chart or graph. The text would highlight the impact on the
              individual user and the community as a whole, while the
              visualization would highlight the community only.
            </div>
          </div>
          <div className="subsectionSpacer" />

          {/* hifi mockups */}
          <span
            className="hifi_mockups_background"
            id="boundarease_hifi_mockups_background"
          >
            <div className="row projectImage" id="boundarease_hifi_mockups">
              <img
                src={images["hifi_mockups"]}
                alt="high-fidelity mockups of the BoundarEase laptop dimension"
              />
            </div>
          </span>

          <div className="row">
            <div className="subsectionSpacer" />
            <div className="col-4" />
            <div className="col-6">
              Instead of asking a binary question ("Do you like this scenario?")
              as the previous surveys had done, we gave the user a five-star
              scale to rate the scenario. The user is then provided an open
              textbox to explain their rating, along with data points from each
              of the pillars to add to their reasoning if desired. We
              hypothesized that this would both assist those who might struggle
              with articulating their feelings and prevent extremely
              emotionally-driven responses that lacked constructive feedback.
              <div className="paragraphSpacer" />
              Then the user is shown a different perspective from their own,
              determined by their ranking from the first page. It would be a
              testimonial from a student or faculty member, feedback from
              another parents. etc. They are presented the same feedback UI as
              before and asked if they want to change anything.
              <div className="paragraphSpacer" />
              Once they submit, they are shown a simple thank you screen and
              possibly given next steps or ways of contacting the school.{" "}
            </div>

            <div className="sectionSpacer" />

            {/* user study + outcomes */}
            <div className="row">
              <div className="col-4 sectionHeaderColumn">
                <HeaderAndText
                  type="section header"
                  title="user study & outcomes"
                  text={"Evaluating BoundarEase as a tool"}
                />
              </div>
              <div className="col-6">
                <hr />
                We assessed BoundarEase by conducting{" "}
                <span className="highlight">12 semi-structured</span>{" "}
                interviews, asking participants to think aloud as they
                interacted with a desktop version of the platform and answered
                periodic questions. A teammate and I then synthesized the data
                with thematic coding, segmenting the interviews into units and
                assigning each unit a code for analysis.
                <div className="row projectImage">
                  <img
                    src={images["user_study"]}
                    alt="qualitative coding to analyze user study feedback"
                  />
                </div>
                <div className="row">
                  <div className="col-6 stat">
                    <div className="KeyNumber">100%</div>
                    stated BoundarEase was clearer in how new boundaries would
                    affect their families and others compared to the current
                    process
                  </div>
                  <div className="col-6 stat">
                    <div className="KeyNumber">82%</div>
                    believed BoundarEase helped them understand how others might
                    be affected and/or what they care about
                  </div>
                  <div className="subsectionSpacer" />
                  We also found that participants really appreciated the
                  scaffolded qualitative feedback experience, brevity and
                  relevance of included information, and interactivity of the
                  platform (e.g. personalized statistics and ability to toggle
                  between different scenarios).
                  <div className="paragraphSpacer" />
                  Per our design questions, we found
                  <ol id="userstudy_dq_results">
                    <li>
                      Placing families in the context of the community prompted
                      participants to think about impacts on others. However,
                      this didn't resolve cognitive dissonance that the
                      scenarios they saw as beneficial to them were the same
                      scenarios that were detrimental to others.
                    </li>
                    <li>
                      The perspective-getting feature was met with mixed
                      reactions; some parents thought it would add healthy
                      friction, while others wanted a more diverse sample of
                      perspectives or skipped it entirely.
                    </li>
                    <li>
                      Overall, interviewees felt that framing a scenario through
                      the four pillars was extremely helpful in grounding the
                      conversation; they could discuss the potential districting
                      with the board and other parents more "rationally" than
                      emotionally.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="sectionSpacer" />

              {/* future work */}
              <div className="row">
                <div className="col-4 sectionHeaderColumn">
                  <HeaderAndText
                    type="section header"
                    title="next steps"
                    text={"Iterating and thinking towards the future"}
                  />
                </div>
                <div className="col-6">
                  <hr />
                  Our next steps would be to iterate based on the feedback we
                  received to deploy at a larger scale.
                  <div className="paragraphSpacer" />
                  In particular, we would address
                  <ul>
                    <li>confusing visualizations,</li>
                    <li>
                      the wording of certain statistics to make them more
                      comprehensive,
                    </li>
                    <li>the perspective-getting feature,</li>
                    <li>
                      establishing when and how to use this tool in the
                      redistricting process, and
                    </li>
                    <li>polishing the visuals overall.</li>
                  </ul>
                </div>
                <div className="sectionSpacer" />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoundarEase;
