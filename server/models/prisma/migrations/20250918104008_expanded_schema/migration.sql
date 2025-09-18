-- CreateTable
CREATE TABLE "public"."Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "age" INTEGER,
    "sex" TEXT,
    "location" TEXT,
    "classLevel" TEXT,
    "category" TEXT,
    "careerGoals" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Interest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Passion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Passion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillOnProfile" (
    "profileId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillOnProfile_pkey" PRIMARY KEY ("profileId","skillId")
);

-- CreateTable
CREATE TABLE "public"."InterestOnProfile" (
    "profileId" INTEGER NOT NULL,
    "interestId" INTEGER NOT NULL,

    CONSTRAINT "InterestOnProfile_pkey" PRIMARY KEY ("profileId","interestId")
);

-- CreateTable
CREATE TABLE "public"."PassionOnProfile" (
    "profileId" INTEGER NOT NULL,
    "passionId" INTEGER NOT NULL,

    CONSTRAINT "PassionOnProfile_pkey" PRIMARY KEY ("profileId","passionId")
);

-- CreateTable
CREATE TABLE "public"."AptitudeTest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "dateTaken" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "scores" JSONB NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "AptitudeTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Degree" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "field" TEXT NOT NULL,

    CONSTRAINT "Degree_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DegreeOnCollege" (
    "collegeId" INTEGER NOT NULL,
    "degreeId" INTEGER NOT NULL,

    CONSTRAINT "DegreeOnCollege_pkey" PRIMARY KEY ("collegeId","degreeId")
);

-- CreateTable
CREATE TABLE "public"."Career" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "salary" INTEGER,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillOnCareer" (
    "careerId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillOnCareer_pkey" PRIMARY KEY ("careerId","skillId")
);

-- CreateTable
CREATE TABLE "public"."CareerOnDegree" (
    "careerId" INTEGER NOT NULL,
    "degreeId" INTEGER NOT NULL,

    CONSTRAINT "CareerOnDegree_pkey" PRIMARY KEY ("careerId","degreeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "public"."Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "public"."Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Interest_name_key" ON "public"."Interest"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Passion_name_key" ON "public"."Passion"("name");

-- AddForeignKey
ALTER TABLE "public"."Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillOnProfile" ADD CONSTRAINT "SkillOnProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillOnProfile" ADD CONSTRAINT "SkillOnProfile_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "public"."Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InterestOnProfile" ADD CONSTRAINT "InterestOnProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InterestOnProfile" ADD CONSTRAINT "InterestOnProfile_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "public"."Interest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PassionOnProfile" ADD CONSTRAINT "PassionOnProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PassionOnProfile" ADD CONSTRAINT "PassionOnProfile_passionId_fkey" FOREIGN KEY ("passionId") REFERENCES "public"."Passion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AptitudeTest" ADD CONSTRAINT "AptitudeTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DegreeOnCollege" ADD CONSTRAINT "DegreeOnCollege_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "public"."College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DegreeOnCollege" ADD CONSTRAINT "DegreeOnCollege_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "public"."Degree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillOnCareer" ADD CONSTRAINT "SkillOnCareer_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillOnCareer" ADD CONSTRAINT "SkillOnCareer_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "public"."Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CareerOnDegree" ADD CONSTRAINT "CareerOnDegree_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CareerOnDegree" ADD CONSTRAINT "CareerOnDegree_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "public"."Degree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
