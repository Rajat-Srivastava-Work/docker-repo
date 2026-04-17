import { useState } from "react";
import { useSelector } from "react-redux";
import { addStudent } from "../redux/studentActions";

export default function AddStudent() {
    const loading=useSelector(state=>state.loading);
    const error=useSelector(state=>state.error);

    const [student, setStudent] = useState({
        sname:"",
        course:""
    })

    const handleChange = (e)=>{
        setStudent({...student, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatchEvent(addStudent(student));
        setStudent({
            sname:"",
            course:""
        })
    }

    return(<>
    <div>
        <h1>Add Student</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="sname" className="form-label">Name</label>
                <input type="text" className="form-control" name="sname" value={student.sname}/>
            </div>
            <div>
                <label htmlFor="course" className="form-label">Course</label>
                <input type="text" className="form-control" name="course" value={student.course}/>
            </div>

            <button className="btn btn-primary">Add</button>
        </form>

        {loading && <h3>Loading...</h3>}
        {error && <h3>Error...</h3>}
        <Link to="/">Home</Link>
    </div>
    </>)
}