-- Reader comments for guides. Anonymous visitors can read approved comments
-- and submit new ones, which stay 'pending' until approved in the dashboard.

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  guide_slug text not null check (char_length(guide_slug) between 1 and 200),
  author_name text not null check (char_length(author_name) between 1 and 60),
  body text not null check (char_length(body) between 1 and 2000),
  status text not null default 'pending' check (status in ('pending', 'approved')),
  created_at timestamptz not null default now()
);

create index comments_guide_slug_status_idx
  on public.comments (guide_slug, status, created_at);

alter table public.comments enable row level security;

-- Data API access is explicit: anon can only SELECT and INSERT.
revoke all on public.comments from anon, authenticated;
grant select, insert on public.comments to anon;

create policy "Anyone can read approved comments"
  on public.comments for select
  to anon
  using (status = 'approved');

create policy "Anyone can submit a pending comment"
  on public.comments for insert
  to anon
  with check (status = 'pending');
