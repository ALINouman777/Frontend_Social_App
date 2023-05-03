import React, { useState } from "react";
import "./Comment.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {AsynComment, AsynViewComment,AsynDeleteComment} from "../../../Redux/AsyncSlice/Allpost"

const Comment = ({setshowcomment,ownerkey,owner}) => {
  let commentelem;

  const dispatch= useDispatch()
  const[Comment,setcomment]=useState("")


  const {comment}=useSelector((state)=>state.post)
    function handClick(){
      dispatch(AsynComment({ id: ownerkey, comment: Comment })).then(()=>{
        setcomment("");
        dispatch(AsynViewComment(ownerkey ))
      }).catch((err)=>{
        alert("Some error occured")
      });
}

const handleDelete=(userid,commentid)=>{

  dispatch(AsynDeleteComment({id:ownerkey,commentId:commentid})).then(()=>{
    dispatch(AsynViewComment(ownerkey ))
  })
}

    if(comment.comment ){
      
      commentelem=comment.comment.comments.map((elem)=>{

       return <div key={elem._id} 
       
       className="childComment">
            <div className="commentby">
              <img src="https://cdn.vox-cdn.com/thumbor/s2Cq0V8UZbON-AZwjE7CUWYC8cg=/0x0:1710x855/920x613/filters:focal(1003x164:1275x436):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66571208/castlevania_top_4_Cropped.0.jpg" alt="user" />
              <Link to={`/User/${elem.user._id}`}>
              <h6>{elem.user.name}</h6>
              </Link>
            </div>
            <p>{elem.comment}
            <span>

              {elem.user._id===owner && <i
              onClick={()=>handleDelete(elem.user._id,elem._id)}
             className="fa fa-trash trash" aria-hidden="true"></i>}
             </span>
            </p>
          </div>
      })
    }

  return (
    <div className="CommentPcon">
      <div className="CommentBox">
        <div className="closebtn">
          <i className="fa fa-window-close" aria-hidden="true"
          onClick={()=>setshowcomment(false)}
          ></i>
        </div>

        <div className="CommentCcon">
          <input
            type="text"
            name="comment"
            id="comment"
            value={Comment}
            onChange={(e)=>setcomment(e.target.value)}
            placeholder="Add a comment"
          />

          <button disabled={false}
          onClick={handClick}>Comment</button>
        </div>

        <div className="Comment">
         {commentelem}
        </div>
      </div>
    </div>
  );
};

export default Comment;
