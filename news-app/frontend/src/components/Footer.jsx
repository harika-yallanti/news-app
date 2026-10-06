function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>NewsHub</h3>
          <p>
            Stay informed with the latest stories and updates.
          </p>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NewsHub. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;