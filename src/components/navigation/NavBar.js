import React from 'react'
import styled from 'styled-components'
import { FaBars,FaCartPlus,FaSearch } from "react-icons/fa"

const  NavBar =() =>{
  return (
    <Wrapper>
<       Icon>
        <FaBars size={40}/>
        </Icon>
        <Title>Shopping Site</Title>
        <AdditionalIcon>
            <FaCartPlus size={30}/>
            <FaSearch size={30} color="white"/>
        </AdditionalIcon>
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #8c77bde8;
    height: 50px;
    justify-content: space-between;
    align-items: center;

`
const Icon = styled.div`
    width: 50px;
`
const Title = styled.div`
width: 100px;
font-size: 15px;
`
const AdditionalIcon = styled.div`
display: flex;
    width: 115px;
    justify-content: space-evenly;


`