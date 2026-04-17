import axios from "axios"

const api=axios.create({
    baseURL:"http://loacalhost:8080/students"
})
export default api;