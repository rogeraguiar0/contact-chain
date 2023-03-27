-- DropForeignKey
ALTER TABLE "Contacts" DROP CONSTRAINT "Contacts_clientId_fkey";

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
