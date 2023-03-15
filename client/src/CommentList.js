import React from 'react';

export const CommentList = ({ comments }) => {

    const renderedComments = comments.map(comment => {
        let content;

        if ( comment.status === 'approved') {
            content = comment.content;
        }

        if ( comment.status === 'pending') {
            content = "This comment is awaiting moderation."
        }

        if ( comment.status === 'rejected') {
            content = 'This comment has been rejected'
        }

        return (
            <li key={comment.id} className='list-group-item'>
                {content}
            </li>
        )
    })
    
  return (
    <ul className='list-group' style={{marginTop: '14px'}}>
        {renderedComments}
    </ul>
  )
}
