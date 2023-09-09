import React, { useState } from 'react';
import Statistics from './Statistic';
import Feedback from './Feedback';
import Section from './Section';
import Notification from './Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setFeedback(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There Is No Feedback'} />
        )}
      </Section>
    </>
  );
}
