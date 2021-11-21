import React from "react";
import './App/App.css';


const Post = ({ author, content, image, date }) => {

    return (
        <div className='wrapper'>
            <div className='header'>
                <img className='icon' src={author.photo}></img>
                <div className='column'>
                    <div className='nickname'>
                        <p className='style'>{author.name}</p>
                        <span>{author.nickname}&shy; &#183; &shy;{date}</span>
                    </div>
                    <div>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
            <div >
                <img className='content' src={image}></img>
            </div>
        </div>
    )
}

export default Post;