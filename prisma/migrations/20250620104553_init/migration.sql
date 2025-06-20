-- CreateTable
CREATE TABLE "Story" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "currentScene" TEXT NOT NULL,
    "sceneImage" TEXT NOT NULL,
    "task" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" SERIAL NOT NULL,
    "storyId" INTEGER NOT NULL,
    "description" JSONB NOT NULL,
    "options" JSONB NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerStats" (
    "id" SERIAL NOT NULL,
    "storyId" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "energy" INTEGER NOT NULL,
    "inspiration" INTEGER NOT NULL,

    CONSTRAINT "PlayerStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerStats_storyId_key" ON "PlayerStats"("storyId");

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerStats" ADD CONSTRAINT "PlayerStats_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
