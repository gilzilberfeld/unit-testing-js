import { NotifyService } from "./notify";

export class MockNotifier implements NotifyService {
  notification_log = "";

  notifyTownCrier(message: string): void {
    this.notification_log += message;
    this.notification_log += "\n";
  }
}
