import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) =>
{
    return song ? <div>
        <h3>Details for:</h3>
        <h2>Title: {song.title}<br />
            Duration: {song.duration}
        </h2></div> : <div>Select a song</div>
}

const mapStateToProps = state => ({ song: state.selectedSong })


export default connect(mapStateToProps)(SongDetail)