import React, { useState } from "react";
import { Form, Navbar, Nav, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCocktailList } from "../Actions/actionTask";


function NavBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const cocktailList = useSelector((state) => state.CocktailList);
  console.log("ccccccc", cocktailList);

  useEffect(() => {
    FetchData();
  }, [search]);

  const FetchData = () => {
    dispatch(GetCocktailList(search));
  };

  console.log(search)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Coctail Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/aboutus">About Us</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearch(e.target.value)}/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
