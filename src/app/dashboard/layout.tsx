import { redirect } from "next/navigation";
import { getCurrentUser, getCurrentProfile } from "@/lib/supabase/queries";
import { Sidebar } from "@/components/dashboard/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const profile = await getCurrentProfile(user.id);

  if (!profile?.onboarding_complete) {
    redirect("/onboarding");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-cream sm:flex-row">
      <Sidebar name={profile.name ?? "friend"} />
      <div className="flex-1 px-4 pb-16 pt-4 sm:px-8 sm:pt-8">{children}</div>
    </div>
  );
}
