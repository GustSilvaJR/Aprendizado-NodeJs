import { Card } from "./bodyValuesStyle"

export function BodyValues() {
    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-around">
                    <div className="col-sm-5">
                        <Card className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </Card>
                    </div>
                    <div className="col-sm-5">
                        <Card className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="mt-sm-5 row">
                <div className="d-flex justify-content-around">
                    <div className="col-sm-5">
                        <Card className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </Card>
                    </div>
                    <div className="col-sm-5">
                        <Card className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
};