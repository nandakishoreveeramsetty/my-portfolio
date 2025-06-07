import React from "react";
import "../styles/EmploymentHistory.css";

const employmentData = [
  {
    role: "Associate Consultant",
    company: "Capgemini, Bangalore",
    duration: "Apr 2025 - Present",
    responsibilities: [
      "Working as core Contact Center developer for a Telecom client, transforming legacy systems using Google CES (CCAI).",
      "Hands-on experience with CCAI Platform Management, Dialogflow CX, Playbooks, Agent Assist, and Agent Desktop.",
      "Handled platform configurations like queue setup, Agent Assist, user access, and Agent Desktop customizations.",
    ]
  },
  {
    role: "Senior Analyst / Software Engineer",
    company: "Capgemini, Bangalore",
    duration: "Apr 2024 - Mar 2025",
    responsibilities: [
      "Worked on Chatbot development using Dialogflow CX and Playbooks for a Telecom client.",
      "Managed GCP IAM, CI/CD, DevOps, and analytics using BigQuery.",
    ]
  },
  {
    role: "Analyst / Software Engineer",
    company: "Capgemini, Bangalore",
    duration: "Sep 2022 - Mar 2024",
    responsibilities: [
      "Conducted R&D and delivered successful POCs using latest AI tools like ChatGPT, Gemini, Mintlify, Diffblue, etc.",
      "Led internal Gen AI Hackathon and delivered a solution that converted to a client project.",
    ]
  },
  {
    role: "Java Full Stack Intern",
    company: "Capgemini, Bangalore",
    duration: "Mar 2022 - Jun 2022",
    responsibilities: [
      "Built a Shopping Cart System using Java, Spring Boot, Microservices, Eureka, React, PostgreSQL and MongoDB.",
      "Collaborated with peers and mentors to sharpen hands-on development skills."
    ]
  }
];

const projectsData = [
  {
    name: "Contact Center Transformation using Google CES (CCAI)",
    company: "Telecom Client",
    period: "Jan 2025 - Present",
    details: [
      "Gained very good hands-on experience with the GCP and Google CES Product Suite(Conversational Agents, Agent Assist, Insights and CCAI Platform)",
      "Developed AI Voice, Chat and Search Virtual Agents using Google Conversational Agents (Dialogflow CX)",
      "Built Node.js backend systems and tools integrated with Dialogflow CX using Webhooks.",
      "Configured Agent Assist - Summarization, Generative Knowledge Assist, Sentiment Analysis, and Smart Reply and many other features.",
      "Managed Google CCAI Platform configurations including IVR and Web Chat queues, Virtual Agent and Agent Assist setup, and access controls.",
      "Integrated Human Agent Escalation flows from Dialogflow CX to CCAI Platform and Avaya via SIP headers.",
      "Tested and implemented many features like DAP (Direct Access Point), pass on SIP session data parameters to Dialogflow CX agents.",
      "Integrated with Web SDK, customized Agent Desktop layouts including disposition notes and embedded web pages.",
      "Handled user and agent role-based access management and reporting capabilities in the platform."
    ]
  },
  {
    name: "Proactive Troubleshooting & Sales – Telecom Client",
    period: "Apr 2024 – Jan 2025",
    details: [
      "Developed end-to-end Generative AI chatbots using Dialogflow CX and Playbooks for sales and troubleshooting use cases.",
      "Built backend systems using Node.js and Java Spring Boot; integrated with Dialogflow CX via webhooks.",
      "Integrated chatbot with custom React UI and deployed the UI in App Engine and Cloud Run.",
      "Handled authentication/handshake between Cloud Run's",
      "Containerized backend services with Docker and deployed to Cloud Run with SSL certificates for secure communication.",
      "Set up infrastructure components including Internal Load Balancer (ILB), Service Directory, and VPC for secure networking.",
      "Pushed Dialogflow conversation history into BigQuery and wrote complex SQL queries to analyze chatbot performance during production pilot.",
      "Gained hands-on experience in many of the services within GCP like DialogFlow CX, Cloud Run, Cloud Functions, Artifact Registry, App Engine, GKE, IAM, Cloud Storage, Cloud SQL, Big Query, Pub-Sub, Cloud Scheduler, etc."
    ]
  }
  ,
  {
    name: "Google Account - Gen AI Innovation Team",
    period: "2024",
    details: [
      "Co-developed Generative AI chatbots in collaboration with Googlers using the latest features in Google's Conversational AI Platform, including Datastores and Playbooks.",
      "Co-authored internal learning assets and technical documentation for knowledge sharing across teams.",
      "Worked closely with Googlers to design and validate test strategies for LLM-based responses using proprietary tools."
    ]
  },
  {
    name: "Abuse & DMCA - Middleware project of a Telecom client",
    period: "2023",
    details: [
      "Worked as a Java Spring Boot developer on a large-scale system comprising 25+ microservices handling Abuse and DMCA workflows.",
      "Authored detailed technical documentation by thoroughly analyzing legacy code and capturing key logic and dependencies.",
      "Created sequence and flow diagrams to visualize service interactions and improve team understanding.",
      "Contributed to code enhancements and refactoring efforts across multiple services.",
      "Worked on migration of a critical service build process from Maven to Gradle."
    ]
  },
  
  {
    name: "Career Suggestion Chatbot – Google Gen AI Hackathon",
    period: "2023",
    details: [
      "Led and coordinated 3 cross-functional teams from the project for the Google Gen AI Hackathon.",
      "Acted as lead developer for the Career Suggestion chatbot, built using GCP and Vertex AI.",
      "Managed timelines, collaboration, and submissions across all teams, ensuring smooth execution.",
      "The Career AI bot scored 4.1/5 in evaluations and contributed to securing a client project."
    ]
  }
  
];

const EmploymentHistory = () => {
  return (
    <section className="employment-history-section">
      <h2>Employment History</h2>
      <p className="employment-note">All roles held at Capgemini, Bangalore from Mar 2022 to Present</p>
      <div className="timeline">
        {employmentData.map(({ role, company, duration, responsibilities }, idx) => (
          <div className="timeline-entry" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{role}</h3>
              <p className="duration">{duration}</p>
              <ul>
                {responsibilities.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2>Key Projects</h2>
      <h4>Have worked on multiple projects across Full-Stack Development, Cloud and Contact Center AI.</h4>
      {projectsData.map(({ name, company, period, details }, idx) => (
        <div className="project" key={idx}>
          <h4 className="project-name">{name}</h4>
          {company && <p className="project-company">{company}</p>}
          {period && <p className="project-period">{period}</p>}
          <ul>
            {details.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EmploymentHistory;
