import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPosts = () => async dispatch =>
{
    const response = await jsonPlaceHolder.get('/posts')

    console.log(response)

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}