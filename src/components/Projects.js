import React from 'react'
import { Form, FormControl, Table } from 'react-bootstrap';
import './Projects.css';
import pngEgg from "../assets/pngegg.png"
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
       <h4 style={{color:'white',marginLeft:"4px"}}>Projects</h4>
       <div className='category-boxes'>
     
        <FormControl
          size="sm"
          type="search"
          style={{ width: "200px" }}
         placeholder='Search Projects '
        />
      
      <Form.Select size="sm" style={{ width: "200px" ,marginLeft:"8px",padding:"2px"}}>
        <option>Choose Jira Products</option>
        <option>Hi Jira</option>
        <option>Hello Jira</option>
      </Form.Select>
    
      <Form.Select size="sm" style={{ width: "200px" ,marginLeft:"8px"}}>
        <option>All categories</option>
        <option>Category 1</option>
        <option>Category 2</option>
      </Form.Select>
  
    
    </div>
    <div>
    <Table striped="columns" borderless='true'>
      <thead>
        <tr style={{borderBottom:'lightgray 1px solid'}}>
          <th><i class="bi bi-star-fill"></i></th>
          <th>Name <i class="bi bi-arrow-down"></i></th>
          <th>Key</th>
          <th>Type</th>
          <th>Lead</th>
          <th>Category</th>
          <th>More Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}><i class="bi bi-star-fill" style={{color:"gold"}}></i></td>
          <td rowSpan={2}><span><img src={pngEgg} alt='img_pngEgg' style={{width:"35px",height:'35px',border:'green 1px solid', borderRadius:"5px"}}/></span> 
          <Link style={{textDecoration:'none',color:'inherit'}} to={'/projects/Crafts Silicon MSME LOS'}> Crafts Silicon MSME LOS</Link></td>
          <td rowSpan={2}>CSML</td>
          <td rowSpan={2} >Company-managed software</td>
          <td >Ashok Kodityala</td>
        
          <td rowSpan={2}></td>
          <td rowSpan={2}></td>
        
        </tr>

        <tr>
   
          <td>Ashok Kodityala</td>
       
        </tr>

        <tr>
          <td rowSpan={2}><i class="bi bi-star-fill" style={{color:"gold"}}></i></td>
          <td rowSpan={2}><span><img src={pngEgg} alt='img_pngEgg' style={{width:"35px",height:'35px',border:'green 1px solid', borderRadius:"5px"}}/></span>
          <Link style={{textDecoration:'none',color:'inherit'}} to='/projects/Crafts Silicon MSME LOS Silicon UAT'>  Crafts Silicon MSME LOS Silicon UAT</Link></td>
          <td rowSpan={2}>CSMLU</td>
          <td rowSpan={2} >Company-managed software</td>
          <td >Joel Thomas</td>
        
          <td rowSpan={2}></td>
          <td rowSpan={2}></td>
        
        </tr>

        <tr>
   
          <td>B Mahesh</td>
       
        </tr>
        <tr>
          <td rowSpan={2}><i class="bi bi-star-fill" style={{color:"gold"}}></i></td>
          <td rowSpan={2}><span><img src={pngEgg} alt='img_pngEgg' style={{width:"35px",height:'35px',border:'green 1px solid', borderRadius:"5px"}}/></span>  
          <Link style={{textDecoration:'none',color:'inherit'}} to='/projects/Holidays and Leaves'>  Holidays and Leaves</Link></td>          
          <td rowSpan={2}>HL</td>
          <td rowSpan={2} >Company-managed Business</td>
          <td >Joel Thomas</td>
        
          <td rowSpan={2}></td>
          <td rowSpan={2}></td>
        
        </tr>

        <tr>
   
          <td>B Mahesh</td>
       
        </tr>

        <tr>
          <td rowSpan={2}><i class="bi bi-star-fill" style={{color:"beige"}}></i></td>
          <td rowSpan={2}><span><img src={pngEgg} alt='img_pngEgg' style={{width:"35px",height:'35px',border:'green 1px solid', borderRadius:"5px"}}/></span> 
          <Link style={{textDecoration:'none',color:'inherit'}} to='/projects/ Pre Sales RFP'> Pre Sales RFP</Link></td>
          <td rowSpan={2}>PR</td>
          <td rowSpan={2} >Team-managed Business</td>
          <td >Ryan Mohammad</td>
        
          <td rowSpan={2}></td>
          <td rowSpan={2}></td>
        
        </tr>

        <tr>
   
          <td>Ashok Kodityala</td>
       
        </tr>

        <tr>
          <td rowSpan={2}><i class="bi bi-star-fill" style={{color:"beige"}}></i></td>
          <td rowSpan={2}><span><img src={pngEgg} alt='img_pngEgg' style={{width:"35px",height:'35px',border:'green 1px solid', borderRadius:"5px"}}/></span>  
          <Link style={{textDecoration:'none',color:'inherit'}} to='/projects/T & M Recruitments'> T&M Recruitments</Link></td>
 
          <td rowSpan={2}>TR</td>
          <td rowSpan={2} >Team-managed Business</td>
          <td >Ambreen Aashan</td>
        
          <td rowSpan={2}></td>
          <td rowSpan={2}></td>
        
        </tr>

        <tr>
   
          <td>Ashok Kodityala</td>
       
        </tr>
        
        
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Projects