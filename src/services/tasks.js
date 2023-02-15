import axios from "axios"
const config = {
    headers: { Authorization: process.env.API_TOKEN }
};

const postConfig = {
    headers: {
        Authorization: process.env.API_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};


function getTasks() {
    return axios.get(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks`, config)
}

function getTask(id) {
    return axios.get(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`, config)
}

function postTask(task) {
    return axios.post(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks`, task, postConfig)
}

function editTask(id) {
    return axios.put(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`, config)
}

function deleteTask(id) {
    return axios.delete(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`, config)
}

export { getTask, getTasks, postTask, editTask, deleteTask }