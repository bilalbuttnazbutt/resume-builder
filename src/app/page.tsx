"use client"
import React, { useState } from 'react';
import FormSection from '../components/FormSection';
import ResumePreview from '../components/ResumePreview';

const Home = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h2>Resume Builder</h2>
        <FormSection
          title="Personal Information"
          fields={[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone', name: 'phone', type: 'text' },
          ]}
          values={formValues}
          onChange={handleChange}
        />
        <FormSection
          title="Experience"
          fields={[{ label: 'Experience', name: 'experience', type: 'text' }]}
          values={formValues}
          onChange={handleChange}
        />
        <FormSection
          title="Education"
          fields={[{ label: 'Education', name: 'education', type: 'text' }]}
          values={formValues}
          onChange={handleChange}
        />
      </div>
      <ResumePreview {...formValues} />
    </div>
  );
};

export default Home;

