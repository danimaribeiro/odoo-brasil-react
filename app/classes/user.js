export default class User {
  id: integer;
  username: string;
  name: string;
  is_admin: bool;
  partner_id: integer;
  company_id: integer;
  constructor(data) {
    Object.assign(this, data);
  }
}
