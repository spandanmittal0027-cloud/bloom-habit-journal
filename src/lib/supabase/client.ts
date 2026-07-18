import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/supabase/types";

// A page like the dashboard renders 10+ habit cards, each of which used to
// call createClient() independently — that's 10+ separate Supabase client
// instances (and auth listeners) doing the same job. Keeping one instance
// per browser tab avoids that duplicate setup work.
let browserClient: ReturnType<typeof createBrowserClient<Database>> | undefined;

/**
 * Supabase client for use in Client Components ("use client").
 * Reads the session from cookies on the browser side. Returns the same
 * instance on every call within a tab.
 */
export function createClient() {
  if (!browserClient) {
    browserClient = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return browserClient;
}
