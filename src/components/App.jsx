import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleFeedbackNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleFeedbackBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={this.props.title}>
          <FeedbackOptions
            handleFeedbackGood={this.handleFeedbackGood}
            handleFeedbackNeutral={this.handleFeedbackNeutral}
            handleFeedbackBad={this.handleFeedbackBad}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
