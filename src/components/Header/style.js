import styled from 'styled-components';

export const Navigation = styled.menu`
    display:flex;
    justify-content: center;
    
    & li {
        list-style-type:none;

        & a {
            text-decoration:none;
            padding: 5px 10px;
            border:1px solid #31caff;
            border-radius: 3px;
            color: #31caff;
            background-size:100% 200%;
            background-image: linear-gradient(to bottom, transparent 50% , #31caff 50%);
            transition: all .15s ease-in;

            &.active {
            color: #fff;
            background-color: #31caff;
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