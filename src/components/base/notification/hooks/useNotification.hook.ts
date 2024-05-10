import appStore from "@stores/app-store/app.store";
import { useEffect, useState } from "react";

const useNotification = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    if (
      appStore.notification.title.length &&
      appStore.notification.desc.length
    ) {
      setShowNotification(true);

      setTimeout(() => {
        appStore.setNotify({ title: "", desc: "", type: "info" });
        setShowNotification(false);
      }, 2000);
    }
  }, [appStore.notification]);

  return {
    showNotification,
    title: appStore.notification.title.trim(),
    desc: appStore.notification.desc.trim(),
    type: appStore.notification.type,
  };
};

export default useNotification;
