// Dependencias
import { useEffect, useState } from "react";
import Head from "next/head";

// Componentes
import Post from "../components/post";

// Constantes
const CORS = "https://cors-anywhere.herokuapp.com/";
const API =
  "http://tenfield.com.uy/wp-json/wp/v2/posts?_fields=author,id,excerpt,slug,title,link,jetpack_featured_media_url,_links,_embedded&_embed&per_page=8";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const consultarPost = () => {
      fetch(CORS + API)
        .then((response) => response.json())
        .then((json) => setPosts(json));
    };

    consultarPost();
  }, []);

  console.log("posts", posts);

  return (
    <>
      <Head>
        <title>Bienvenido al sitio con Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"container"}>
        <main className={"main"}>
          <h1 className={"title"}>Bienvenido a Tenfield</h1>

          <p className={"description"}>
            Sitio con fines educativos de uso de NextJS
          </p>

          <div className={"grid"}>
            {posts
              ? posts.map(
                  (post) =>
                    post["_embedded"]["wp:featuredmedia"] && (
                      <Post
                        autor={post["_embedded"].author[0].name}
                        desc={post.excerpt.rendered}
                        fecha={post.date}
                        id={post.id}
                        key={post.id}
                        link={post.link}
                        slug={post.slug}
                        thumb={
                          post["_embedded"]["wp:featuredmedia"][0].source_url
                        }
                        titulo={post.title.rendered}
                      />
                    )
                )
              : "Cargando..."}
          </div>
        </main>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
