import "./Example.css";

function Example(props) {
  let discount = "";
  if (props.discount) {
    discount = <strong>Discount: {props.discount}%</strong>;
  }

  return (
    <div className="Example">
      <div>
        <img src={props.photo} alt={props.title} />
      </div>
      <a href={props.url}>{props.title}</a>
      <span>{props.price} сом</span>
      {discount}
    </div>
  );
}

export default Example;
