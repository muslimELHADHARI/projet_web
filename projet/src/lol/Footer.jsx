import React from 'react';

const Footer = () => {
  return (
    <div className="container mt-5">
      <footer className="bg-white border-top p-3 text-muted small">
        <div className="row align-items-center justify-content-between">
          <div>
            <span className="navbar-brand mr-2"><strong>ELHADHARI</strong></span> Muslim &copy;
            <script>document.write(new Date().getFullYear())</script>
            . KEEP WORKING !!.
          </div>
          <div>
            Made with <a target="_blank" className="text-secondary font-weight-bold" >LOVE</a> by ELhadhari.Muslim.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
