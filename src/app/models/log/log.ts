export class Log {
  id: number;
  timestamp: string;
  text: string;

  constructor(id?: number, timestamp?: string, text?: string) {
    this.id = id;
    this.timestamp = timestamp;
    this.text = text;
  }
}
