import React, { useState } from "react";

export default function Contact(){
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true); // demo only
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title mb-3" data-aos="fade-up">Contact</h2>
        <p className="text-muted-2 mb-4" data-aos="fade-up" data-aos-delay="50">
          Have a project or opportunity? Send me a message — I’ll reply soon.
        </p>

        <div className="row">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <form onSubmit={submit} className="card-neo p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" required />
                </div>
              </div>
              <button type="submit" className="btn btn-accent mt-3">Send Message</button>
              {sent && <div className="text-success mt-3">✅ Thanks! Your message has been recorded (demo).</div>}
            </form>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
            <div className="card-neo p-4">
              <h6 className="fw-semibold mb-3">Get in touch</h6>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="fa-solid fa-envelope text-warning"></i>
                <a className="footer-link" href="https://mail.google.com/mail/u/0/?hl=en_GB#inbox">Gmail</a>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="fa-brands fa-linkedin text-warning"></i>
                <a className="footer-link" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-brands fa-github text-warning"></i>
                <a className="footer-link" href="https://github.com/sb222-y" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
