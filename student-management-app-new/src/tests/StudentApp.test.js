const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");
const api =require("../api/StudentApi.js");
const getAllStudents = require("../redux/StudentActions.js");
import StudentReducer from "../redux/StudentReducer.js"

jest.mock("../api/StudentApi.js",()=>(
    {
        _esmodule:true,
        default:{
            get:jest.fn(),
            post:jest.fn()
        }
    }
    
))

describe('Integration Test for Student Actions with middleware Thunk using jest',()=>{
    let store;

    beforeEach(()=>{
        store=createStore(StudentReducer ,applyMiddleware(thunk))
        jest.clearAllMocks()
    })

    test('getAllStudents',()=>{
        const students=[
            {id:1,sname:'Rajat',course:'Java'},
            {id:2,sname:'Deepansh',course:'Javascript'},
            {id:3,sname:'Yash',course:'Python'}
        ]
        api.get.mockResolvedValue({data:students})
        store.dispatch(getAllStudents)
        const state=store.getState()

        expect(api.get).toHaveBeenCalledTimes(1);
        expect(state.students).toEqual(students);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("");
    })

    test('getAllStudents should not update store',async()=>{
        api.get.mockRejectedValue(new Error("api failed"))
        await store.dispatch(getAllStudents)
        const state=store.getState()
        expect(api.get).toHaveBeenCalledTimes(1)
        expect(state.students).toEqual([])
        expect(state.error).toBe('api failed')
        expect(state.loading).toBe(false)
    })

    
})