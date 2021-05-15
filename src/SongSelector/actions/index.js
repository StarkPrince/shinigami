//Action Creator

export const selectSong = song =>
{
    //Return a section
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}