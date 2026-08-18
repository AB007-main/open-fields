# Infrastructure

## Supabase

| | Project | Ref | Region | State |
|---|---|---|---|---|
| Dev | `open-fields-dev` | `sqkruohkklljftgkmxrp` | us-east-1 | schema applied |
| Prod | `open-fields-prod` | not created | us-east-1 | blocked, see below |

API URL (dev): `https://sqkruohkklljftgkmxrp.supabase.co`

The anon key is not committed. Pull it from the Supabase dashboard into
`.env.local`, which is gitignored.

### Prod is blocked

The Supabase free tier allows 2 active projects per organization. The org
already has `wedding-planner`, and `open-fields-dev` is the second. Creating
prod needs one of:

1. Upgrade the org to Pro, about 25 dollars a month, which also buys daily
   backups and no auto pausing. This is the right answer before real users.
2. Pause `wedding-planner` if it is finished with.
3. Stay on dev only until closer to launch.

Nothing here needs prod until we are ready to put real fields in front of
real people, so option 3 is fine for now.

## Schema

Applied to dev in three migrations:

1. `open_fields_core_schema` tables, enums, PostGIS, indexes, updated_at triggers
2. `open_fields_rls_and_functions` RLS policies, signup trigger, `fields_nearby()`
3. `lock_down_definer_functions` revokes REST access to trigger only functions

Tables: `profiles` `fields` `field_reports` `field_conditions` `comments`
`ratings` `photos` `claims` `favorites` `admins`

### Design notes

- `field_reports` and `field_conditions` are separate on purpose. Whether the
  goals exist and whether the field is playable today are different questions
  with different decay rates.
- `fields.status` gates everything. RLS lets the public read `approved` and
  `closed` only, so pending submissions are invisible until a human approves
  them. Verified: an anonymous session sees 1 of 2 rows when one is pending.
- Anonymous inserts are rejected by RLS. Verified.
- Signed in users can insert a field only as `status = 'pending'` and only
  with `created_by = auth.uid()`.
- `is_admin()` reads the `admins` email allowlist. Policies call it, so
  `authenticated` keeps EXECUTE; `anon` does not need it and has it revoked.
- `fields_nearby()` is SECURITY INVOKER, so it respects RLS rather than
  bypassing it. Verified: it excludes pending fields.

### Known advisor warnings, accepted

- `spatial_ref_sys` has no RLS. It is a PostGIS system table of coordinate
  reference systems, owned by the extension, and cannot have RLS enabled
  without superuser. It holds no user data.
- `postgis` and `citext` are installed in `public`. Moving PostGIS out is not
  supported by `ALTER EXTENSION SET SCHEMA` and would mean dropping the
  extension, which would drop the `location` column. Not worth it.
- `st_estimatedextent` is a PostGIS builtin marked SECURITY DEFINER. Not ours.

## Vercel

Team: `austinbradley-5154s-projects` (`team_dGfeyEKq2h2NhxlnngjaMlf9`)

Project creation is currently refused with 403. The connector appears to be
scoped to the existing `amori` project rather than all projects. See the
repo README for the fix.

## GitHub

`AB007-main/open-fields`, private. Remote uses https with the gh credential
helper because ssh host key verification is not set up on this machine.
