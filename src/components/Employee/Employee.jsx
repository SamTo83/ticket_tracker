import React from "react";
import "./Employee.scss";
import Counter from "../../components/Counter/Counter";

const Employee = (props) => {
  const { name, role } = props;

  return (
    <div className="employee__info">
      <h3 className="employee__name">Name: {name}</h3>
      <h3 className="employee__role">Role: {role}</h3>
      <div className="employee__counter-wrapper">
        <Counter />
      </div>
    </div>
  );
};

export default Employee;
