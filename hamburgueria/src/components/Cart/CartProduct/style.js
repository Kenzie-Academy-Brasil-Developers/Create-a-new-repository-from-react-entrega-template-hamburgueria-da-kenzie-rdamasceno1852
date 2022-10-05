import styled from "styled-components";

export const CardCart = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    height: 80px;
    width: 100%;
    gap: 15px;

    background-color: var(--gray-0);

    > img{
        width: 80px;
        height: 80px;
        background-color: var(--gray-20);
    }

    > .div1{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 15px;
 
        h3{
            text-align: justify;
            color: var(--gray-100);
        }
        
        p{
            color: var(--gray-50);
            font-size: var(--body);
        }
    }


    button{
        color: var(--gray-50);
        padding-left: 56px;
    }

    @media (min-width:768px){
        gap: 7px;

        .div1{
      
 
        h3{
            text-align: justify;
            color: var(--gray-100);
            font-size: var(--body);
            font-weight: var(--semibold);
        }
        
        p{
            color: var(--gray-50);
            font-size: var(--body);
            font-weight: var(--regular);
        }
    }

        > button{
            padding-left: 6px;
        }
    }

`