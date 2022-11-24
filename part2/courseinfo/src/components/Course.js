const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ part }) => {
  const { name, exercises, id } = part;
  return (
    <p key={id}>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => (
  <b>
    Total of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
  </b>
);
const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
