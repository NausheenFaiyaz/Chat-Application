import { varchar } from "drizzle-orm/mysql-core";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  username: text("username").notNull().unique(),

  createdAt: integer("created_at")
    .notNull()
    .$defaultFn(() => Date.now()),
});

export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  senderId: integer("sender_id")
    .notNull()
    .references(() => users.id),

  receiverId: integer("receiver_id")
    .notNull()
    .references(() => users.id),

  content: text("content").notNull(),

  createdAt: integer("created_at")
    .notNull()
    .$defaultFn(() => Date.now()),
});

export const rooms = sqliteTable("rooms", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  roomName : text("")
});

export const room_members = sqliteTable("room_members", {
  roomId  : integer("room_id")
    .notNull()
    .references(() => rooms.id),
    userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});
