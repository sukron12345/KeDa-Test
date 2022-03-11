import React from 'react';
import {FormGroup, Label} from 'reactstrap'

const CourseInput = (props) => {

  const goalInputChangeHandler = event => {
    props.setData(event.target.value)

  };
  
  return (
   <div>
      <FormGroup>
            <input 
              name={props.name} 
              value={props.value} 
              type={props.type} 
              onChange={(e) => goalInputChangeHandler(e)}
              />   
              <Label >{props.title}</Label>
       </FormGroup>
     </div>
  );
};

export default CourseInput;
