import axios from "axios"
const config = {
    headers: { Authorization: `Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd` }
};

const postConfig = {
    headers: {
        Authorization: `Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd`,
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