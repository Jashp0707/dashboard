import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './navbar';
// import Footer from './footer';
import Sidebar from './sidebar';
import { Offline, Online } from "react-detect-offline";
import {ReactSession} from 'react-client-session';

export default function EmployeeList() {
    // return (
    //     <>
    // <Online>
    // <div className='page-container'>
    //             <div className="left-content">
    //                 <div className="mother-grid-inner">
    //                     <Navbar />
    //                     <div className="inner-block">
    //                         {/*market updates updates*/}
    //                         <div className="market-updates" id='cards'>

    //                             <Tab />
    //                             <div className="clearfix"> </div>
    //                         </div>
    //                         {/*main page chart layer2*/}
    //                         <div className="clearfix"> </div>
    //                     </div>
    //                     {/*climate end here*/}
    //                     <Footer />
    //                 </div>
    //             </div>

    //         </div>
    //         <Sidebar field='true' />

    // </Online>
    // <Offline>You're offline right now. Check your connection.</Offline>

    //     </>
    // );
    const columns = [{
        dataField: 'detail_id',
        text: 'Employee Id'
    }, {
        dataField: 'login_id',
        text: 'Login Id'
    }, {
        dataField: 'name',
        text: 'Name'
    }, {
        dataField: 'address',
        text: 'Address'
    }, {
        dataField: 'city',
        text: 'address'
    }, {
        dataField: 'state',
        text: 'State'
    }, {
        dataField: 'zip',
        text: 'Zip'
    }, {
        dataField: 'location',
        text: 'Location'
    }];
    const data1 = [];
    const { SearchBar } = Search;
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    // const [data1, setdata1] = useState([]);




    const apiGet = () => {
        fetch('https://internshippro.000webhostapp.com/detail.php')
            .then(res => res.json())
            .then(json => setData(json.smoke));
    }
    useEffect(() => {
        apiGet();
        locationget();
        // const interval = setInterval(() => {
        //     apiGet();
        //     locationget();
        // }, 10000);

        // return () => clearInterval(interval);
    }, []);
    const locationget = () =>{
        fetch('https://internshippro.000webhostapp.com/location.php')
            .then(res => res.json())
            .then(json => setData2(json.smoke));
    }
    data.map(
        (newdata,i) => {
            data2.map(
                (newdata1) =>{
                    if (newdata.login_id == newdata1.login_id) {
                        data1.push(newdata)
                        console.log(newdata.location)
                        console.log(typeof data1[i])
                        data1[i]['location'] = newdata1.location
                    }
                }
            )
            
        }
    )
    let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'

    // console.log(data1)
    return (
        <>
            <Online>
                <div className='page-container'>
                    <div className="left-content">
                        <div className="mother-grid-inner">
                            <Navbar />
                            <div className="inner-block">
                                {/*market updates updates*/}
                                <div className="market-updates" id='cards'>

                                    <Container>
                                        <h3>Table</h3>
                                        <ToolkitProvider
                                            keyField="id"
                                            data={data1}
                                            columns={columns}
                                            search
                                        >
                                            {
                                                props => (
                                                    <div>
                                                        <h3>Input something at below input field:</h3>
                                                        <SearchBar {...props.searchProps} />
                                                        <hr />
                                                        <BootstrapTable
                                                            {...props.baseProps}
                                                            pagination={paginationFactory({ sizePerPage: 10 })}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </ToolkitProvider>
                                    </Container>
                                    <div className="clearfix"> </div>
                                </div>
                                {/*main page chart layer2*/}
                                <div className="clearfix"> </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <Sidebar field={x} />
            </Online>

            <Offline>You're offline right now. Check your connection.</Offline>
        </>
    );
}


// function Tab() {
//     const [data, setData] = useState([])
//     useEffect(
//         () => {
//             fetch(`https://internshippro.000webhostapp.com/detail.php`)
//                 .then(res => res.json())
//                 .then(json => setData(json.smoke))
//         }
//         , data)



//     return (
//         <>
//             <Table striped bordered hover responsive variant="dark">
//                 <thead>
//                     <tr>
//                         <th className='align-middle'>Employee Id</th>
//                         <th className='align-middle'>Login Id</th>
//                         <th className='align-middle'>Name</th>
//                         <th className='align-middle'>Photo</th>
//                         <th className='align-middle'>Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map(
//                             (newdata) => {
//                                 return (
//                                     <Employeedata value={newdata} />
//                                 )
//                             }
//                         )
//                     }

//                 </tbody>
//             </Table>
//         </>
//     )
// }

// function Employeedata(props) {
//     console.log(props.value.name[0])
//     let image1 = {
//         'a': require('../images/a.png'),
//         'b': require('../images/b.png'),
//         'c': require('../images/c.png'),
//         'd': require('../images/d.png'),
//         'e': require('../images/e.png'),
//         'f': require('../images/f.png'),
//         'g': require('../images/g.png'),
//         'h': require('../images/h.png'),
//         'i': require('../images/i.png'),
//         'j': require('../images/j.png'),
//         'k': require('../images/k.png'),
//         'l': require('../images/l.png'),
//         'm': require('../images/m.png'),
//         'n': require('../images/n.png'),
//         'o': require('../images/0.png'),
//         'p': require('../images/p.png'),
//         'q': require('../images/q.png'),
//         'r': require('../images/r.png'),
//         's': require('../images/s.png'),
//         't': require('../images/t.png'),
//         'u': require('../images/u.png'),
//         'v': require('../images/v.png'),
//         'w': require('../images/w.png'),
//         'x': require('../images/x.png'),
//         'y': require('../images/y.png'),
//         'z': require('../images/z.png')
//     }
//     let image2 = image1[props.value.name[0].toLowerCase()]
//     let address = `${props.value.address}, ${props.value.city}, ${props.value.state} - ${props.value.zip}`



//     return (
//         <tr>
//             <td className='align-middle'><p className='text-center'>{props.value.detail_id}</p></td>
//             <td className='align-middle'><p className='text-center'>{props.value.login_id}</p></td>
//             <td className='align-middle'><p className='text-center'>{props.value.name}</p></td>
//             <td className='align-middle'><img className='img-responsive center-block' src={image2} style={{ width: '150px', height: '150px', borderRadius: '5%' }}></img></td>
//             <td className='align-middle'><p className='text-center'>{address}</p></td>
//         </tr>
//     )
// }