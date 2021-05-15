import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

export class SongList extends Component
{
    renderList = () => this.props.songs.map(song => <div className="item" key={song.title}>
        <div className="right floated content">
            <button className="ui button primary"
                onClick={() => this.props.selectSong(song)}>
                Select
            </button>
        </div>
        <div className="content">{song.title}</div>
    </div>)
    render()
    {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ songs: state.songs })

export default connect(mapStateToProps, { selectSong })(SongList)
