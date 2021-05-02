import axios from "axios"
const KEY = 'AIzaSyDLXGoELUF8Omi9Q2wtAONvvN4S8gfkcL0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})