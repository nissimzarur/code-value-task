export default interface IButtonFactory
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "success" | "error" | "primary" | "secondary";
}
