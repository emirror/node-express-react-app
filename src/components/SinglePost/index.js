import React, { useEffect, useState } from 'react';
import Axios from 'axios';


function SinglePost(props) {

    const [posts, setPosts] = useState([]);
    
    const {
        match: {
            params: {
                slug
            }
        }
    } = props

    useEffect(() => {
        Axios.get(`http://localhost:3000/api/articles/${slug}`)
            .then(res => setPosts(res.data.article));
    }, [])

    console.log(posts);

    return (

        <React.Fragment>
            {
                posts && (
                    <div>
                        <h3>{posts.title}</h3>
                        <h5>{posts.description}</h5>
                        <p>{posts.body}</p>
                        <div>{posts.tagList && posts.tagList.map(tag => {
                            return <span key={tag} className="single-post-tag">
                                <span>{tag}</span>
                            </span>
                        })
                        }</div>
                    </div>
                )
            }

        </React.Fragment>



    )
}

export default SinglePost;