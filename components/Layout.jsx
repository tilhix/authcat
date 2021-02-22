import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children, title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div className="container">
      <nav>
        <span>
          Welcome, <strong>guest</strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <button onClick={handleClick}>Logout</button>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </nav>
      <div className="children">
        {title && <h1>{title}</h1>}
        {children}
      </div>
      <footer>
        <span>© 2020</span>
      </footer>
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
          justify-content: space-between;
          align-items: center;
          background: #f9f7f7;
          width: 100%;
          height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .container * {
          box-sizing: border-box;
        }
        nav {
          display: flex;
          justify-content: space-around;
          width: 100%;
          padding: 1em;
        }
        a {
          padding: 0 0.5em;
        }
        button {
          padding: 0 0.5em;
          cursor: pointer;
          background: none;
          border: none;
          color: #3f72af;
          font-family: inherit;
          font-size: inherit;
        }
        button:hover {
          color: #6290c7;
        }
        .children {
          flex: 1 1 auto;
          padding: 1em;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        footer {
          padding: 1em;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #dbe2ef;
          color: #112d4e;
          font-size: 18px;
          font-family: Arial, sans-serif;
        }
        a {
          text-decoration: none;
          color: #3f72af;
        }
        a:hover {
          color: #6290c7;
        }
      `}</style>
    </div>
  );
};

export default Layout;
