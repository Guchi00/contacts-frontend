import styled from "styled-components";

export const Card = styled.div`
    height: 270px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; 
    border-radius: 10px; 
`;

export const ImageAndNameDiv = styled.div`
height: 50px;
width: 400px;
border: solid 1px;
display: flex;
align-items: center;
background-color: #5c636a;
border-radius: 10px; 
`;

export const Image = styled.img`
height: 50px;
width: 50px;
border: solid 1px;
border-radius: 5px;
background-color: #fff;
margin-right: 15px;
border-radius: 30px;
`;

export const Name = styled.p`
height: 40px;
width: 335px;
margin-top: 35px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
color: white;
`;

export const MobilesDiv = styled.div`
height: 40px;
width: 400px;
margin-bottom: 4px;
display: flex;
background-color: #232323;
`;

export const Mobile = styled.p`
width: 180px;
margin-right: 10px;
margin-top: 9px;
margin-left: 5px;
color: #3ca2ed;
font-family: 'Poppins', sans-serif;
`;

export const List = styled.div`
height: 48px;
width: 400px;
/* border: solid 1px; */
margin-top: 10px;
display:flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ListItems = styled.p`
width: 250px;
margin: 0px;
font-family: 'Poppins', sans-serif;
`;

export const ListLabels = styled.p`
width: 150px;
margin: 0px;
color: #3ca2ed;
margin-left: 5px;
font-family: 'Poppins', sans-serif;
`;



