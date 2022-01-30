/*
  Warnings:

  - You are about to drop the column `tite` on the `topics` table. All the data in the column will be lost.
  - Added the required column `title` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `topics` DROP COLUMN `tite`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
