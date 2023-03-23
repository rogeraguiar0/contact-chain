/*
  Warnings:

  - You are about to drop the column `userId` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[clientId]` on the table `Contacts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `Contacts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contacts" DROP CONSTRAINT "Contacts_userId_fkey";

-- DropIndex
DROP INDEX "Contacts_userId_key";

-- AlterTable
ALTER TABLE "Contacts" DROP COLUMN "userId",
ADD COLUMN     "clientId" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(180) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "telephone" VARCHAR(15) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contacts_clientId_key" ON "Contacts"("clientId");

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
