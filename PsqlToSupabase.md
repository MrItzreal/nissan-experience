# How to Migrate a Specific PostgreSQL Schema to Supabase

This guide details the process of exporting a single schema (**cars_details**) from a local PostgreSQL database and importing it into a new Supabase project.

---

## Step 1: Export the Local Schema using `pg_dump`

The first goal is to create a backup file (`.dump`) that contains _only_ the schema we want to migrate, not the entire database.

We used the `pg_dump` utility with specific flags:

- `-Fc`: Specifies the custom format, which is flexible and efficient.
- `-h localhost`: The host of our local database.
- `-U postgres`: The user for our local database.
- `-d nissan_experience`: The specific local database to connect to.
- `-p 5432`: The port for our local database.
- `-n cars_details`: **(Crucial)** This flag tells `pg_dump` to _only_ dump the schema named `cars_details`.
- `-f ~/Desktop/cars_details_backup.dump`: Specifies the full path and name for the output file, saving it to the Desktop.

### Mac/Linux `PATH` Issue

We discovered that `pg_dump` wasn't in the system's default `PATH`. To solve this, we used the full, absolute path to the executable.

**Final Export Command:**

```bash
/Library/PostgreSQL/17/bin/pg_dump -Fc -h localhost -U postgres -d nissan_experience -p 5432 -n cars_details -f ~/Desktop/cars_details_backup.dump
```

_(This command prompted for the local postgres password and created `cars_details_backup.dump` on the Desktop.)_

---

## Step 2: Get Supabase Database Credentials

Before we could restore, we needed the connection info for the new Supabase project.

1. Navigated to the **Supabase Project Dashboard**.
2. Went to **Project Settings** (gear icon) > **Database**.
3. Copied the **Host**, **Database name** (`postgres`), **User** (`postgres`), **Port** (`5432`), and **Password**.

---

## Step 3: Restore the Schema to Supabase using `pg_restore`

Next, we used the `pg_restore` utility to import our `.dump` file into the Supabase database.

- `--no-owner`: **(Important)** This prevents `pg_restore` from trying to set the table owner to our old local user (`postgres`), which would cause permission errors in Supabase.
- `--clean`: This tells `pg_restore` to first try to DROP (delete) any existing objects with the same name before creating them.
- `-h ...`: The host copied from Supabase settings.
- `-U postgres`: The user for the Supabase database.
- `-d postgres`: The name of the Supabase database.
- `-p 5432`: The port for the Supabase database.
- `cars_details_backup.dump`: The name of our backup file.

### Mac/Linux `PATH` Issue

Just like `pg_dump`, `pg_restore` was not in the `PATH`, so we used its full path. We also made sure we were in the directory containing the dump file (`cd ~/Desktop`).

**Final Restore Command:**

```bash
/Library/PostgreSQL/17/bin/pg_restore --no-owner --clean -h db.<.SUPABASE HOST.>.supabase.co -U postgres -d postgres -p 5432 cars_details_backup.dump
```

_(This command prompted for the Supabase database password.)_

---

## Step 4: Verify the Migration

After running the restore, we saw many `ERROR: schema "cars_details" does not exist` messages.

This was **expected behavior**. The `--clean` flag tried to delete the schema and tables before creating them. Since the schema didn't exist yet, these "errors" were logged, and `pg_restore` proceeded to create the schema and tables successfully.

**Verification:** We went to the **Table Editor** in the Supabase dashboard and confirmed that the `cars_details` schema and all its tables/data were present.

---

## Step 5: Expose the New Schema to the Supabase API

The final problem was that the tables were visible in the Table Editor but not in the main Dashboard visualizer. This is because the dashboard only shows schemas that are exposed to the API.

### Part A: Update API Settings

1. Went to **Project Settings** > **API**.
2. Scrolled to **Exposed schemas**.
3. Added `cars_details` to the list (alongside `public`, `storage`, etc.).
4. Clicked **Save**.

### Part B: Grant Permissions via SQL

Exposing the schema isn't enough; the API roles need permission to access it.

1. Went to the **SQL Editor** in the Supabase dashboard.
2. Ran the following queries to grant usage and table permissions to the standard Supabase roles (`anon`, `authenticated`, `service_role`).

```sql
-- 1. Grant usage rights on the schema
GRANT USAGE ON SCHEMA cars_details
TO anon, authenticated, service_role;

-- 2. Grant all permissions on existing and future tables in the schema
GRANT ALL ON ALL TABLES IN SCHEMA cars_details
TO anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA cars_details
GRANT ALL ON TABLES TO anon, authenticated, service_role;
```

After these steps, the migration was complete, and the `cars_details` tables appeared in the Supabase dashboard visualizer.

```

```
