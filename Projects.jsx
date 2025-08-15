import React, { useMemo, useState } from "react";

const ALL = [
  {
    title: "Portfolio Website",
    desc: "Responsive personal portfolio with dark mode and AOS animations.",
    img: require("../assets/project1.jpg"),
    tags: ["React","Bootstrap"],
    code: "https://github.com/you/portfolio"
  },
  {
    title: "Expense Tracker",
    desc: "Track income and expenses with charts and filters.",
    img: require("../assets/project2.jpg"),
    tags: ["JavaScript","Bootstrap"],
    code: "https://github.com/sb222-y/Saindia_Task3"
  },
  {
    title: "My Stylish Blog",
    desc: "Some attractive blogs",
    img: require("../assets/project3.jpg"),
    tags: ["React","API"],
    code: "https://github.com/sb222-y/my-stylish-blog_task2"
  }
];

const TAGS = ["All", ...Array.from(new Set(ALL.flatMap(p => p.tags)))];

export default function Projects(){
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => active === "All" ? ALL : ALL.filter(p => p.tags.includes(active)),
    [active]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <h2 className="section-title m-0">Projects</h2>
          <div className="d-flex gap-2 flex-wrap">
            {TAGS.map(t => (
              <button key={t}
                className={`btn btn-sm ${t===active ? "btn-accent" : "btn-outline-muted"}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {filtered.map((p, i) => (
            <div key={p.title} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i*70}>
              <article className="card-neo hover-lift">
                <img src={p.img} alt={p.title} className="project-img" />
                <div className="p-3">
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="text-muted-2 small">{p.desc}</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    {p.tags.map(tag => <span key={tag} className="badge badge-tech">{tag}</span>)}
                  </div>
                  <div className="d-flex gap-2">
                    <a className="btn btn-outline-muted btn-sm" href={p.code} target="_blank" rel="noreferrer"><i className="fa-brands fa-github me-2" />Code</a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
