import styled from "styled-components";

export const Cards = styled.li`
display: flex;
flex-direction: column;
align-items: center;

height: 346px;
width: 236px;

margin: 0 auto;

border: 2px solid var(--gray-0);
border-radius: 5px;

&:hover{
    border: 2px solid var(--gray-100);
}

> .div1{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    width: 236px;
    height: 150px;
    
    background: var(--gray-0);
    
}
    
> .div2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    gap: 14px;
    
    height: 196px;
    width: inherit;
    padding-left: 40px;
    
    height: 196px;
    width: inherit;
    
    
    > h3{
        font-size: var(--Heading-3);
        font-weight: var(--bold);
        color: var(--gray-100);
        line-height: 24px;
    }
    
    > p{
        font-size: var(--caption);
        font-weight: var(--regular);
        color: var(--gray-50);
    }
    
    > span {
        font-size: var(--body-600);
        font-weight: var(--semibold);
        color: var(--Color-primary);
    }
    }

    @media (min-width: 768px){
        width: 236px;
        margin: 0;
        > .div1{
            width: 232px;
        }
    
    }
    
    `