/*
  Warnings:

  - Added the required column `content` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "slug" TEXT NOT NULL;
