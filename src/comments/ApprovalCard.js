import React from 'react'
import CommentDetails from "./CommentDetails"

const ApprovalCard = () =>
{
    return (
        <div className="ui card">
            <div className="content"><CommentDetails /></div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard
