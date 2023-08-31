import React from "react";

import image1 from "../images/house_1f3e0.png";
import image2 from "../images/gear_2699-fe0f.png";
import image3 from "../images/speech-balloon_1f4ac.png";
import image4 from "../images/house_1f3e0.png";

const projects = [
  {
    id: 1,
    imageUrl: image1,
    link: "/homepage1",
    title: "Homepage 1",
  },

  {
    id: 2,
    imageUrl: "",
    link: "/chat",
    title: "Chat",
  },
  {
    id: 3,
    imageUrl: image3,
    link: "/homepage3",
    title: "Create Message",
  },
  {
    id: 4,
    imageUrl: image2,
    link: "/homepage1",
    title: "Profile Settings",
  },
  {
    id: 5,
    imageUrl: "url_to_your_image2",
    link: "/email",
    title: "E-Mail",
  },
  {
    id: 6,
    imageUrl: "url_to_your_image3",
    link: "/homepage3",
    title: "Filler Box",
  },
  // Add more projects as needed
];

function renderProjects() {
  return projects.map((project) => (
    <div key={project.id} className="project-box">
      <a href={project.link}>
        <img src={project.imageUrl} alt={project.title} />
      </a>
      <h3>{project.title}</h3> {/* Include the label */}
    </div>
  ));
}

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to your dashboard, {user.first_name}!</h1>

      <div className="container mt-5">
        <div className="projects-container">{renderProjects()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
