
import './App.css';
import Navbar from './component/navbar';
import './css/style.css'
import './css/bootstrap.css'
import './css/examples.css'
import './css/font-awesome.css'
import './css/hover.css'
import Sidebar from './component/sidebar';
import Footer from './component/footer';
import Card from './component/cards';
import Login from './component/login';
import React from 'react';
import { ReactSession } from 'react-client-session'


function App() {

}

export function Home() {
  let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'

  return (
    <>
      <div className='page-container'>
        <div className="left-content">
          <div className="mother-grid-inner">
            <Navbar />
            {/* <Login /> */}
            <div className="inner-block">
              {/*market updates updates*/}
              <div className="market-updates" id='cards'>
                <Card />

                <div className="clearfix"> </div>
              </div>
              {/*main page chart layer2*/}
              <div className="clearfix"> </div>
            </div>
            {/*climate end here*/}
            <Footer />
          </div>
        </div>

      </div>
      <Sidebar field={x} />

    </>
  )



}

export default App;
