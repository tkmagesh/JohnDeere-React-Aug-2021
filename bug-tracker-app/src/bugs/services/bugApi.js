import axios from 'axios'

const serviceEndpoint = 'http://localhost:3030/bugs';

async function getAll(){
    const response = await axios.get(serviceEndpoint)
    return response.data
}

async function getById(id){
    const response = await axios.get(`${serviceEndpoint}/${id}`)
    return response.data
}

async function save(bugData){
    if (bugData.id === 0 ){
        const response = await axios.post(serviceEndpoint, bugData)
        return response.data
    } else {
        const response = await axios.put(`${serviceEndpoint}/${bugData.id}`, bugData)
        return response.data
    }
}

async function remove(bugData){
    const response = await axios.delete(`${serviceEndpoint}/${bugData.id}`)
    return response.data
}

const bugApi = { getAll, getById, save, remove }

export default bugApi;