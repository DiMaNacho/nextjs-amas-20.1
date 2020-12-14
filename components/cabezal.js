import Link from "next/link";

const Cabezal = () => (
  <>
    <header className="header">
      <div className="contenedor">
        <Link href="/">
          <a className="logo">
            <img src="/img/logo.svg" />
          </a>
        </Link>
        <nav className="menu">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/basquetbol">
            <a>Básquetbol</a>
          </Link>
        </nav>
      </div>
    </header>

    {/* Estilos */}
    <style jsx>{`
      .header {
        background-color: #07557b;
        height: 90px;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100000;
      }

      .contenedor {
        justify-content: space-between;
        align-items: center;
      }

      .logo img {
        height: 30px;
      }
      .menu {
        display: flex;
        align-items: center;
        height: 100%;
      }
      .menu a {
        color: #fff;
        display: block;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 16px;
        font-weight: 700;
        height: 100%;
        line-height: 90px;
        padding: 0 12px;
        position: relative;
        text-transform: uppercase;
        transition: ease-in-out 0.5s;
      }
      .menu a:after {
        background: #222222;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        bottom: 0;
        transition: 0.5s;
        width: 100%;
        z-index: -1;
      }
      .menu a:hover:after {
        height: 100%;
      }
    `}</style>
  </>
);

export default Cabezal;
