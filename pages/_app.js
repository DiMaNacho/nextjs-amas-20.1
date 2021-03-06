// Componentes
import Cabezal from "../components/cabezal";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Cabezal />
    
    <Component {...pageProps} />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      body {
        padding: 90px 0 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default MyApp;
