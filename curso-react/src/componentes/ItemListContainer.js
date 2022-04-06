import ItemCount from "./ItemCount";

export default function ItemListContainer(props) {
  const { stockMax } = props;

  return (
    <>
      <h2>
        Item Counter
        <br />
        Stock: 7
      </h2>

      <ItemCount stockMax={7} />
    </>
  );
}
