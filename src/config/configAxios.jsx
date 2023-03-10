import axios from 'axios'

const configAxios = axios.create({
    baseURL: 'http://10.10.0.30:4000'
})

export default configAxios;