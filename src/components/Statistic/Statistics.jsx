import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div className={css['statistic-wrapper']}>
      <ul className={css['statistic-list']}>
        <li className={css['statistic-item']}>Good: {good}</li>
        <li className={css['statistic-item']}>Neutral: {neutral}</li>
        <li className={css['statistic-item']}>Bad: {bad}</li>
        <li className={css['statistic-item']}>Total: {total()}</li>
      </ul>
      <p className={css['statistic-feedback']}>
        Positive feedback: {positivePercentage()}%
      </p>
    </div>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
