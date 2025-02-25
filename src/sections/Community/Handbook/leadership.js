import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import {Link} from "gatsby";

const badgeStyle = {
  height: "25px",
  width: "25px",
  marginRight: "5px"
};
const badgeListStyle = {
  listStyleType: "none"
};

const CommunityGuide= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Contributor Ladder</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>What does leadership mean to the Layer5 community?</h2>
            <p>
              A leader is someone who can contribute to the Layer5 Community's growth by being accountable, participating in decision-making, and feeling responsible.
            </p>
            <h3>What does it take to be a leader?</h3>
            
            <h4><strong>Community Manager</strong></h4>
            <p>
              Roles/Responsibilities:
              <ul>
                <li>Moderating, engaging, and supporting community members on platforms like Slack, GitHub etc.</li>
                <li>Building healthy relationships among community members.</li>
                <li>Celebrating community successes, sending swag, and recognizing top contributors.</li>
                <li>Regularly updating the community on the metrics performance.</li>
                <li>Creating and managing new community programs.</li>
                <li>Organizing meetups, events, and other engagements.</li>
                <li>Coordinating with other departments—such as product, engineering, and content marketing—to support community initiatives.</li>
              </ul>
            </p>
            <p><strong>Checklist before becoming a Community Manager</strong></p>
            <input type="checkbox" name="CM-checklist-1" id="CM-checklist-1"/>
            <label htmlFor="CM-checklist-1">
              Prior technical community management experience
            </label>
            <input type="checkbox" name="CM-checklist-2" id="CM-checklist-2"/>
            <label htmlFor="CM-checklist-2">
              Self-motivated with the ability to manage multiple competing priorities
            </label>
            <input type="checkbox" name="CM-checklist-3" id="CM-checklist-3"/>
            <label htmlFor="CM-checklist-3">
              A growth mindset and an approach to new information and knowledge with curiosity
            </label>
            <input type="checkbox" name="CM-checklist-4" id="CM-checklist-4"/>
            <label htmlFor="CM-checklist-4">
              A challenge seeker who desires and readily takes on new challenges and works towards solutions
            </label>
            <input type="checkbox" name="CM-checklist-5" id="CM-checklist-5"/>
            <label htmlFor="CM-checklist-5">
              Good communication skills
            </label>
            <input type="checkbox" name="CM-checklist-6" id="CM-checklist-6"/>
            <label htmlFor="CM-checklist-6">
              Strong relational skills
            </label>
            <input type="checkbox" name="CM-checklist-7" id="CM-checklist-7"/>
            <label htmlFor="CM-checklist-7">
              An understanding of how contemporary open-source projects function
            </label>
            <br/>
            <h4><strong><Link to="/community/meshmates">MeshMate</Link></strong></h4>
            <p>
              Roles/Responsibilities:
              <ul>
                <li>Increasing awareness of the community to others</li>
                <li>Helping newbies in the community get familiar with all of the projects</li>
                <li>Mentoring members of the community</li>
                <li>Facilitate newcomers call</li>
              </ul>
            </p>
            <h4><strong>Maintainer</strong></h4>
            <p>
              Roles/Responsibilities:
              <ul>
                <li>Send a reminder about meetings</li>
                <li>Prepare meetings</li>
                <li>Lead meetings</li>
                <li>Make sure meeting minutes are kept</li>
                <li>Facilitate the creation and advancement of metrics/software</li>
                <li>Answer questions about the progress of Layer5 projects</li>
                <li>Report on weekly community call progress on a project</li>
                <li>Review issues on the repository</li>
                <li>Review and merge pull requests</li>
                <li>Regularly check the repository for stale content</li>
                <li>Monitor issue tracker and pull requests</li>
              </ul>
            </p>
            <p><strong>Checklist before becoming a Maintainer</strong></p>
            <input type="checkbox" name="maintainer-checklist-1" id="maintainer-checklist-1"/>
            <label htmlFor="maintainer-checklist-1">
                Makes consistent contributions within the Layer5 community
            </label>
            <input type="checkbox" name="maintainer-checklist-2" id="maintainer-checklist-2"/>
            <label htmlFor="maintainer-checklist-2">
                Has the ability to commit directly to a project repository
            </label>
            <input type="checkbox" name="maintainer-checklist-3" id="maintainer-checklist-3"/>
            <label htmlFor="maintainer-checklist-3">
                Holds knowledge of Layer5 project performance, and software
            </label>
            <input type="checkbox" name="maintainer-checklist-3" id="maintainer-checklist-4"/>
            <label htmlFor="maintainer-checklist-4">
                Attends community meeting
            </label>
            <input type="checkbox" name="maintainer-checklist-5" id="maintainer-checklist-5"/>
            <label htmlFor="maintainer-checklist-5">
                Holds good knowledge in helping others achieve their goals
            </label>
            <input type="checkbox" name="maintainer-checklist-6" id="maintainer-checklist-6"/>
            <label htmlFor="maintainer-checklist-6">
                Has knowledge of Git and GitHub
            </label>
            <input type="checkbox" name="maintainer-checklist-7" id="maintainer-checklist-7"/>
            <label htmlFor="maintainer-checklist-7">
                Understands the workflow of the Issues and Pull Requests
            </label><br/>

          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default CommunityGuide;
