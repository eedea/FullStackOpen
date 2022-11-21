import { useState } from "react";

const Title = ({ text }) => <h2>{text}</h2>;

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const StatInfo = ({ name, value }) => (
  <p>
    {name} {value}
  </p>
);

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
      <Title text="Statistics" />
      <StatInfo name="Good" value={good} />
      <StatInfo name="Neutral" value={neutral} />
      <StatInfo name="Bad" value={bad} />
    </div>
  );
};

export default App;
