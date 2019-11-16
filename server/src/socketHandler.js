import Roll from "roll";
import Action, {ACTION_JOIN, ACTION_LEAVE, ACTION_ROLL} from "./action";
import UserManager from "./userManager";

class SocketHandler {
   constructor(io) {
      this.io = io;
      this.roll = new Roll();
      this.userManager = new UserManager();
   }

   emitAction(room, action) {
      this.io.sockets.in(room).emit("action", action);
   }

   emitAllUsers(room) {
      const self = this;
      const timestamp = Date.now();

      this.io.in(room).clients((error, clients) => {
         const users = clients.map((id) => {
            return self.userManager.get(id);
         });

         self.io.sockets.in(room).emit("usersList", {
            users,
            timestamp
         });
      });
   }

   handle(socket) {
      const self = this;

      const leave = () => {
         const user = self.userManager.get(socket.id);
         const timestamp = Date.now();

         if (user) {
            self.userManager.delete(socket.id);

            self.emitAction(user.room, new Action(ACTION_LEAVE, {
               name: user.name,
               timestamp
            }));

            self.emitAllUsers(user.room);
         }

         socket.disconnect();
      };

      socket.on("join", (event) => {
         const timestamp = Date.now();

         socket.join(event.room);

         self.userManager.ingest(socket.id, {
            name: event.name,
            room: event.room,
            connectTime: timestamp
         });

         self.emitAllUsers(event.room);

         self.emitAction(event.room, new Action(ACTION_JOIN, {
            name: event.name,
            timestamp
         }));
      });

      socket.on("leave", () => {
         leave();
      });

      socket.on("disconnect", () => {
         leave();
      });

      socket.on("roll", (event) => {
         const user = self.userManager.get(socket.id);
         const timestamp = Date.now();

         if (user) {
            const action = new Action(ACTION_ROLL, {
               user: user.name,
               result: self.roll.roll(event.input),
               input: event.input,
               timestamp
            });

            if (event.private === true) {
               socket.emit("action", action);
            } else {
               self.emitAction(event.room, action);
            }
         }
      });
   }
}

export default SocketHandler;
