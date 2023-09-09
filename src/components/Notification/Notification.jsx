import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <>
    <p className={css['notify-message']}>{message}</p>
    <p className={css['notify-message']}>
      Please leave your feedback by clicking one of the buttons above 🔼
    </p>
  </>
);
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
