import logoImg from './../assets/header/cloud-fog-fill.svg';

export function Header() {
    return (
        <nav className=" bg-primary navbar navbar-expand-lg">
            <div className="container-fluid">
            
                <a className="navbar-brand ms-md-4" href="#">
                    <img src={logoImg} alt="Chapeu de Chefe"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-md-3">
                        <li className="nav-item">
                        <i className="bi bi-cloud-fog-fill"></i>
                            <a className="btn btn-primary  bg-light text-dark nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};