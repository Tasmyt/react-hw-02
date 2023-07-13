import { StatisticsBox, StatisticsBlock, StatisticsTotal } from "./Statistics.styled";
export const Statistics = ({
  options,
  quantity,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatisticsBox>
      {options.map(option => {
        return (
          <StatisticsBlock key={option}>
            {option}: {quantity[option]}
          </StatisticsBlock>
        );
      })}
      <StatisticsTotal>Total: {countTotalFeedback()} </StatisticsTotal>
      <StatisticsTotal>
        Positive feedback:{' '}
        {isNaN(countPositiveFeedbackPercentage())
          ? 100
          : countPositiveFeedbackPercentage()}
        %{' '}
      </StatisticsTotal>
    </StatisticsBox>
  );
};
Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  quantity: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};