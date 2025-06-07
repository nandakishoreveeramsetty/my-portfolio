import React from 'react';
import '../styles/Certifications.css';

const certifications = [
  {
    title: "Google Cloud Digital Leader",
    date: "04/2025",
    credential: "https://www.credly.com/badges/21b32049-e666-4d70-9907-bb429f62dd21/public_url",
  },
  {
    title: "AWS Cloud Practitioner, AWS",
    date: "10/2022",
    credential: "https://www.credly.com/badges/5f03d40a-f910-4c94-a1de-f622d411d77a/linked_in_profile",
  },
  {
    title: "Conversational AI on Vertex AI and Dialogflow CX, Google",
    date: "",
    credential: "https://www.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/8733260?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Contact Center AI: Conversational Design Fundamentals, Google",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/5939441?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Deploy Multi-Agent Systems with Agent Development Kit and Agent Engine",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/15685208?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Build generative virtual agents with API integrations",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/13567829?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Build generative virtual agents with API integrations - Advanced Skill Badge",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/13567829?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Building Complex Self-Service Experiences in Conversational Agents",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/13550822?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Incorporating Generative Features into Complex Conversational Agents",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/13567726?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Intro to Conversational AI and Conversational AI Engagement Framework",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/13378455?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Advanced Webhook Concepts",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/9674284?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Conversational AI Telephone and Chat Integrations",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/9669272?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "DialofFlow CX: Managing Environments",
    date: "",
    credential: "https://www.coursera.org/account/accomplishments/records/X3CGG32Z87YW",
  },
  {
    title: "DialofFlow CX: Parameter Manupulation",
    date: "",
    credential: "https://www.coursera.org/account/accomplishments/records/L22GATJ76ULY",
  },
  {
    title: "Generative AI Fundamentals, Google",
    date: "",
    credential: "https://partner.cloudskillsboost.google/public_profiles/72534f49-272a-4d93-8f01-7f32e475b92a/badges/4107486?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Chat GPT and Generative AI: The Big Picture, Pluralsight",
    date: "",
    credential: "https://app.pluralsight.com/achievements/share/17723c64-a150-4c6a-9db7-5e5bb0d2539e",
  },
  
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certifications / Courses / Badges</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <strong>{cert.title}</strong> {cert.date && <span className="date">({cert.date})</span>}
            <br />
            <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="cert-link">
              View Credential
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
