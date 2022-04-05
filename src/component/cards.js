export default function Card() {
    const sensor = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {
                sensor.map(
                    (newdata,i) => {
                        return (

                            <Inner key={i} />
                        );
                    }
                )
            }
        </>
    )

}

function Inner() {
    return (
        <div className="col-md-4 market-update-gd" style={{marginBottom: '10px'}}>
            <div className="market-update-block clr-block-1">
                <div className="col-md-8 market-update-left">
                    <h3>83</h3>
                    <h4>Registered User</h4>
                    <p>Other hand, we denounce</p>
                </div>
                <div className="col-md-4 market-update-right">
                    <i className="fa fa-file-text-o"> </i>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    )
}