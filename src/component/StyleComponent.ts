import styled from "styled-components"

export const MainWrapper = styled.div`
    width: 800px;
    margin: 0 auto;
`

export const HeaderWrap = styled.div`
    position: relative;
`;
export const MainTitle = styled.h1`
    a{
        text-decoration: none;
        color: #000;
    }
`;
export const Menu = styled.div`
        position: absolute;
        top: 10px;
        right: 0;
        a{
            border: 1px solid #333;
            padding: 10px;
            margin-left: 10px;
            background-color: #efefef;
            font-weight: bold;
            border-radius: 4px;
            text-decoration: none;
            color: #000;
        }
`;


export const Wrapper = styled.div`

`;

export const ListDay = styled.ul`
    display: flex;
    flex-wrap: wrap;   
`;

export const ListDayLi = styled.li`
    flex: 20% 0 0;
    box-sizing: border-box;
    padding: 10px;
    a{
        display: block;
        padding: 20px 0;
        font-weight: bold;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        background-color: dodgerblue;
        text-decoration: none;
    }
`;

export const TableWrapper = styled.table`
    border-collapse: collapse;
    width: 100%;
    td{
        width: 25%;
        height: 70px;
        border: 1px solid #ccc;
        text-align: center;
        font-size: 26px;
    }
    td:first-child{
        width: 10%;

    }
`;

export const Button = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;
`;

export const InputArea = styled.div`
    margin-bottom: 10px;
    input{
        width: 400px;
        height: 40px;
        font-size: 20px;
        padding: 0 10px;    
    }
    label{
        display: block;
        margin-bottom: 10px;
    }
    select{
        width: 400px;
        height: 40px;
        font-size: 20px;
    }
`;

