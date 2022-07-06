import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }

    this.admin = false;

    this.created_at = new Date();
  }

  turnsToAdmin(): void {
    this.admin = true;
  }

  setUpdated_at(): void {
    this.updated_at = new Date();
  }
}

export { User };
