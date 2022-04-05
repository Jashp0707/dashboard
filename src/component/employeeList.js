import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';
export default function EmployeeList(){
    return (
        <>

            <div className='page-container'>
                <div className="left-content">
                    <div className="mother-grid-inner">
                        <Navbar />
                        <div className="inner-block">
                            {/*market updates updates*/}
                            <div className="market-updates" id='cards'>

                                <Tab />
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
            <Sidebar field='true' />

        </>
    );
}

function Tab() {
    const [data, setData] = useState([])
    useEffect(
        () => {
            fetch(`https://internshippro.000webhostapp.com/detail.php`)
                .then(res => res.json())
                .then(json => setData(json.smoke))
        }
        , data)



    return (
        <>
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>
                        <th  className='align-middle'>Employee Id</th>
                        <th  className='align-middle'>Login Id</th>
                        <th  className='align-middle'>Name</th>
                        <th  className='align-middle'>Photo</th>
                        <th  className='align-middle'>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (newdata) => {
                                return (
                                    <Employeedata value={newdata} />
                                )
                            }
                        )
                    }

                </tbody>
            </Table>
        </>
    )
}

function Employeedata(props) {
    let image1='data:image/png;base64, ';
    image1+=props.value.display_pic
    return (
        <tr>
            <td className='align-middle'><p className='text-center'>{props.value.detail_id}</p></td>
            <td className='align-middle'><p className='text-center'>{props.value.login_id}</p></td>
            <td className='align-middle'><p className='text-center'>{props.value.name}</p></td>
            <td className='align-middle'><img className='img-responsive center-block' src={image1} style={{width: '150px', height: '150px', borderRadius: '5%'}}></img></td>
            <td className='align-middle'><p className='text-center'>{props.value.address}</p></td>
        </tr>
    )
}