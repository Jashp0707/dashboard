import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactSession } from 'react-client-session';


import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';


export default function Navbar() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  useEffect(
    () => {
      fetch(`https://internshippro.000webhostapp.com/detail.php`)
        .then(res => res.json())
        .then(json => setData(json.smoke))
        .catch(setError)
    }
    , [])
  let image1 = 'data:image/png;base64, ';
  let name1;
  const login_id = ReactSession.get("login_id");
  // const login_id="2";
 
  data.map(
    (newdata) => {
      if (login_id === newdata.login_id) {
        
        image1 += newdata.display_pic;
        name1 = newdata.name;
      }
    }
  )
  
  let x=(typeof ReactSession.get("login_id")==='undefined') ? null : ReactSession.get("login_id")
  if(x ===null){
    return (
      <div className="header-main">
        <div className="header-left">
          <div className="logo-name">
            <Link to='../home' style={{ textDecoration: 'none' }}>
              <h1>Project</h1>
  
            </Link>
          </div>
  
          <div className="clearfix"> </div>
        </div>
        <div className="header-right">
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                
                <button><Link to='../login' style={{textDecoration:'none'}}>Login</Link></button>
  
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    )
  }
  else{
    return (
      <div className="header-main">
        <div className="header-left">
          <div className="logo-name">
            <Link to='../home' style={{ textDecoration: 'none' }}>
              <h1>Project</h1>
  
            </Link>
          </div>
  
          <div className="clearfix"> </div>
        </div>
        <div className="header-right">
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                <span><img src={image1} alt="" style={{ width: '55px', height: '55px', borderRadius: '50%' }} />{name1}
                  <NavDropdown title="" id="basic-nav-dropdown" className='float-right'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Change Profile Details</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                  </NavDropdown>
                </span>
  
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    )
  }
  
}