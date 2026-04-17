import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="container-fluid">
            <div className="row bg-bg-primary text-light">
                <h1>Student Management App</h1>
            </div>
            <div className="row">
                <div className="card border-0 mt-4 d-flex flex-row gap-2 align-items-center justify-content-center py-4">
                    <Link to={"/students"} className="btn btn-success">View All Students</Link>
                    <br></br>
                    <Link to={"/add"} className="btn btn-warning"></Link>
                </div>
            </div>
        </div>
    )
}