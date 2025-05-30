import React from "react";
import "../styles/Skills.css";

const skillsData = [
  {
    category: "Conversational AI & CCAI Platforms",
    skills: [
      "Dialogflow CX",
      "Google Playbooks",
      "Google CES (CCAI platform, Agent Assist, Agent Desktop)",
      "Google Agent Development Kit (Multi Agent Framework)",
      "Chatbot Development",
      "Conversational AI",
    ],
  },
  {
    category: "Cloud & AI Technologies",
    skills: [
      "Google Cloud Platform (GCP)",
      "Google Vertex AI",
      "Natural Language Processing (NLP)",
      "Prompt Engineering",
      "Generative AI (Gen AI)",
      "Cloud Functions",
      "Cloud Run",
      "Pub/Sub",
      "Firestore",
      "Data Store",
      "BigQuery",
      "Cloud Scheduler",
      "Cloud Storage",
      "Cloud SQL",
      "IAM",
      "GKE",
      "App Engine"
    ],
  },
  {
    category: "Development & Tools",
    skills: [
      "Java",
      "SpringBoot",
      "Node.js",
      "JavaScript",
      "React.js",
      "HTML / CSS",
      "SQL",
      "Docker (Containerization)",
      "Git"
    ],
  },
  {
    category: "Soft Skills & Leadership",
    skills: [
      "Team Leadership",
      "Team Management",
      "Ability to Multitask",
      "Fast Learner",
      "Communication Skills",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills & Technologies</h2>
      {skillsData.map(({ category, skills }) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <ul className="skills-list">
            {skills.map((skill, idx) => (
              <li key={idx} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
