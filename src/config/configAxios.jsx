import axios from 'axios'

const configAxios = axios.create({
    baseURL: 'http://10.10.0.28:4000/api-doc/#'
})

export default configAxios;