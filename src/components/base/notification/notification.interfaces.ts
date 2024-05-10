export default interface INotification {
  title: string;
  desc: string;
  type?: "warning" | "success" | "error" | "info";
}
