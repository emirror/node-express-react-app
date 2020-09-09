import styled from 'styled-components';

export const Navigation = styled.menu`
    display:flex;
    justify-content: center;
    
    & li {
        list-style-type:none;

        & a {
            text-decoration:none;
            padding: 5px 10px;
            border:1px solid #053C5E;
            border-radius: 3px;
            color: #053C5E;
            background-size:100% 200%;
            background-image: linear-gradient(to bottom, transparent 50% , #053C5E 50%);
            transition: all .15s ease-in;

            &.active {
            color: #fff;
            background-color: #053C5E;
            }

            &:hover {
                color:#fff;
                background-position: 0% 100%;
                transition: all .15s ease-in;
            }
    }
        
    }
    & li:not(:first-of-type) {
        margin-left:10px;
    }
    `