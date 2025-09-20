/*
  Warnings:

  - You are about to drop the `CareerOnProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CareerOnProfile" DROP CONSTRAINT "CareerOnProfile_careerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CareerOnProfile" DROP CONSTRAINT "CareerOnProfile_profileId_fkey";

-- DropTable
DROP TABLE "public"."CareerOnProfile";

-- CreateTable
CREATE TABLE "public"."InterestOnCareer" (
    "careerId" INTEGER NOT NULL,
    "interestId" INTEGER NOT NULL,

    CONSTRAINT "InterestOnCareer_pkey" PRIMARY KEY ("careerId","interestId")
);

-- AddForeignKey
ALTER TABLE "public"."InterestOnCareer" ADD CONSTRAINT "InterestOnCareer_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InterestOnCareer" ADD CONSTRAINT "InterestOnCareer_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "public"."Interest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
