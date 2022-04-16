import React, {useEffect, useState} from "react";
import MyButton from "./UI/button/MyButton";
import CommenItem from "./CommenItem";
import ComentList from "./ComentList";
import MyInput from "./UI/input/MyInput";
import CommentForm from "./CommentForm";
import axios from "axios";
import PostAPI from "../API/PostAPI";
import Likes from "./Likes";

const PostItem = (props) => {

    const [comments, setComments] = useState([])

    const createComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const removeComment = (comment) => {
        setComments(comments.filter(p => p.id !== comment.id))
    }


    return (
        <div className='post'>
            <div className='postContent'>
                <div className='postInfo'>
                <strong>{props.number}. {props.post.title}</strong>
                    <p style={{margin: '25px 0px 0 0px'}}>{props.post.body}</p>
                </div>
            </div>
            <div>
                <h3>Комментарии:</h3>
                <CommentForm create={createComment}/>
                <ComentList remove={removeComment} comments={comments}/>
            </div>
            <div className='postBtns' style={{display: "flex", justifyContent: "space-between"}}>
                <button className='coommentbtns' style={{textDecoration: 'underline', color: "rgba(255, 255, 255, 0.44)", margin: '10px 0px 10px 0px'}} onClick = {() => props.remove(props.post)}>Удалить</button>
                <Likes></Likes>
            </div>

        </div>
    )
}

export default PostItem;