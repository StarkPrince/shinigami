const axios = require('axios')

export const fetchPosts = () => async dispatch =>
{
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/posts')

    // console.log(response)

    // dispatch({ type: 'FETCH_POSTS', payload: response.data })

    // const response = axios.get('https://jsonplaceholder.typicode.com/posts/posts')
    //     .then(res =>
    //     {
    //         console.log(res);
    //         dispatch({ type: 'FETCH_POSTS', payload: res.data })
    //     })
    //     .catch(err => console.log(err))
    console.log('hmm')
    const response = axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => console.log(res))
        .catch(err => console.log(err))

}