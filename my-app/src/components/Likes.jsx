import React, { useState } from "react";
import img1 from "../img/icons8-like-64.png"
import img2 from "../img/icons8-dislike-64.png"


const Likes = function() {
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

    function increment() {
        setLike(like + 1);
      }
    
    
      function decrement() {
          setDisLike(disLike + 1)
      }

    return (
        <div style={{display: "flex", justifyContent: "space-between", width: "140px", marginTop: "10px"}}>
            <div style={{width: "60px",display: "flex", justifyContent: "space-between"}}>
                <h1>{like}</h1>
                <img onClick={increment} style={{width: "32px", cursor: "pointer"}} src={img1}/>
            </div>
            <div style={{width: "60px",display: "flex", justifyContent: "space-between"}}>
                <h1>{disLike}</h1>
                <img onClick={decrement} style={{width: "32px", cursor: "pointer"}} src={img2}/>
            </div>
        </div>
    )
}

export default Likes;