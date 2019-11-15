class UserManager {
   constructor() {
      this.users = new Map();
   }

   ingest(userId, data) {
      this.users.set(userId, data);
   }

   delete(roomId, userId) {
      this.users.delete(userId);
   }

   get(userId) {
      return this.users.get(userId);
   }
}

export default UserManager;
