import axios from "axios"

const api=axios.create({
    baseURL:"https://super-eureka-5g6657pq96gx347jp-8082.app.github.dev/students"
})
export default api;