import React from 'react';

const Comments = React.createClass({

    CommentInstance(comment, index) {

        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    <text>{comment.text}</text>
                    <button className="remove-comment" onClick={this.props.removeComments.bind(null, index, this.props.params.postid)}>&times;</button>
                </p>
            </div>
        )

    },
    handleSubmit(e) {
        e.preventDefault();

        const author = this.refs.author.value,
            text = this.refs.comment.value;

        this.props.addComments(author, text, this.props.params.postid);

    },

    render() {
        return (
            <div>
                {this.props.comment.map(this.CommentInstance)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
});

export default Comments;