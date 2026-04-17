import { Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";

export function ApiRoutes(){
    return(<>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/students" element={<StudentList></StudentList>}></Route>
        <Route path="/students/:id" element={<StudentDetails></StudentDetails>}></Route>
        <Route path="/add" element={<AddStudent></AddStudent>}></Route>
    </Routes>
    </>)
}