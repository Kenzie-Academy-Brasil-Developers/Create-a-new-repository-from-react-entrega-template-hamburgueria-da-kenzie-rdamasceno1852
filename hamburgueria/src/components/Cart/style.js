import styled from "styled-components";

export const ShoppingCart = styled.div`
display: flex;
flex-direction: column;

width: 100%;
margin: 30px auto;

> .div1{
    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 20px;
    width: 90%;
    height: 65px;
    margin: 0 auto;
    background-color: var(--Color-primary);
    
    > h3{
        font-size: var(--Heading-3);
        font-weight: var(--bold);
        color: var(--white);
    }    

}

    > .div2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 90%;
        overflow-y: scroll;

        background-color: var(--gray-0);
        margin: 0 auto;
        padding-top: 15px;

        > ul {
            display: flex;
            flex-direction: column;
            gap: 28px;
            width: 90%;
            height: 315px;
            overflow-y: scroll;
        }
    }

    > .div3{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 90%;
        height: 158px;
        
        background-color: var(--gray-0);
        margin: 0 auto;

        > h3 {
            font-size: var(--Heading-3);
            font-weight: var(--bold);
        }

        > p{
            font-size: var(--Heading-4);
            font-weight: var(--regular);
            color: var(--gray-50);
        }
    }

    @media (min-width: 768px) {
        max-width: 320px;

        .div2{
            width: 90;
        }

        >ul{
            width: 100%;
        }

    }
        
    
`