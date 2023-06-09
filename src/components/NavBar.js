import React from 'react'
import {Menu, Container, Button} from "semantic-ui-react";
import {useNavigate, Link } from "react-router-dom";
import logo from "../assest/react.svg";

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Menu inverted borderless style ={{padding: "0.3rem", marginBottom: "20px"}} attached>
        <Container>
            <Menu.Item name="home">
                <Link to="/">
                    <image size="mini" src={logo} alt="logo" />
                </Link>
            </Menu.Item>
            <Menu.Item>
                <h2>React Firebase Crud</h2>
            </Menu.Item>
            <Menu.Item position="right">
                <Button size="mini" primary onClick={()=> navigate("/add")}>
                    Add User
                </Button>

            </Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}

export default NavBar
