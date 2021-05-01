import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID obQObIm8rUL_yG1FYUQZB2ghCSrw1uz8SZ5sOlY-vYg'
    }
});