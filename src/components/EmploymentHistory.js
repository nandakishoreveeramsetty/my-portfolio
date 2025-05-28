import React from "react";
import "../styles/EmploymentHistory.css";

const employmentData = [
  {
    role: "Associate Consultant",
    company: "Capgemini, Bangalore",
    duration: "Apr 2025 - Present",
    projects: [
      {
        name: "Contact Center Transformation using Google CES (CCAI)",
        period: "Jan 2025 - Present",
        details: [
          "Core Contact Center developer for a critical Telecom client project, transforming existing contact center into Google CES.",
          "Hands-on experience with Google CES product suite: CCAI Platform Management, Dialogflow CX, Playbooks, Agent Assist, Agent Desktop.",
          "Developed AI Voice and Chat Virtual Agents using Dialogflow CX with complex conversation flows and fallback mechanisms.",
          "Managed Contact Center platform configurations: queues, Virtual Agent setup, Agent Assist and Desktop customizations, user management.",
          "Built Node.js backend systems integrated with Dialogflow CX.",
          "Integrated CES with Avaya, handling SIP header extraction/transmission.",
          "Configured Conversation Profiles with Generative Knowledge Assist, Smart Reply, Live Transcription, Sentiment Analysis, Summarization.",
          "Customized Agent Desktop layout, disposition/notes, embedding custom web pages.",
          "Received Innovation Award for visionary excellence (March 2025).",
        ],
      },
    ],
  },
  {
    role: "Senior Analyst / Software Engineer",
    company: "Capgemini, Bangalore",
    duration: "Apr 2024 - Mar 2025",
    projects: [
      {
        name: "Proactive Troubleshooting, Sales - Telecom Client",
        period: null,
        details: [
          "Developed AI-driven Troubleshooting and Sales Chatbots using Google Generative AI.",
          "Led backend and frontend chatbot development using Dialogflow CX and Playbooks.",
          "Integrated Dialogflow CX with React UI, Twilio (outbound calls), Khoros (Human Agent Escalations).",
          "Performed BigQuery analytics to measure application performance.",
          "Managed SSL, CI/CD, DevOps, security, IAM permissions on GCP.",
          "Received Rookie Star Award (April 2024) and Extra Mile Award (Jan 2025) for exceptional delivery.",
        ],
      },
      {
        name: "Google Account",
        period: null,
        details: [
          "Collaborated with Googlers on CCAI projects focusing on Playbooks and Gen AI chatbot POCs.",
          "Studied internal Google documentation, created learning materials and presentations circulated across teams.",
          "Developed testing methodologies for LLM and Playbook responses for telecom clients.",
        ],
      },
    ],
  },
  {
    role: "Analyst / Software Engineer",
    company: "Capgemini, Bangalore",
    duration: "Sep 2022 - Mar 2024",
    projects: [
      {
        name: null,
        period: null,
        details: [
          "Conducted R&D comparing AI tools: Xplnr, Mintlify, Diffblue, Ponicode with ChatGPT.",
          "Achieved 100% success in POCs using latest technologies.",
          "Built an internal UI builder tool with drag and drop functionality.",
          "Gained hands-on experience with Generative AI tools from Google, Amazon, Microsoft.",
          "Led Google Gen AI Hackathon 2023: requirement gathering, project planning, coordinated three teams.",
          "Developed Career Suggestion chatbot on Vertex AI with 4.1/5 score; demo secured a client project.",
          "Received XTRAMILE award for Q3 2023 for exceptional performance.",
        ],
      },
    ],
  },
  {
    role: "Java Full Stack Intern",
    company: "Capgemini, Bangalore",
    duration: "Mar 2022 - Jun 2022",
    projects: [
      {
        name: null,
        period: null,
        details: [
          "Developed skills in Java, Spring Boot, Microservices, React.js, HTML, CSS.",
          "Used Eclipse, IntelliJ, VS Code, Postman; managed PostgreSQL and MongoDB Atlas databases.",
          "Built PoC for Shopping Cart System integrating front-end and back-end technologies.",
          "Enhanced development skills through hands-on project work and team collaboration.",
        ],
      },
    ],
  },
];

const EmploymentHistory = () => {
  return (
    <section className="employment-history-section">
      <h2>Employment History</h2>
      {employmentData.map(({ role, company, duration, projects }, idx) => (
        <div className="employment-entry" key={idx}>
          <h3>{role}, <span className="company">{company}</span></h3>
          <p className="duration">{duration}</p>
          {projects.map(({ name, period, details }, i) => (
            <div className="project" key={i}>
              {name && <h4 className="project-name">{name}</h4>}
              {period && <p className="project-period">{period}</p>}
              <ul>
                {details.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default EmploymentHistory;
