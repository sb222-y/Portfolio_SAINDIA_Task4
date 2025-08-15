import React from "react";

export default function Footer(){
  return (
    <footer className="py-4 mt-5 border-top" style={{ borderColor: "rgba(255,255,255,.08)" }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="text-muted-2 small">© {new Date().getFullYear()} Sanskruti Yewale. All rights reserved.</div>
        <div className="d-flex gap-3">
          <a className="footer-link" href="https://mail.google.com/mail/u/0/?hl=en_GB#inbox" aria-label="email"><i className="fa-regular fa-envelope" /></a>
          <a className="footer-link" href="https://github.com/sb222-y" target="_blank" rel="noreferrer" aria-label="github"><i className="fa-brands fa-github" /></a>
          <a className="footer-link" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" aria-label="linkedin"><i className="fa-brands fa-linkedin" /></a>
         
        </div>
      </div>
    </footer>
  );
}
