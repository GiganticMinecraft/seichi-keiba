-- CreateTable
CREATE TABLE `News` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `contents` VARCHAR(191) NOT NULL,
    `closed_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `last_updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `News_title_key`(`title`),
    UNIQUE INDEX `News_title_contents_key`(`title`, `contents`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Horse` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Horse_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jockey` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Jockey_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HorseEntry` (
    `id` VARCHAR(191) NOT NULL,
    `frame` INTEGER NOT NULL,
    `number` INTEGER NOT NULL,
    `horse_id` VARCHAR(191) NOT NULL,
    `jockey_id` VARCHAR(191) NOT NULL,
    `race_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `HorseEntry_race_id_frame_number_key`(`race_id`, `frame`, `number`),
    UNIQUE INDEX `HorseEntry_race_id_horse_id_key`(`race_id`, `horse_id`),
    UNIQUE INDEX `HorseEntry_race_id_jockey_id_key`(`race_id`, `jockey_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Race` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `order` INTEGER NOT NULL,
    `course` ENUM('TURF', 'DIRT', 'JUMP') NOT NULL,
    `distance` INTEGER NOT NULL,

    UNIQUE INDEX `Race_name_key`(`name`),
    UNIQUE INDEX `Race_date_order_key`(`date`, `order`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BettingTicket` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('WIN', 'PLACE', 'EXACTA', 'TIERCE') NOT NULL,

    UNIQUE INDEX `BettingTicket_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HorseEntry` ADD CONSTRAINT `HorseEntry_horse_id_fkey` FOREIGN KEY (`horse_id`) REFERENCES `Horse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorseEntry` ADD CONSTRAINT `HorseEntry_jockey_id_fkey` FOREIGN KEY (`jockey_id`) REFERENCES `Jockey`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorseEntry` ADD CONSTRAINT `HorseEntry_race_id_fkey` FOREIGN KEY (`race_id`) REFERENCES `Race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
