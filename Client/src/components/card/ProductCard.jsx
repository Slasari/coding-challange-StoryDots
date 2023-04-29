export function ProductCard({ name, image, price }) {
  return (
    <article>
      <img src={image}></img>
      <section>{name}</section>
      <section>{price}</section>
    </article>
  );
}
