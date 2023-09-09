import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={css['feedback-wrapper']}>
    {options.map(option => (
      <button
        className={css['feedback-button']}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
