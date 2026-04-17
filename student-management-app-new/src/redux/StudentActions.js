import api from "../api/StudentApi"

export const getAllStudents=()=>{
    return async(dispatch)=>{
        dispatch({
            type:"Loading"
        })
        try{
            const response=await api.get("/");
            dispatch({
                type:"GetAllStudents",
                payload:response.data
            })
        }

        catch(error){
            dispatch({
                type:"Error",
                payload:error.message
            })
        }
    }
}

export const getStudentById=(id)=>{
    return async(dispatch)=>{
        dispatch({
            type:"Loading"
        })
        try {
            const response=api.get(`/${id}`)
            dispatch({
                type:"GetStudentById",
                payload:response.data
            })
        }
        catch(error) {
            dispatch({
                type:"Error",
                payload:error.message
            })
        }
    }
}

export const addStudent =(student) => {
    return async (dispatch) => {
        dispatch({type:"Loading"})
        try {
            const res = await api.post("/",student)
            dispatch({
                type:"AddStudent",
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:"Error",
                payload:error.message
            })
           
        }
    }
}