CREATE TABLE `budgets` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`amount` real NOT NULL,
	`spent` real DEFAULT 0 NOT NULL,
	`start_date` integer NOT NULL,
	`end_date` integer NOT NULL,
	`category_id` integer,
	`user_id` integer NOT NULL,
	`is_recurring` integer DEFAULT false,
	`recurring_type` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`icon` text,
	`color` text,
	`user_id` integer NOT NULL,
	`is_default` integer DEFAULT false,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `daily_transaction_stats` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`wallet_id` integer NOT NULL,
	`date` text NOT NULL,
	`total_income` real DEFAULT 0 NOT NULL,
	`total_expense` real DEFAULT 0 NOT NULL,
	`balance` real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `monthly_transaction_stats` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`wallet_id` integer NOT NULL,
	`year_month` text NOT NULL,
	`total_income` real DEFAULT 0 NOT NULL,
	`total_expense` real DEFAULT 0 NOT NULL,
	`balance` real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY NOT NULL,
	`amount` real NOT NULL,
	`type` text NOT NULL,
	`note` text,
	`category_id` integer,
	`wallet_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`message_id` integer,
	`chat_id` integer,
	`date` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`telegram_id` text NOT NULL,
	`username` text,
	`first_name` text,
	`last_name` text,
	`language` text DEFAULT 'vi',
	`timezone` text DEFAULT 'Asia/Ho_Chi_Minh',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_telegram_id_unique` ON `users` (`telegram_id`);--> statement-breakpoint
CREATE TABLE `wallets` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`balance` real DEFAULT 0 NOT NULL,
	`currency` text DEFAULT 'VND' NOT NULL,
	`icon` text,
	`color` text,
	`user_id` integer NOT NULL,
	`is_default` integer DEFAULT false,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `yearly_transaction_stats` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`wallet_id` integer NOT NULL,
	`year` text NOT NULL,
	`total_income` real DEFAULT 0 NOT NULL,
	`total_expense` real DEFAULT 0 NOT NULL,
	`balance` real DEFAULT 0 NOT NULL
);
