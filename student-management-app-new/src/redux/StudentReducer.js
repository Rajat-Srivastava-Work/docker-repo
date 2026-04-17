const initialState={
    students:[],
    student:null,
    loading:false,
    error:""
}

function StudentReducer(state=initialState,action){
    switch(action.type){
        case "GetStudentById":
            return{
                ...state,
                loading:true,
                student:action.payload,
                error:""
            }
        case "GetAllStudents":
            return{
                ...state,
                loading:false,
                students:action.payload,
                error:""
            }
        case "AddStudent":
            return{
                ...state,
                students:[...state.students,action.payload],
                loading:false,
                error:true

            }
        case "Error":
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case "loading":
            return{
                ...state,
                laoding:true
            }
        default:
            return state
    }
}

export default StudentReducer