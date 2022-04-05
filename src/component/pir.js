import { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Table1 from "./table";
import {ReactSession} from 'react-client-session'

export default function Pir(){
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const arr=[]
    const actual=[]
    useEffect(
        ()=>{
            fetch("https://internshippro.000webhostapp.com/pir.php")
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
    let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'

    return(
        <>
      <div className='page-container'>
        <div className="left-content">
          <div className="mother-grid-inner">
            <Navbar />
            <div className="inner-block">
              <Table1 value={data} field={arr} roww={actual} />
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