import React from 'react';
import Photo from './Photo';
import Comment from './Comments';


const Single = React.createClass({

    render() {
        const postID = this.props.params.postid;
        const post = this.props.posts.filter((post) => {
            if (post.code == postID)
                return post;
        });

        const comments = this.props.comments[postID] || [];

        return (
            <div className="single-photo">
                <Photo post={post[0]} index="1" />
                <Comment comment={comments} {...this.props} />
            </div>
        )
    }


});


export default Single;