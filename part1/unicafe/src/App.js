import { useState } from "react";

const Title = ({ text }) => <h2>{text}</h2>;

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const StatisticLine = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  if (all === 0)
    return (
      <>
        <Title text="Statistics" />
        <p>No feedback given</p>
      </>
    );
  return (
    <>
      <Title text="Statistics" />
      <table>
        <tbody>
          <StatisticLine name="Good" value={good} />
          <StatisticLine name="Neutral" value={neutral} />
          <StatisticLine name="Bad" value={bad} />
          <StatisticLine name="All" value={all} />
          <StatisticLine name="Average" value={(good - bad) / all} />
          <StatisticLine name="Positive" value={`${(good / all) * 100}%`} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title text="Give feedback" />
      <Button text="Good" clickHandler={() => setGood(good + 1)} />
      <Button text="Neutral" clickHandler={() => setNeutral(neutral + 1)} />
      <Button text="Bad" clickHandler={() => setBad(bad + 1)} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
