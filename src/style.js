import MainStyled from 'styled-components';

export const Main = MainStyled.div`
    font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
    max-width:1300px;
    margin: 0 auto;

    & .single-post-tag {
        margin-right:10px;
        & span {
            padding:2px 10px;
            border:1px solid #FF6978;
            border-radius: 5px;
            font-size:13px
        }
    }
`
