import Link from "next/link";
import React from "react";
import Image from "../components/Image";


const About = () => {
  return (
    <div style={{ fontSize: "20px", color: "blue" }}>
      <h1>About</h1>
      <div>
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>
      <Image />
      <p>I was a magician once</p>
    </div>
  );
};

export default About;
