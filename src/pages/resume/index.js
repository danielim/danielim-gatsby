// @format
import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
          <SEO
            pathname={`${this.props.location.pathname}`}
            title={`Resume`}
            description={`Curriculum Vitae`} />
        <article>
          <header
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/blog-index.png')`,
            }}>
            <h1
              style={{
                boxShadow: '0.5rem 0 0 #cc0000, -0.5rem 0 0 #cc0000',
                padding: '1rem',
                fontSize: '2em',
              }}>
              Daniel Luis Chen
            </h1>
          </header>
          <main className="container">
            <p>
              Web developer focusing on accessibility and user experience.
              Designed and developed web-based system administrative services
              for military R&D, built professional conferences’ websites, and
              trained in progressive web apps. Currently seeking a position
              which will allow me to expand my knowledge in both technical and
              design skills.
            </p>
            <section>
              <h2>TECHNICAL SKILLS</h2>
              <ul className="resume-3-columns">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Babel</li>
                <li>React.js</li>
                <li>Gulp</li>
                <li>Webpack</li>
                <li>Git</li>
                <li>Inferno.js</li>
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL/MySQL</li>
                <li>Mobile first design</li>
                <li>Offline first design</li>
                <li>Progressive web apps</li>
                <li>Linux</li>
              </ul>
            </section>

            <section>
              <h2>SOFT SKILLS</h2>
              <ul className="resume-2-columns">
                <li>Good communication skills</li>
                <li>Collaborative teamwork</li>
                <li>Mentorship experience</li>
                <li>Agile Development Process</li>
                <li>Leadership experience</li>
              </ul>
            </section>
            <section>
              <h2>EDUCATION</h2>
              <div className="resume-wrap">
                <div className="resume-flex">
                  <div className="resume-secondary">
                    Bachelor of Science Texas A&M University
                  </div>
                  <div className="resume-duration"> August 2006 - May 2010</div>
                </div>
                <div className="resume-location">College Station, Texas</div>
              </div>
            </section>
            <section>
              <h2>WORK EXPERIENCE</h2>
              <div className="resume-experience-wrap">
                <h3 className="resume-primary">Web Developer</h3>
                <div className="resume-flex">
                  <div className="resume-secondary">Texas Linux Fest</div>
                  <div className="resume-duration">June 2013 - June 2019</div>
                </div>
                <div className="resume-location">Austin, Texas</div>
                <p>
                  Texas Linux Fest is the first statewide annual community-run
                  conference for Linux and open source software users first
                  started in 2010. It averages 500 attendees every year.
                </p>
                <h4>Responsibilities</h4>
                <ul className="resume-experience-list">
                  <li>
                    Designed and developed the conference website to be
                    responsive and functional
                  </li>
                  <li>
                    Used GIT to version control and collaborate with other
                    developers
                  </li>
                  <li>Created and modified vector images with Inkscape</li>
                  <li>Optimized images with Imagemagick and optipng</li>
                  <li>
                    Wrote an Ionic framework app on Android to provide
                    conference information. It had features such as making your
                    own itinerary from the schedule
                  </li>
                </ul>
                <h4>Achievements</h4>
                <ul className="resume-experience-list">
                  <li>
                    Provided a website for attendees to get the most up to date
                    information about the conference
                  </li>
                </ul>
              </div>
              <div className="resume-experience-wrap">
                <h3 className="resume-primary">Organizer and Videographer</h3>
                <div className="resume-flex">
                  <div className="resume-secondary">
                    Hill Country JavaScript Meetup
                  </div>
                  <div className="resume-duration">May 2015 - March 2019</div>
                </div>
                <div className="resume-location">San Antonio, Texas</div>
                <p>
                  Hill Country JavaScript Meetup has over 400 members with 10 to
                  20 members attending the monthly meetings. The focus of the
                  organization was to provide a platform for learning,
                  inspiring, and socializing amongst the local talent.
                </p>
                <h4>Achievements</h4>
                <ul className="resume-experience-list">
                  <li>
                    Provided a platform for presentations, hangouts, and for
                    people to ask questions
                  </li>
                </ul>
              </div>
              <div className="resume-experience-wrap">
                <h3 className="resume-primary">Team Lead / Web Developer</h3>
                <div className="resume-flex">
                  <div className="resume-secondary">Mission UX</div>
                  <div className="resume-duration">March 2018 - June 2018</div>
                </div>
                <div className="resume-location">San Antonio, Texas</div>
                <p>
                  Born from a local monthly UI/UX meetup of 800 members, Mission
                  UX 2018 was the first community-driven UX conference in San
                  Antonio led by 24 talented staff and volunteers within 4
                  months.
                </p>
                <h4>Responsibilities</h4>
                <ul className="resume-experience-list">
                  <li>
                    Met short deadlines and quality requirements by coordinating
                    and leading weekly meetings for both the design and
                    development teams
                  </li>
                  <li>
                    Assisted in establishing a goal and focusing the design team
                  </li>
                  <li>Acted as liaison with team members and management</li>
                  <li>
                    Converted design templates to a functional responsive
                    website utilizing HTML, CSS, and JavaScript with a mobile
                    first focus
                  </li>
                  <li>
                    Implemented social media metadata and SEO techniques to
                    provide visibility to the website
                  </li>
                  <li>
                    Created BASH scripts to generate duotone, and optimize
                    images
                  </li>
                </ul>
                <h4>Achievements</h4>
                <ul className="resume-experience-list">
                  <li>
                    Successfully organized a UX conference for 150 attendees
                    with a feedback rating of 4.26 out of 5
                  </li>
                  <li>
                    Successfully de-escalated and maintained morale between
                    management and volunteers which led to finishing the design
                    style guide and meeting deadlines
                  </li>
                </ul>
              </div>
              <div className="resume-experience-wrap">
                <h3 className="resume-primary">Software Developer</h3>
                <div className="resume-flex">
                  <div className="resume-secondary">Def-Logix, Inc.</div>
                  <div className="resume-duration">
                    December 2015 - March 2018
                  </div>
                </div>
                <div className="resume-location">San Antonio, Texas</div>
                <p>
                  Def-Logix, Inc. is a small to medium sized company established
                  in 2008. It specializes in cyber security research and
                  development through government contracts.
                </p>
                <h4>Responsibilities</h4>
                <ul className="resume-experience-list">
                  <li>
                    Designed REST API to communicate between a web server and
                    UEFI
                  </li>
                  <li>
                    Developed web applications integrating Django and PostgreSQL
                    as a back-end with React/Redux Front-End
                  </li>
                  <li>
                    Created python scripts analyzing resting data to report and
                    restore compromised workstations
                  </li>
                  <li>
                    Used Taiga, a project management platform, to keep track of
                    tasks and user stories during Agile development methodology
                  </li>
                  <li>
                    Wrote unit tests for Front-End JavaScript logic and Python
                    scripts
                  </li>
                </ul>
                <h4>Achievements</h4>
                <ul className="resume-experience-list">
                  <li>
                    Delivered a software solution to protect against bootloader
                    malware which enabled the company to acquire a follow-up
                    contract
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h2>ADDITIONAL TRAINING</h2>
              <div className="resume-wrap">
                <div className="resume-flex">
                  <div className="resume-secondary">
                    Mobile Web Specialist - Google Scholarship Graduate
                  </div>
                  <div className="resume-duration">November 2018</div>
                </div>
                <div className="resume-flex">
                  <div className="">
                    <a href="https://graduation.udacity.com/confirm/NKUXKLRQ">
                      Link to graduation certificate
                    </a>
                  </div>
                  <div className="">Udacity</div>
                </div>
              </div>
              <div className="resume-wrap">
                <div className="resume-flex">
                  <div className="resume-secondary">
                    Deep JavaScript Foundations
                  </div>
                  <div className="resume-duration">2017</div>
                </div>
                <div className="resume-flex">
                  <div className="">Kyle Simpson</div>
                  <div className="">frontendmasters.com</div>
                </div>
              </div>
              <div className="resume-wrap">
                <div className="resume-flex">
                  <div className="resume-secondary">
                    The good parts of JavaScript and the Web
                  </div>
                  <div className="resume-duration">2017</div>
                </div>
                <div className="resume-flex">
                  <div className="">Douglas Crockford</div>
                  <div className="">frontendmasters.com</div>
                </div>
              </div>
            </section>
          </main>
        </article>
      </Layout>
    );
  }
}
