import axios from 'axios'

const KEY = "AIzaSyCfS3uno4_qN0gIiauJfJZxgydwRnbxAkA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        key: KEY
    }
});