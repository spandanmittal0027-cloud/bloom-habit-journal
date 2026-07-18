import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

/**
 * auth.getUser() is a real network round-trip to Supabase's auth server —
 * not a free local check. Every dashboard route was calling it once in
 * `dashboard/layout.tsx` AND again in its own `page.tsx`, doubling that
 * round-trip on every single page load. Wrapping it in React's `cache()`
 * means every Server Component in the same request that calls this gets
 * the same result without hitting the network twice.
 */
export const getCurrentUser = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

/**
 * Same idea for the profile row — the layout needs `name` +
 * `onboarding_complete`, the dashboard page needs `name` + `daily_goal`,
 * settings needs everything. Fetching the full row once per request and
 * sharing it avoids two near-identical `profiles` queries per route.
 */
export const getCurrentProfile = cache(async (userId: string) => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  return data;
});
