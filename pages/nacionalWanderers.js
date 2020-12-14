// import { useRouter } from "next/router";

// Constantes
const API = "http://tenfield.com.uy/wp-json/wp/v2/posts/752288";

export const getServerSideProps = async () => {
  const respuesta = await fetch(API);
  const data = await respuesta.json();

  return {
    props: { post: data }, // will be passed to the page component as props
  };
};

const nacionalWanderers = ({ post }) => {
  // const router = useRouter();
  // const { id } = router.query;

  // const {
  //   query: { id },
  // } = useRouter();

  console.log("post", post);

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

export default nacionalWanderers;
