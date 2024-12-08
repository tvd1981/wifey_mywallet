import { sqliteTable, text, integer, real} from "drizzle-orm/sqlite-core";
// Users table - lưu thông tin người dùng từ Telegram
export const users = sqliteTable("users", {
  id: integer("id").primaryKey(), // auto-increment
  telegramId: text("telegram_id").notNull().unique(),
  username: text("username"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  language: text("language").default("vi"),
  timezone: text("timezone").default("Asia/Ho_Chi_Minh"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

// Categories table - danh mục thu chi
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // income/expense
  icon: text("icon"),
  color: text("color"),
  userId: integer("user_id"), // null = public category, có giá trị = private category
  isDefault: integer("is_default", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

// Wallets table - ví tiền
export const wallets = sqliteTable("wallets", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  balance: real("balance").notNull().default(0),
  currency: text("currency").notNull().default("VND"),
  icon: text("icon"),
  color: text("color"),
  userId: integer("user_id").notNull(),
  isDefault: integer("is_default", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

// Transactions table - giao dịch thu chi
export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey(),
  amount: real("amount").notNull(),
  type: text("type").notNull(), // income/expense/transfer
  note: text("note"),
  categoryId: integer("category_id"),
  walletId: integer("wallet_id").notNull(),
  userId: integer("user_id").notNull(),
  messageId: integer("message_id"), // ID của tin nhắn trong Telegram
  chatId: integer("chat_id"), // ID của private chat trong Telegram
  date: integer("date", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

// Budgets table - ngân sách
export const budgets = sqliteTable("budgets", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  amount: real("amount").notNull(),
  spent: real("spent").notNull().default(0),
  startDate: integer("start_date", { mode: "timestamp" }).notNull(),
  endDate: integer("end_date", { mode: "timestamp" }).notNull(),
  categoryId: integer("category_id"),
  userId: integer("user_id").notNull(),
  isRecurring: integer("is_recurring", { mode: "boolean" }).default(false),
  recurringType: text("recurring_type"), // monthly/yearly
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

// Bảng thống kê giao dịch theo ngày
export const dailyTransactionStats = sqliteTable("daily_transaction_stats", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").notNull(),
  walletId: integer("wallet_id").notNull(),
  date: text("date").notNull(), // Format: YYYY-MM-DD
  totalIncome: real("total_income").notNull().default(0),
  totalExpense: real("total_expense").notNull().default(0),
  balance: real("balance").notNull().default(0),
});

// Bảng thống kê giao dịch theo tháng
export const monthlyTransactionStats = sqliteTable("monthly_transaction_stats", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").notNull(),
  walletId: integer("wallet_id").notNull(),
  yearMonth: text("year_month").notNull(), // Format: YYYY-MM
  totalIncome: real("total_income").notNull().default(0),
  totalExpense: real("total_expense").notNull().default(0),
  balance: real("balance").notNull().default(0),
});

// Bảng thống kê giao dịch theo năm
export const yearlyTransactionStats = sqliteTable("yearly_transaction_stats", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").notNull(),
  walletId: integer("wallet_id").notNull(),
  year: text("year").notNull(), // Format: YYYY
  totalIncome: real("total_income").notNull().default(0),
  totalExpense: real("total_expense").notNull().default(0),
  balance: real("balance").notNull().default(0),
});

// SQL để tạo triggers
export const createTriggers = `
-- Trigger cập nhật số dư ví khi thêm giao dịch
CREATE TRIGGER IF NOT EXISTS after_transaction_insert
AFTER INSERT ON transactions
BEGIN
  UPDATE wallets 
  SET balance = balance + 
    CASE 
      WHEN NEW.type = 'income' THEN NEW.amount
      WHEN NEW.type = 'expense' THEN -NEW.amount
      ELSE 0
    END
  WHERE id = NEW.wallet_id;

  -- Cập nhật daily stats
  INSERT INTO daily_transaction_stats (user_id, wallet_id, date, total_income, total_expense, balance)
  VALUES (
    NEW.user_id,
    NEW.wallet_id,
    date(NEW.date, 'unixepoch'),
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END
  )
  ON CONFLICT(user_id, wallet_id, date) DO UPDATE SET
    total_income = total_income + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    total_expense = total_expense + CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    balance = balance + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END;

  -- Cập nhật monthly stats
  INSERT INTO monthly_transaction_stats (user_id, wallet_id, year_month, total_income, total_expense, balance)
  VALUES (
    NEW.user_id,
    NEW.wallet_id,
    strftime('%Y-%m', NEW.date, 'unixepoch'),
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END
  )
  ON CONFLICT(user_id, wallet_id, year_month) DO UPDATE SET
    total_income = total_income + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    total_expense = total_expense + CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    balance = balance + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END;

  -- Cập nhật yearly stats
  INSERT INTO yearly_transaction_stats (user_id, wallet_id, year, total_income, total_expense, balance)
  VALUES (
    NEW.user_id,
    NEW.wallet_id,
    strftime('%Y', NEW.date, 'unixepoch'),
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END
  )
  ON CONFLICT(user_id, wallet_id, year) DO UPDATE SET
    total_income = total_income + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    total_expense = total_expense + CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    balance = balance + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END;
END;

-- Trigger cập nhật số dư ví khi xóa giao dịch
CREATE TRIGGER IF NOT EXISTS after_transaction_delete
AFTER DELETE ON transactions
BEGIN
  UPDATE wallets 
  SET balance = balance - 
    CASE 
      WHEN OLD.type = 'income' THEN OLD.amount
      WHEN OLD.type = 'expense' THEN -OLD.amount
      ELSE 0
    END
  WHERE id = OLD.wallet_id;

  -- Cập nhật daily stats
  UPDATE daily_transaction_stats
  SET total_income = total_income - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE 0 END,
      total_expense = total_expense - CASE WHEN OLD.type = 'expense' THEN OLD.amount ELSE 0 END,
      balance = balance - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE -OLD.amount END
  WHERE user_id = OLD.user_id AND wallet_id = OLD.wallet_id AND date = date(OLD.date, 'unixepoch');

  -- Cập nhật monthly stats
  UPDATE monthly_transaction_stats
  SET total_income = total_income - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE 0 END,
      total_expense = total_expense - CASE WHEN OLD.type = 'expense' THEN OLD.amount ELSE 0 END,
      balance = balance - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE -OLD.amount END
  WHERE user_id = OLD.user_id AND wallet_id = OLD.wallet_id AND year_month = strftime('%Y-%m', OLD.date, 'unixepoch');

  -- Cập nhật yearly stats
  UPDATE yearly_transaction_stats
  SET total_income = total_income - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE 0 END,
      total_expense = total_expense - CASE WHEN OLD.type = 'expense' THEN OLD.amount ELSE 0 END,
      balance = balance - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE -OLD.amount END
  WHERE user_id = OLD.user_id AND wallet_id = OLD.wallet_id AND year = strftime('%Y', OLD.date, 'unixepoch');
END;

-- Trigger cập nhật số dư ví khi sửa giao dịch
CREATE TRIGGER IF NOT EXISTS after_transaction_update
AFTER UPDATE ON transactions
BEGIN
  -- Cập nhật số dư ví
  UPDATE wallets 
  SET balance = balance - 
    CASE 
      WHEN OLD.type = 'income' THEN OLD.amount
      WHEN OLD.type = 'expense' THEN -OLD.amount
      ELSE 0
    END + 
    CASE 
      WHEN NEW.type = 'income' THEN NEW.amount
      WHEN NEW.type = 'expense' THEN -NEW.amount
      ELSE 0
    END
  WHERE id = NEW.wallet_id;

  -- Cập nhật daily stats cho ngày cũ
  UPDATE daily_transaction_stats
  SET total_income = total_income - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE 0 END,
      total_expense = total_expense - CASE WHEN OLD.type = 'expense' THEN OLD.amount ELSE 0 END,
      balance = balance - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE -OLD.amount END
  WHERE user_id = OLD.user_id AND wallet_id = OLD.wallet_id AND date = date(OLD.date, 'unixepoch');

  -- Cập nhật daily stats cho ngày mới
  INSERT INTO daily_transaction_stats (user_id, wallet_id, date, total_income, total_expense, balance)
  VALUES (
    NEW.user_id,
    NEW.wallet_id,
    date(NEW.date, 'unixepoch'),
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END
  )
  ON CONFLICT(user_id, wallet_id, date) DO UPDATE SET
    total_income = total_income + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    total_expense = total_expense + CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    balance = balance + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END;

  -- Cập nhật monthly stats cho tháng cũ
  UPDATE monthly_transaction_stats
  SET total_income = total_income - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE 0 END,
      total_expense = total_expense - CASE WHEN OLD.type = 'expense' THEN OLD.amount ELSE 0 END,
      balance = balance - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE -OLD.amount END
  WHERE user_id = OLD.user_id AND wallet_id = OLD.wallet_id AND year_month = strftime('%Y-%m', OLD.date, 'unixepoch');

  -- Cập nhật monthly stats cho tháng mới
  INSERT INTO monthly_transaction_stats (user_id, wallet_id, year_month, total_income, total_expense, balance)
  VALUES (
    NEW.user_id,
    NEW.wallet_id,
    strftime('%Y-%m', NEW.date, 'unixepoch'),
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END
  )
  ON CONFLICT(user_id, wallet_id, year_month) DO UPDATE SET
    total_income = total_income + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    total_expense = total_expense + CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    balance = balance + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END;

  -- Cập nhật yearly stats cho năm cũ
  UPDATE yearly_transaction_stats
  SET total_income = total_income - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE 0 END,
      total_expense = total_expense - CASE WHEN OLD.type = 'expense' THEN OLD.amount ELSE 0 END,
      balance = balance - CASE WHEN OLD.type = 'income' THEN OLD.amount ELSE -OLD.amount END
  WHERE user_id = OLD.user_id AND wallet_id = OLD.wallet_id AND year = strftime('%Y', OLD.date, 'unixepoch');

  -- Cập nhật yearly stats cho năm mới
  INSERT INTO yearly_transaction_stats (user_id, wallet_id, year, total_income, total_expense, balance)
  VALUES (
    NEW.user_id,
    NEW.wallet_id,
    strftime('%Y', NEW.date, 'unixepoch'),
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END
  )
  ON CONFLICT(user_id, wallet_id, year) DO UPDATE SET
    total_income = total_income + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE 0 END,
    total_expense = total_expense + CASE WHEN NEW.type = 'expense' THEN NEW.amount ELSE 0 END,
    balance = balance + CASE WHEN NEW.type = 'income' THEN NEW.amount ELSE -NEW.amount END;
END;

-- Trigger cập nhật số tiền đã chi trong ngân sách
CREATE TRIGGER IF NOT EXISTS after_transaction_budget_update
AFTER INSERT ON transactions
WHEN NEW.type = 'expense' AND NEW.category_id IS NOT NULL
BEGIN
  UPDATE budgets 
  SET spent = spent + NEW.amount
  WHERE category_id = NEW.category_id 
    AND NEW.date BETWEEN start_date AND end_date
    AND user_id = NEW.user_id;
END;
`;