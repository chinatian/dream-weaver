/*
  Warnings:

  - You are about to drop the `PlayerStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Scene` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Story` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "PlayerStats" DROP CONSTRAINT "PlayerStats_storyId_fkey";

-- DropForeignKey
ALTER TABLE "Scene" DROP CONSTRAINT "Scene_storyId_fkey";

-- DropTable
DROP TABLE "PlayerStats";

-- DropTable
DROP TABLE "Scene";

-- DropTable
DROP TABLE "Story";

-- CreateTable
CREATE TABLE "stories" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "introduction" VARCHAR(500),
    "coverImage" TEXT,
    "userId" BIGINT NOT NULL,
    "prompt" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "language" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stories_pkey" PRIMARY KEY ("id")
);
