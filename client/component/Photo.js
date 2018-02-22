import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({


    componentDidUpdate() {
        const likes = this.props.post.likes,
            photoContainer = $('.grid-figure');

        console.log('changed', likes);

        likes < 0 ? $(photoContainer[this.props.index]).css('border-color', 'red') : $(photoContainer[this.props.index]).css('border-color', 'green');

    },

    render() {
        const { post, index } = this.props,
            frameColor = post.like < 0 ? 'red' : 'green';

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} className="grid-photo" />
                    </Link>


                    <strong> &hearts;{post.likes}</strong>
                    <button className="glyphicon glyphicon-thumbs-up" onClick={this.props.AddLikes.bind(null, index)}> </button>
                    <button className="glyphicon glyphicon-thumbs-down" onClick={this.props.Unlike.bind(null, index)}></button>

            <p>
                {post.caption}
                </p>
                </div>

            </figure>

        )
    }
});


export default Photo;