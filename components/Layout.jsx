const Layout = ({ children }) => (
  <div className="container">
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
      }
    `}</style>
  </div>
);

export default Layout;
