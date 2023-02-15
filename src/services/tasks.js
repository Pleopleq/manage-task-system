import axios from "axios"
const config = {
    headers: { Authorization: process.env.API_TOKEN }
};

function getTasks() {
    return axios.get(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks`, config)
}

function getTask(id) {
    return axios.get(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`, config)
}

function postTask(task) {
    return axios.post(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks`, task, config)
}

function editTask(id) {
    return axios.put(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`, config)
}

function deteleTask(id) {
    return axios.delete(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`, config)
}

export { getTask, getTasks, postTask, editTask, deteleTask }