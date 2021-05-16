import jsonplaceholder from '../apis/jsonPlaceHolder'

export const fetchPosts = () =>
{
    const response = jsonplaceholder.get('/posts')
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
    return null
}