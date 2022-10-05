import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
min-width: 414px;
padding-top: 20px;

@media (min-width: 768px){
width: 70%;
}
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;

    width: 90%;
    margin: 0 auto;
    overflow-x: scroll;

    
    @media (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
        width: 94%;
    }

        
    
    `
