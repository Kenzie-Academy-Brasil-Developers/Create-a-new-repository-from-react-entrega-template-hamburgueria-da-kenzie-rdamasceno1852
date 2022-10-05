import styled from "styled-components";

export const ButtonDefault = styled.button`
    width: 130px;
    height: 40px;
    padding: 0 20px 0 20px;

    background-color: var(--Color-primary);
    border: 2px solid var(--Color-primary);
    color: var(--white);
    border-radius: 8px;

    & :hover{
        background-color: var(--Color-primary-50);
        
    }
`

