import { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import {ReactSession} from 'react-client-session'
import Table3 from "./table";
// import Table2 from "./table";

export default function Smoke(){
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const arr=[]
    const actual=[]
    useEffect(
        ()=>{
            fetch("https://internshippro.000webhostapp.com/smokesensor.php")
            .then(res=>res.json())
            .then(json=>setData(json.smoke))
            .catch(setError)
        }
    ,data)
    for (let i in data[0]){
        var val=i.replace("_"," ")
        arr.push(val)
        actual.push(i)
    }
    // console.log(data)
    let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'
    // const ClearSession = ()=>{
    //   localStorage.clear();
    //   console.log(ReactSession.get("username"))
    // }

    return(
        <>
      <div className='page-container'>
        <div className="left-content">
          <div className="mother-grid-inner">
            <Navbar />
            <div className="inner-block">
              <Table3 value={data} field={arr} roww={actual}/>
              {/* <Table2 value={data} field={arr} roww={actual} /> */}
              {/* <button onClick={ClearSession} >Clear</button> */}
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