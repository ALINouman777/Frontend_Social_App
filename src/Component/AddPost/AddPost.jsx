import React from "react";
import "./AddPost.css";
import {AsyncCreatePost} from "../../../Redux/AsyncSlice/Allpost"
import {useDispatch,useSelector} from "react-redux"

const AddPost = () => {
  const dispatch=useDispatch();

  const {loading}=useSelector((state)=>state.post);

  const [image, setimage]=React.useState("");
  const [caption, setcaption]=React.useState("");


  function handlefileChange(e){
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      if(reader.readyState === 2){
        setimage(reader.result);
      }
    }
  

    reader.readAsDataURL(file);
  }


  const SubmitPost=(e)=>{
      e.preventDefault();
      dispatch(AsyncCreatePost({image,caption})).then(()=>{
        setimage("");
        setcaption("");
        alert("Post Created Successfully");
      }).catch(()=>{
          alert("Something went wrong");
      });
  }

  return (
    <>
      <section className="add-post" >
        <div className="container">
          <form  onSubmit={SubmitPost}>
            <h2>New Post</h2>

           {image && <img src={image} alt="image" />}

            <input 
            type="file"
            required
            onChange={handlefileChange}
            name="file" id="file" />

            <input
              type="text"
              name="caption"
              id="Captions"
              required
               value={caption}
              onChange={(e)=>setcaption(e.target.value)}
              placeholder="Caption"
            />

            <button
            disabled={loading}
            id="btn"
            className="btn">Create New Post</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddPost;
