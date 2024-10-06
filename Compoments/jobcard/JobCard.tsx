import { Link } from "react-router-dom";
import "./jobcard.css";
import React from 'react';

interface Skill {
  id: string;
  name: string;
}

interface Job {
  id: string;
  company: string;
  location: string;
  relationships?: {
    skills: Skill[]; // assuming skills are objects with an id and name
  };
  attributes?: {
    title: string;
  };
  title?: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title || job.attributes?.title}</h3>

      {job.relationships?.skills?.length ? (
        <>
          <p className="relatedskills">Related Skills:</p>
          <ul className="relatedskills">
            {job.relationships.skills.map((skillname) => (
              <li key={skillname.id}>{skillname.id}</li> // using skill.id as key
            ))}
          </ul>
        </>
      ) : (
        <p>No related skills available</p>
      )}

      <Link to={`/job/${job.id}`}>View Job details</Link>
    </div>
  );
};

export default JobCard;
