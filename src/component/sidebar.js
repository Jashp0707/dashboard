import { Link } from "react-router-dom";

export default function Sidebar(props) {
  if(props.field==='true'){
    return (
      <div className="sidebar-menu">
        
        <div className="menu">
          <ul id="menu">
            <li id="menu-home"><Link to='../home' style={{textDecoration:'none'}}><i className="fa fa-tachometer" /><span>Dashboard</span></Link>
            </li>
            <li><a href="#" style={{textDecoration:'none'}}><i class="glyphicon glyphicon-plus" style={{color:'white'}}></i><span>Employee</span><span className="fa fa-angle-right" style={{ float: 'right' }} /></a>
              <ul>
              <li><Link to='../add_employee' style={{textDecoration:'none'}}>Add Employee</Link></li>
                <li><Link to='../employee_list' style={{textDecoration:'none'}}>Employee List</Link></li>
              </ul>
            </li>
            <li id="menu-comunicacao"><a href="#" style={{textDecoration:'none'}}><i className="fa fa-book nav_icon" /><span>Element</span><span className="fa fa-angle-right" style={{ float: 'right' }} /></a>
              <ul id="menu-comunicacao-sub">
                <li id="menu-mensagens" style={{ width: '200px' }}><Link to='../smoke' style={{textDecoration:'none'}}>Smoke Sensor</Link>
                </li>
                <li id="menu-mensagens" style={{ width: '200px' }}><Link to='../flame' style={{textDecoration:'none'}}>Flame Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../ir' style={{textDecoration:'none'}}>IR Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../ldr' style={{textDecoration:'none'}}>LDR Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../pir' style={{textDecoration:'none'}}>PIR Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../soil' style={{textDecoration:'none'}}>Soil-Moisture Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../temp' style={{textDecoration:'none'}}>Temperature Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../ultrasonic' style={{textDecoration:'none'}}>Ultrasonic Sensor</Link>
                </li>
              </ul>
            </li>
           
           
            
          </ul>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="sidebar-menu">
        
        <div className="menu">
          <ul id="menu">
            <li id="menu-home"><Link to='../home' style={{textDecoration:'none'}}><i className="fa fa-tachometer" /><span>Dashboard</span></Link>
            </li>
            <li><a href="#" style={{textDecoration:'none'}}><i class="glyphicon glyphicon-plus" style={{color:'white'}}></i><span>Employee</span><span className="fa fa-angle-right" style={{ float: 'right' }} /></a>
              <ul>
              <li><Link to='../add_employee' style={{textDecoration:'none',pointerEvents: 'none'}} >Add Employee</Link></li>
                <li><Link to='../employee_list' style={{textDecoration:'none',pointerEvents: 'none'}}>Employee List</Link></li>
              </ul>
            </li>
            <li id="menu-comunicacao"><a href="#" style={{textDecoration:'none'}}><i className="fa fa-book nav_icon" /><span>Element</span><span className="fa fa-angle-right" style={{ float: 'right' }} /></a>
              <ul id="menu-comunicacao-sub">
                <li id="menu-mensagens" style={{ width: '200px' }}><Link to='../smoke' style={{textDecoration:'none'}}>Smoke Sensor</Link>
                </li>
                <li id="menu-mensagens" style={{ width: '200px' }}><Link to='../flame' style={{textDecoration:'none'}}>Flame Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../ir' style={{textDecoration:'none'}}>IR Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../ldr' style={{textDecoration:'none'}}>LDR Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../pir' style={{textDecoration:'none'}}>PIR Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../soil' style={{textDecoration:'none'}}>Soil-Moisture Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../temp' style={{textDecoration:'none'}}>Temperature Sensor</Link>
                </li><li id="menu-mensagens" style={{ width: '200px' }}><Link to='../ultrasonic' style={{textDecoration:'none'}}>Ultrasonic Sensor</Link>
                </li>
              </ul>
            </li>
           
           
            
          </ul>
        </div>
      </div>
    )
  }
  
}