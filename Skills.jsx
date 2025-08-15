import React from "react";

const techSkills = [
  { name: "HTML5", level: 90, icon: "fa-brands fa-html5", color: "text-warning" },
  { name: "CSS3 / Bootstrap", level: 85, icon: "fa-brands fa-css3-alt", color: "text-primary" },
  { name: "JavaScript (ES6+)", level: 70, icon: "fa-brands fa-js", color: "text-warning" },
  { name: "React", level: 75, icon: "fa-brands fa-react", color: "text-info" },
  { name: "Git & GitHub", level: 80, icon: "fa-brands fa-git-alt", color: "text-danger" },
];

const softSkills = [
  { title: "Communication", icon: "fas fa-comments", text: "Clear and effective verbal and written communication for team collaboration." },
  { title: "Problem Solving", icon: "fas fa-lightbulb", text: "Analytical approach to challenges with innovative and practical solutions." },
  { title: "Teamwork", icon: "fas fa-users", text: "Cooperative mindset to work efficiently in diverse teams and environments." },
  { title: "Time Management", icon: "fas fa-clock", text: "Ability to prioritize tasks effectively and meet project deadlines." },
  { title: "Adaptability", icon: "fas fa-sync-alt", text: "Flexibility to adjust to new tools, technologies, and working environments." },
  { title: "Leadership", icon: "fas fa-chalkboard-teacher", text: "Ability to guide, motivate, and manage a team to achieve goals." },
];

export default function Skills() {
  return (
    <section id="skills" className="section py-5">
      <div className="container">
        
        {/* Technical Skills */}
        <h2 className="section-title mb-4 text-center" data-aos="fade-up">Technical Skills</h2>
        <div className="row g-3 mb-5">
          {techSkills.map((s, i) => (
            <div className="col-md-6" key={s.name} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="card p-3 shadow-sm border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fw-semibold">
                    <i className={`${s.icon} me-2 ${s.color}`} /> {s.name}
                  </div>
                  <div className="text-muted">{s.level}%</div>
                </div>
                <div className="progress mt-2" style={{ height: 8 }}>
                  <div
                    className="progress-bar"
                    style={{
                      width: `${s.level}%`,
                      background: "var(--accent, #0d6efd)"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="section-title mb-4 text-center" data-aos="fade-up">Soft Skills</h2>
        <div className="row">
          {softSkills.map((s, i) => (
            <div className="col-md-4 mb-4" key={s.title} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="card hover-card shadow-sm text-center p-4 border-0 h-100">
                <i className={`${s.icon} fa-2x mb-3 text-primary`} />
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text text-muted">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
