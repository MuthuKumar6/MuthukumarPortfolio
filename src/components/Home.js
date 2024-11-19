import React from "react";
import "./Home.css"; // For external CSS styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <h1>Hello!</h1>
        <h5>I'm Muthukumar Venkatesh</h5>
        <p>
          a passionate MERN Stack Developer. Innovating Solutions For Business
        </p>
        <p>
          This blog is where I document my journey, share insights, and explore
          everything <br></br> about web development in MERN Stack
        </p>
        <p>
          Motivated and detail-oriented software engineer with above 1 year of
          hands-on experience <br></br>in designing, developing, and maintaining software
          applications Proficient in modern web technologies.
        </p>
      </div>
      <div className="right-content">
        <img
          src="https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Home;
