const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const Hello = (props) => {
  const { name, age } = props;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const person = {
    name: "John Doe",
    age: 30,
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> <br />
      <Hello name={person.name} age={person.age} />
    </div>
  );
};

export { App, Hello };
