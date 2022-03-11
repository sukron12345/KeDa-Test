import React, { useState } from 'react';
import {FormGroup, Row, Col, Card, CardTitle, CardBody, CardHeader} from 'reactstrap'
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseFlexible from './components/CourseGoals/CourseFlexible/CourseFlexible';
import './App.css';

const App = () => {
  const [data, setData] = useState('');
  const [dataSub, setDataSub] = useState('');
  const [dataSubDate, setDataSubDate] = useState('')


  return (
    <div>
      <section id="goal-form">
        <Card>
             <CardTitle tag="h5">
                Display Label : {data}
             </CardTitle>
        <CardBody> 
          <FormGroup >
            <Row sm="6">
              
                <CourseInput 
                  name="radio1"
                  value="Radio A"
                  type="radio"
                  title="Radio A"
                  setData={setData}
                />
             
                <CourseInput 
                  name="radio1"
                  value="Radio B"
                  type="radio"
                  title="Radio B"
                  setData={setData}
                />
              
            </Row>
          </FormGroup>
         </CardBody> 
       </Card>
      </section>
      <section id="goal-form">
       <Card>
        <CardBody> 
             <CardTitle tag="h5">
               Subcomponents Text: {dataSub}
             </CardTitle>
           
            <Row>
              <Col>
                <CourseFlexible 
                  name="radio2"
                  type="radio"
                  setDataSub={setDataSub}
                  typeInput="text"
                />
                <CourseFlexible 
                  name="radio2"
                  value="Representatif Form"
                  type="radio"
                  title="Representatif Form"
                  setDataSub={setDataSub}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </section>
      <section id="goal-form">
       <Card>
         <CardBody> 
             <CardTitle tag="h5">
               Subcomponents Date: {dataSubDate}
             </CardTitle>
            
            <Row>
              <Col>
                <CourseFlexible 
                  name="radio3"
                  type="radio"
                  setDataSub={setDataSubDate}
                  typeInput="date"
                />
                <CourseFlexible 
                  name="radio3"
                  value="Representatif Form"
                  type="radio"
                  title="Representatif Form"
                  setDataSub={setDataSubDate}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </section>
      <section id="goal-form">
       <Card label='Form Subcomponents'>
         <CardBody>
             <CardHeader tag="h5">
               Form Subcomponents : {dataSubDate}
             </CardHeader>
             <CourseFlexible 
                  name="radio3"
                  value="Representatif Form"
                  type="radio"
                  title="Representatif Form"
                  setDataSub={setDataSubDate}
                />
            
         </CardBody>
        </Card>
      </section>
      
    </div>
  );
};

export default App;
