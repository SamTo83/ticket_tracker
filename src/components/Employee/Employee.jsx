import React from 'react';
import './Employee.scss';
import Counter from '../../components/Counter/Counter';

const Employee = (props) => {
  const {name, role} = props

  return (
    <div className="employee__info">
      <h3>Name: {name}</h3>
      <h3>Role: {role}</h3>
      <div className="function">
        <Counter/>
      </div>
    </div>
    
  )
};


export default Employee
