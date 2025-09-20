// prisma/seed.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  // Create Interests
  await prisma.interest.createMany({
    data: [
      { name: "stem" },
      { name: "medicine" },
      { name: "research" },
      { name: "biotechnology" },
      { name: "business" },
      { name: "finance" },
      { name: "marketing" },
      { name: "entreprenuership" },
      { name: "economics" },
      { name: "literature" },
      { name: "history" },
      { name: "psychology" },
      { name: "sociology" },
      { name: "philosophy" },
      { name: "technology" },
      { name: "design" },
      { name: "education" },
      { name: "law" },
      { name: "government" },
      { name: "healthcare" },
    ],
    skipDuplicates: true,
  })

  //Create Skills

  await prisma.skill.createMany({
    data: [
      { name: "problem solving" },
      { name: "communication" },
      { name: "leadership" },
      { name: "teamwork" },
      { name: "creativity" },
      { name: "critical thinking" },
      { name: "time management" },
      { name: "adaptability" },
      { name: "research" },
      { name: "writing" },
      { name: "programming" },
      { name: "data analysis" },
      { name: "design" },
      { name: "public speaking" },
      { name: "mathematics" },
    ],
    skipDuplicates: true,
  })

  console.log("Database seeded!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })