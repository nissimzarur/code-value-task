export default interface ILayout {
  header: JSX.Element;
  footer: JSX.Element;
  body: {
    left: JSX.Element;
    right: JSX.Element;
  };
}
