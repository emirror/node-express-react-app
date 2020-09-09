import styled from 'styled-components';

export const AllPostsStyle = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;
    & > .post-card {
        display: grid;
        padding: 1rem;
        background-color: #f2f2f2;
        border-radius: 8px;
        position: relative;

            & a {
                align-self: end;
                width: 70%;
                justify-self: center;
                text-align: center;
                text-decoration: none;
                background-color: #31caff;
                color: #fff;
                padding: 0.4rem 0;
                border-radius: 50px;
            }
            
            & .single-post-tag {
                margin-right:10px;
                
                & span {
                padding:2px 10px;
                border:1px solid #FF6978;
                border-radius: 5px;
                font-size:13px;
                background-color:#FF6978;
                color:#fff;
                }
            }
            & img  {
                border-radius: 100px;
                width: 55px;
                position: absolute;
                right: -.5rem;
                top: -.5rem;
            }
    }

`