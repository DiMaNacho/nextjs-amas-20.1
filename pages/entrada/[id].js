import { useRouter } from "next/router";

// Constantes
const API = "http://tenfield.com.uy/wp-json/wp/v2/posts/";

export const getServerSideProps = async ({ query: { id } }) => {
  const respuesta = await fetch(API + id);
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
