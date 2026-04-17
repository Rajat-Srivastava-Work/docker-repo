import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/studentActions";
import { Link } from "react-router-dom";

export default function StudentList(){
    const dispatch=useDispatch();
    const loading=useSelector(state=>state.loading);
    const error=useSelector(state=>state.error);
    const students=useSelector(state=>state.students);

    useEffect(()=>{
        dispatch(getAllStudents());
    },[dispatch])

    if(loading) return <h3>Loading...</h3>

    if(error) return <h3>{error}</h3>

    return(
        <div>
            <h1>Students List</h1>
            {students.length==0?<h3>No Students</h3>:
            (
                <ul>
                    {students.map((s)=>{
                        <li key={s.id}>
                            {s.sname} -- {s.course} --- <Link to={`/students/${s.id}`} className="bt btn-success">Info</Link>
                        </li>
                    })}
                </ul>
            )}
            <Link to="/">Home</Link>
        </div>
    )
}