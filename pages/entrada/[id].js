import { useRouter } from "next/router";

// Constantes
const API_POST = "http://tenfield.com.uy/wp-json/wp/v2/posts/";
const API_POSTS =
  "http://tenfield.com.uy/wp-json/wp/v2/posts?_fields=id&per_page=100";

export const getStaticPaths = async () => {
  const respuesta = await fetch(API_POSTS + id);
  const data = await respuesta.json();

  console.log("data", data);

  return {
    paths: [
      { params: data }, // See the "paths" section below
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const respuesta = await fetch(API_POST + id);
  const data = await respuesta.json();

  console.log("data", data);

  return {
    props: { post: data }, // will be passed to the page component as props
  };
};

const EntradaItem = ({ post }) => {
  return (
    <>
      <div className="EntradaItem">
        <h1>{post.title.rendered}</h1>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .EntradaItem {
          color: red;
        }
      `}</style>
    </>
  );
};

export default EntradaItem;
