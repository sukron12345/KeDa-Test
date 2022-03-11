import React, {useState} from 'react';
import {FormGroup, Label} from 'reactstrap'
import InputForm from '../../UI/Button/Input';

const CourseFlexible = (props) => {
 const [isData, setIsData] = useState('')
  const goalInputChangeHandler = event => {
  if(props.title) {
    props.setDataSub(event.target.value)
  } else {
    props.setDataSub(isData)
   }
  };
  
  return (  
   <div>
      <FormGroup>
            <input 
              name={props.name} 
              value={!props.title ? isData : props.value} 
              type={props.type} 
              onChange={(e) => goalInputChangeHandler(e)}
              />
            {!props.title &&    
              <InputForm 
               type={props.typeInput}
               name="inputan"
               setIsData={setIsData}
              />
            }
            <Label >{props.title}</Label>
       </FormGroup>
     </div>
  );
};

export default CourseFlexible;
