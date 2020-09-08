import React, { useRef } from 'react';
import Axios from 'axios';

function CreatePost() {
    const title = useRef(null)
    const description = useRef(null)
    const body = useRef(null)
    const tags = useRef([])
    const key = localStorage.getItem('token');

    function CreateHandler(e) {
        e.preventDefault();
        key && Axios
            .post('http://localhost:3000/api/articles',
                {
                    "article": {
                        "title": title.current.value,
                        "description": description.current.value,
                        "body": body.current.value,
                        "tagList": tags.current.value
                    }
                },
                {
                    headers: {
                        Authorization:
                            "Bearer " + key
                    }
                }
            )
            .then(res => console.log(res.data))
            .catch(error => console.log(error))

    }

    return (
        <div>
            <h1>create post</h1>
            <form>
                <input type="text" placeholder="title" defaultValue="" ref={title} />
                <input type="text" placeholder="description" defaultValue="" ref={description} />
                <input type="text" placeholder="body" defaultValue="" ref={body} />
                <input type="text" placeholder="tags" defaultValue="" ref={tags} />
                <button type="submit" onClick={CreateHandler}>Create</button>
            </form>
        </div>

    )
}

export default CreatePost;