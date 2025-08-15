import React from "react";

export default function About(){
  const items = [
    { icon:"fa-solid fa-code", title:"Website Development" },
    { icon:"fa-solid fa-mobile-screen", title:"App Development" },
    { icon:"fa-solid fa-server", title:"Website Hosting" },
  ];
  const stats = [
    { n:"10+", k:"Completed Projects" },
    { n:"2+", k:"Team of Winzera" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up">
            <h2 className="section-title mb-4">About me</h2>
            <p className="text-muted-2">
              I’m a Web developer focused on building fast, accessible, and delightful web apps.
              I enjoy solving real problems and polishing UI details.I’m Associate of winzera.pvt.ltd.
            </p>

            <div className="row g-3 mt-3">
              {items.map((it) => (
                <div key={it.title} className="col-sm-6">
                  <div className="card-neo p-3 h-100 hover-lift">
                    <i className={`${it.icon} text-warning mb-2`} />
                    <div className="fw-semibold">{it.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-3">
              {stats.map(s => (
                <div key={s.k} className="col-4">
                  <div className="card-neo p-3 text-center">
                    <div className="fs-3 fw-bold">{s.n}</div>
                    <div className="small text-muted-2">{s.k}</div>
                  </div>
                </div>
              ))}
            </div>

            <div id="resume" className="mt-4">
              <a href="/resume.pdf" className="btn btn-accent me-3" download>Download Resume (PDF)</a>
              <a href="#contact" className="btn btn-outline-muted">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
