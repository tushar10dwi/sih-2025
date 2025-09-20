/*
  Warnings:

  - You are about to drop the column `careerGoals` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Career` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Career" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "careerGoals";

-- CreateTable
CREATE TABLE "public"."CareerOnProfile" (
    "profileId" INTEGER NOT NULL,
    "careerId" INTEGER NOT NULL,

    CONSTRAINT "CareerOnProfile_pkey" PRIMARY KEY ("profileId","careerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Career_title_key" ON "public"."Career"("title");

-- AddForeignKey
ALTER TABLE "public"."CareerOnProfile" ADD CONSTRAINT "CareerOnProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CareerOnProfile" ADD CONSTRAINT "CareerOnProfile_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
