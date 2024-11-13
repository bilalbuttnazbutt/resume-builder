
import React from 'react';

interface ResumePreviewProps {
  name: string;
  email: string;
  phone: string;
  experience: string;
  education: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ name, email, phone, experience, education }) => {
  return (
    <div className="resume-preview">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <h3>Experience</h3>
      <p>{experience}</p>
      <h3>Education</h3>
      <p>{education}</p>
    </div>
  );
};

export default ResumePreview;
