
import React from 'react';

interface FormSectionProps {
  title: string;
  fields: { label: string; name: string; type: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: { [key: string]: string };
}

const FormSection: React.FC<FormSectionProps> = ({ title, fields, onChange, values }) => {
  return (
    <div>
      <h3>{title}</h3>
      {fields.map((field) => (
        <label key={field.name}>
          {field.label}:
          <input
            type={field.type}
            name={field.name}
            value={values[field.name] || ''}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
};

export default FormSection;
