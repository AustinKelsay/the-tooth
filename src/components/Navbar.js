import React from "react"
import { Nav } from 'react-bootstrap';
import Styled from "styled-components"

const navStyle = Styled.div`
    width: 80%;
    margin: 1% auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const navItem = Styled.div`
    margin: 1% auto;
`
const Navbar = () => {
    return (
        <Nav
        as={navStyle}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
            <Nav.Item as={navItem}>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as={navItem}>
                <Nav.Link href="/music">Music</Nav.Link>
            </Nav.Item>
            <Nav.Item as={navItem}>
                <Nav.Link href="/merch">Merch</Nav.Link>
            </Nav.Item>
            <Nav.Item as={navItem}>
                <Nav.Link href="/media">Other projects</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar