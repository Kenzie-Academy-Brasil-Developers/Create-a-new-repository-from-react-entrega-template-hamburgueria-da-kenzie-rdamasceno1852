import styled from "styled-components";

export const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
min-width: 414px;
width: 100%;
height: 139px;


background-color: var(--gray-0);


> .div1{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    text-align: center;
    gap: 10px;
    
    height: 50%;

    box-sizing: border-box;

    padding: 20px;
 
    > h2{
        color: var(--gray-100);
        font-size: var(--Heading-1);
        font-weight: var(--bold);
    }
    
    > h3 {
        color: var(--Color-secondary);
        font-size: var(--Heading-3);
    }
    
}

.div2{
    position: relative;
    width: 90%;
    height: 50%;
    
    > input{
        height: 60px;
        width: 100%;
        border-radius: 8px;
        padding: 0px 10px 0px 20px;
        background-color: #fff;
        border: 2px solid var(--gray-20);
        
        
    }
    
    > input::placeholder{
        
        font-size: var(--body);
        font-weight: var(--regular);
        color: var(--gray-20);
    }
    
    > input:focus{
        border: 2px solid var(--gray-50);
        color: var(--gray-50);
        
    }
    
    Button{
        position: absolute;
        right: 10px;
        top: 10px;
    }
}

@media (min-width: 768px) {    
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between ;
    box-sizing: border-box;
    
    padding: 0 50px;
    
    min-width: 414px;
    height: 80px;

    > .div1{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    height: 50%;

    box-sizing: border-box;

    padding: 20px;
 
    > h2{
        color: var(--gray-100);
        font-size: var(--Heading-1);
        font-weight: var(--bold);
    }

    > h3 {
        color: var(--Color-secondary);
        font-size: var(--Heading-3);
    }

}


.div2{
    display: flex;
    align-items: center;
    position: relative;
    max-width: 300px;
    height: 60px;
        
> input{
    height: 60px;
    max-width: 300px;
    border-radius: 8px;
    padding: 0px 10px 0px 20px;
    background-color: #fff;
    border: 2px solid var(--gray-20);

        
    }
    
    > input::placeholder{

        font-size: var(--body);
        font-weight: var(--regular);
        color: var(--gray-20);
    }

    > input:focus{
        border: 2px solid var(--gray-50);
        color: var(--gray-50);
        
    }

    button{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 100px;
    }
}

}
`


