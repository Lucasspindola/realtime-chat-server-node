import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1685220047651 implements MigrationInterface {
    name = 'createTables1685220047651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Messages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "textMessage" character varying(550) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_ecc722506c4b974388431745e8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nickname" character varying(550) NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5da3f86a40ce07289424c734c98" UNIQUE ("nickname"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Messages" ADD CONSTRAINT "FK_222f23e21991d82f16ef0d44d87" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Messages" DROP CONSTRAINT "FK_222f23e21991d82f16ef0d44d87"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Messages"`);
    }

}
