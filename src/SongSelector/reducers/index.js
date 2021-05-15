import { combineReducers } from 'redux'

const songReducer = () =>
{
    return [
        { title: 'No scrubs', duration: '4:30' },
        { title: 'Macarena', duration: '3:57' },
        { title: 'All star', duration: '3:15' },
        { title: 'I want it That way', duration: '4:13' }]
}

const selectedSongReducer = (selectedSong = null, action) =>
{
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})