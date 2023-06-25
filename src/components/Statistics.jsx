import PropTypes from 'prop-types';
import React from 'react';
// import statisticData from '../data/data.json';

const Statistics = ({ title, stats }) => {
  return (
<section className="statistics">
{title && <h2 className="title">{title}</h2>}

<ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="item_label">{label}</span>
             <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;