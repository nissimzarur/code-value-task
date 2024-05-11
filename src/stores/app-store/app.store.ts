import INotification from "@components/customized/notification/notification.interfaces";
import { makeAutoObservable, runInAction } from "mobx";

export class AppStore {
  public notification: INotification = { title: "", desc: "", type: "info" };

  constructor() {
    makeAutoObservable(this);
  }

  setNotify(notification: INotification) {
    runInAction(() => {
      this.notification = notification;
    });
  }
}
const appStore = new AppStore();
export default appStore;
