// Dependencias
import Link from "next/link";

// Hooks
import useTruncate from "../hooks/useTruncate";

const Post = ({ id, thumb, autor, titulo, fecha, desc, link, slug }) => (
  <>
    <article className="post" id={id}>
      <div className="thumb">
        <img src={thumb} />
      </div>

      <div className="contenido">
        <b className="autor">{autor}</b>
        <h2
          className="titulo"
          dangerouslySetInnerHTML={{ __html: useTruncate(titulo, 8) }}
        />
        <time dateTime={fecha} className="fecha">
          {fecha}
        </time>
        <p
          className="descripcion"
          dangerouslySetInnerHTML={{ __html: useTruncate(desc, 20, "...") }}
        />
        <Link href={`post/${slug}`}>
          <a className="btn">Leer más</a>
        </Link>
      </div>
    </article>

    {/* Estilos */}
    <style jsx>{`
      .post {
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
        display: flex;
        margin: 0 0 30px;
        overflow: hidden;
        width: 100%;
      }

      .thumb {
        width: 48%;
        position: relative;
      }
      .thumb:before,
      .thumb:after {
        background-color: rgba(7, 85, 123, 0.5);
        content: "";
        height: 0;
        left: 0;
        position: absolute;
        transition: 0.3s;
        width: 100%;
        opacity: 0;
      }
      .thumb:before {
        top: 0;
      }
      .thumb:after {
        bottom: 0;
      }
      .thumb img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      .contenido {
        padding: 20px;
        width: 52%;
      }

      .autor {
        color: rgba(7, 85, 123, 1);
        font-size: 14px;
        font-weight: 600;
        font-style: italic;
      }

      .titulo {
        color: #222;
      }

      .fecha {
        margin-right: 20px;
        color: #888888;
        font-size: 14px;
      }

      .descripcion {
        color: #777777;
        font-size: 14px;
        line-height: 23px;
        margin: 0 0 25px;
      }

      .btn {
        line-height: 30px;
        border: 1px solid #e1e1e1;
        display: inline-block;
        padding: 0 20px;
        text-transform: uppercase;
        border-radius: 3px;
        color: #bbbbbb;
        font-size: 12px;
        font-weight: 600;
        margin: 0;
        transition: 0.3s;
      }
      .btn:hover {
        background-color: rgba(7, 85, 123, 1);
        color: white;
      }

      .post:hover .thumb:before,
      .post:hover .thumb:after {
        height: 100%;
        opacity: 1;
      }
    `}</style>
  </>
);

export default Post;
