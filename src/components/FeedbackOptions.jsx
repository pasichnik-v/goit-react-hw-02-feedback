import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  handleFeedbackGood,
  handleFeedbackNeutral,
  handleFeedbackBad,
}) => {
  return (
    <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
      <button type="button" onClick={handleFeedbackGood}>
        Good
      </button>
      <button type="button" onClick={handleFeedbackNeutral}>
        Neutral
      </button>
      <button type="button" onClick={handleFeedbackBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedbackGood: PropTypes.func.isRequired,
  handleFeedbackNeutral: PropTypes.func.isRequired,
  handleFeedbackBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
