import useNotification from "./hooks/useNotification.hook";
import { observer } from "mobx-react-lite";

const Notification = observer(() => {
  const { showNotification, title, desc, type } = useNotification();

  const className = `alert alert-${type}`;
  return (
    <>
      {showNotification ? (
        <div className="toast">
          <div className={className}>
            <p>{title}</p>
            <span>{desc}</span>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
});

export default Notification;
