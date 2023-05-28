import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { Message } from "./messages.entity";
@Entity("Users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, type: "varchar", length: 550 })
  nickname: string;

  @Column({ type: "varchar" })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword(): void {
    this.password = hashSync(this.password, 10);
  }
}

export { User };
