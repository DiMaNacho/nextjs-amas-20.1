import { useRouter } from "next/router";

const EntradaItem = () => {
  // const router = useRouter();
  // const { id } = router.query;

  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <div className="EntradaItem">Esta página tiene el ID: {id}</div>

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
