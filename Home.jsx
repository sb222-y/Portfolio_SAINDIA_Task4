import React from "react";

export default function Home(){
  return (
    <header id="home" className="section">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-md-6" data-aos="fade-right">
            <p className="text-muted-2 mb-2">Hello, I'm</p>
            <h1 className="display-5 fw-bold">Sanskruti <span style={{color:"var(--accent)"}}>Yewale</span></h1>
            <h5 className="text-muted-2 mb-4">Web Developer | Business Associate</h5>
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-accent px-4">Get a project</a>
              <a href="#resume" className="btn btn-outline-muted px-4">My resume</a>
            </div>
            <div className="mt-4 d-flex gap-3">
              <i className="fa-brands fa-html5" />
              <i className="fa-brands fa-css3-alt" />
              <i className="fa-brands fa-js" />
              <i className="fa-brands fa-react" />
              <i className="fa-brands fa-git-alt" />
            </div>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            {/* Use your own image in /src/assets/profile.jpg */}
            <div className="position-relative d-inline-block">
              <div className="rounded-circle" style={{
                width: 260, height: 260, background: "radial-gradient(circle, rgba(249,115,22,.25) 0%, rgba(249,115,22,0) 70%)",
                position:"absolute", top:-20, left:-20, filter:"blur(10px)"
              }} />
              <img src={require("../assets/profile.jpg")} alt="profile"
                   className="rounded-circle border border-2 border-warning-subtle"
                   style={{ width: 240, height: 240, objectFit: "cover", position:"relative" }}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
