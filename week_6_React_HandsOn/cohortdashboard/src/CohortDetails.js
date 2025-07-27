import React from 'react';
import styles from './CohortDetails.module.css'; // Import CSS module

function CohortDetails(props) {
  const { name, startDate, endDate, status } = props;

  // Inline style based on status
  const statusStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <dl>
        <dt>Cohort Name:</dt>
        <dd>{name}</dd>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>End Date:</dt>
        <dd>{endDate}</dd>
      </dl>
      <h3 style={statusStyle}>Status: {status}</h3>
    </div>
  );
}

export default CohortDetails;
