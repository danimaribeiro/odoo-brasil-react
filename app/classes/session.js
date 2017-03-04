export default class Session {
  id: string;
  expiration: string;
  db: string;
  uid: integer;
  constructor(data) {
    Object.assign(this, data);
  }
}
