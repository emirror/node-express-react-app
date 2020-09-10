import styled from 'styled-components';

export const LoginStyle = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    background: #C0D461;
    border: 2px solid #a2bb2c;
    border-radius: 8px;
    text-align: center;
        & form {
        display: flex;
        flex-direction: column;
        justify-content: center;
            & input {
                border: 2px solid transparent;
                padding: 0.5rem 1rem;
                border-radius: 3px;
                margin:3px 0;
                &:focus {
                    border-color: #a2bb2c;
                }
            }
            & button {
            border: none;
            padding: 10px;
            background: #A31621;
            background: #FFEAAB;
            margin: 1rem 0px;
            cursor: pointer;
            }
        }
`