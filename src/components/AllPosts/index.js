import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { AllPostsStyle } from './allPostsStyle';

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
            <AllPostsStyle>
                {
                    allPosts.map(post => {
                        return (
                            <div className="post-card" key={post.createdAt}>
                                <p>{post.tagList && post.tagList.map(tag => {
                                    return <span key={tag} className="single-post-tag">
                                        <span>{tag}</span>
                                    </span>
                                })
                                }</p>
                                <img src={post.author.image} />
                                <h3>{post.title}</h3>
                                <h5>{post.description}</h5>
                                <p>{post.body}</p>
                                <Link to={`/api/articles/${post.slug}`}>
                                    <span>Read more ...</span>
                                </Link>
                            </div>

                        )
                    })
                }
            </AllPostsStyle>

        </React.Fragment>

    )
}

export default AllPosts;