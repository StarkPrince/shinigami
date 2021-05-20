import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'


const clientId = "85160160328-reivnuaq2nc2pmqm3t9mcel8m9q6lddq.apps.googleusercontent.com"
export class GoogleAuth extends Component
{
    componentDidMount()
    {
        window.gapi.load('client:auth2', () =>
        {
            window.gapi.client.init({
                clientId: clientId,
                scope: 'email'
            }).then(() =>
            {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) =>
    {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else {
            this.props.signOut(this.auth.currentUser.get().getId());
        }
    }

    onSignInClick = () => this.auth.signIn()

    onSignOutClick = () => this.auth.signOut()

    renderAuth = () => (this.props.isSignedIn ?
        <button className="ui red google button" onClick={this.onSignOutClick}>
            <i className="google icon" />Sign Out
            </button>
        : <button className="ui green google button" onClick={this.onSignInClick}>
            <i className="google icon" />
                Log in
            </button>)
    render()
    {

        return (
            <>
                <div className="item">
                    {this.renderAuth()}
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>
{
    return { isSignedIn: state.auth.isSignedIn, userId: state.userId }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)