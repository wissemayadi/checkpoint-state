
import React from "react";
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          GoMyCode Hackerspace, <br />
          Immeuble NEO, 2ème étage, Rue du lac lochness, Les Berges du Lac1{" "}
        </Card.Text>

        <div className='icons'>
          <FaFacebook className="fb" />
          <FaYoutube />
          <FaInstagram />
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        Powered by Wissem Ayadi
      </Card.Footer>
    </Card>
  );
};

export default Footer;