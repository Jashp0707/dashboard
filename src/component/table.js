import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Table1(props) {

    var len = props.field;
    len = len.length;
    console.log(len)
    if (len == 4) {
        return (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {
                                props.field.map(
                                    (newdata, i) => {
                                        return (
                                            <th key={i}>{newdata}</th>
                                        )
                                    }
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.value.map(
                                (newdata, i) => {
                                    return (
                                        <tr key={i}>

                                            <td>{
                                                newdata[props.roww[0]]
                                            }</td>
                                            <td>{newdata[props.roww[1]]}</td>
                                            <td>{newdata[props.roww[2]]}</td>
                                            <td>{newdata[props.roww[3]]}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </>

        )
    }
    else {
        return (
            <>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            {
                                props.field.map(
                                    (newdata, i) => {
                                        return (
                                            <th key={i}>{newdata}</th>
                                        )
                                    }
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.value.map(
                                (newdata, i) => {
                                    return (
                                        <tr key={i}>

                                            <td>{
                                                newdata[props.roww[0]]
                                            }</td>
                                            <td>{newdata[props.roww[1]]}</td>
                                            <td>{newdata[props.roww[2]]}</td>
                                            <td>{newdata[props.roww[3]]}</td>
                                            <td>{newdata[props.roww[4]]}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}

