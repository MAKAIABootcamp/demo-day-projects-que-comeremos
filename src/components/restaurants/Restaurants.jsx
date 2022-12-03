import React from "react";
import { Button, Card } from "react-bootstrap";
import Navbar from "./Navbar";
import "./restaurants.scss";

const Restaurants = () => {
  return (
    <div className="restaurants">
      <Navbar />
      <Card className="restaurants__cards">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Restaurants;
