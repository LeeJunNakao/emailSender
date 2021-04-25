export interface Sender {
  send: (to: string, subject: string, text: string) => Promise<void>,
}
