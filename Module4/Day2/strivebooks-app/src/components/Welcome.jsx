import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Welcome() {
    return <Jumbotron>
        <h1>Welcome to StriveBooks</h1>
        <p>
        This is the subtitle of StriveBooks.
        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
}