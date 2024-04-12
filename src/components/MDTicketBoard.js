import React from 'react';
import './MdTicketBoard1.css';
import { Badge, Button, Card, Col, Container ,Dropdown,Form,Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

    

const MDTicketBoard = () => {
    let {projectName}= useParams();
    const currentDate = new Date();
  
    const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      };
    
      // Format the date using toLocaleDateString()
      const formattedDate = currentDate.toLocaleDateString('en-IN', options);

    // let name ;
    // if(projectName.length>7){
    //     return name = projectName.slice(0,15)+'...' 
    // }
  return (
    <div className='mdheader'>
        <Container>
            <Row>
                <Col md={2} className='bg-primary text-white'>
           
                    <Row style={{ height: '300px', overflowY: 'scroll' }}>
                    {/* <h4>{name}</h4> */}
                    <h4>{projectName.slice(0,12) + '...'}</h4>
                    <h5>Planning</h5>
                     <ul>
                        
                        <li>
                        <Dropdown>
                             <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                             CS-LOS-Mobile...
                              </Dropdown.Toggle>
                            <Dropdown.Menu>
                                 <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                                 <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                                 <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                            </Dropdown.Menu>
                         </Dropdown>
                        </li>
                        <li>Goals
                        
                        </li>
                        <li>Issues</li>
                        <li>Components</li>
                     </ul>
                     <h5>Development</h5>
                     <ul>
                        <li>Code</li>
                        <li>Releases</li>
                     </ul>
                    </Row>
                    <Row>
                        
                    </Row>
                    
                </Col>
                <Col md={10} className='bg-secondary text-white'>
                    <Row className='bg-warning'>Path</Row>
                    <Row className='bg-success'>Header</Row>
                    <Row className='bg-warning'>DropDowns</Row>
                    <Row style={{ height: '450px',borderRadius:'20px' }}>
                        <Col md={3} style={{borderRadius:'7px'}} className='bg-danger'>To Do {}

                         <Card style={{ width: '17rem' }}>
                           
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Badge bg="info">P13 Mobile</Badge>
                              <br/>
                              <br/>
                             <p>{formattedDate}</p>
                              <Card.Text>
                            <Form style={{display:'flex',  justifyContent:'space-between'}}>
                              <Form.Check // prettier-ignore
                                  type={'checkbox'}
                              
                                  label={'CSML-885'}
                                 />
                                  <i class="bi bi-person-circle"></i>
                             </Form>
                              </Card.Text>
                           
                           </Card.Body>
                          </Card>

                          <Card style={{ width: '17rem' }}>
                           
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Badge bg="info">P13 Mobile</Badge>
                              <br/>
                              <br/>
                             <p>{formattedDate}</p>
                              <Card.Text>
                            <Form style={{display:'flex',  justifyContent:'space-between'}}>
                              <Form.Check // prettier-ignore
                                  type={'checkbox'}
                              
                                  label={'CSML-885'}
                                 />
                                  <i class="bi bi-person-circle"></i>
                             </Form>
                              </Card.Text>
                           
                           </Card.Body>
                          </Card>
                        </Col>
                        <Col md={3} className='bg-info'>Card 1
                        
                        <Card style={{ width: '17rem' }}>
                           
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Badge bg="info">P13 Mobile</Badge>
                              <br/>
                              <br/>
                             <p>{formattedDate}</p>
                              <Card.Text>
                            <Form style={{display:'flex',  justifyContent:'space-between'}}>
                              <Form.Check // prettier-ignore
                                  type={'checkbox'}
                              
                                  label={'CSML-885'}
                                 />
                                  <i class="bi bi-person-circle"></i>
                             </Form>
                              </Card.Text>
                           
                           </Card.Body>
                          </Card></Col>
                        <Col md={3} className='bg-danger'>Card 1</Col>
                        <Col md={3} className='bg-info'>Card 1</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MDTicketBoard