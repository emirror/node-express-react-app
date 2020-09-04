import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function AllPosts() {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3000/api/articles`)
            .then(art => setAllPosts(art.data.articles))
    }, []);
    console.log(allPosts)

    return (
        <React.Fragment>
            <h1>This is All Posts Page.</h1>
            {
                allPosts.map(post => {
                    return (
                        <div className="post-card" key={post.createdAt}>
                            <h3>{post.title}</h3>
                            <h5>{post.description}</h5>
                            <p>{post.body}</p>
                            <Link to={`/api/articles/${post.slug}`}>
                            <span>Read more ...</span>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }

        </React.Fragment>

    )
}

export default AllPosts;