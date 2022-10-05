import styled from "styled-components";

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 90%;
    height: 100px;
    
    > .div{
        border-top: 1px solid var(--gray-50) ;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding-top: 20px;
        margin: 0 auto;
        width: 90%;

        > p{
            font-size: var(--body);
            font-weight: var(--semibold);
            color: var(--gray-100);
        }

        > span{
            font-size: var(--body);
            font-weight: var(--semibold);
            color: var(--gray-50);

        }
    }
    > button{
            text-align: center;

            width: 100%;
            height: 40px;
            padding: 0 20px 0 20px;

            background-color: var(--gray-20);
            border: 2px solid var(--gray-20);
            color: var(--gray-50);
            border-radius: 8px;

        & :hover{
            background-color: var(--gray-50);
            color: var(--gray-20);
            }
        }
    `
