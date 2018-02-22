import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({

    handleSubmit(e) {
        e.preventDefault();
        this.props.filterPost(this.refs.filter.value);
    },

    render() {
        return (
            <div className="container">
                {/* <form ref="commentForm" onSubmit={this.handleSubmit}> */}
                <input className="textbox" type="text" ref="filter" onChange={this.handleSubmit} />
                {/* <button type="submit" hidden /> */}
                {/* </form> */}
                <div className="photo-grid">

                    {this.props.posts.map((post, index) => {
                        return (

                            <Photo {...this.props} post={post} key={index} index={index} />

                        )
                    })}
                </div>
            </div>
        )
    }
});


export default PhotoGrid;