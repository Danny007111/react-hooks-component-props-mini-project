import React from "react";
import Article from "./Article";
import {v4 as uuidv4} from "uuid";

function ArticleList(props) {
    
    return (
        <>
        <main>
            {props.posts?.map((post)=>{
            return (
                <Article 
                    key={uuidv4()} 
                    title={post.title} 
                    date={post.date} 
                    preview={post.preview} />
                    )
                })
            }
        </main>
        </>
    )
};

export default ArticleList;