import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Only ships the specific icons/components actually imported from these
    // packages instead of bundling the whole library into every page.
    optimizePackageImports: ["framer-motion", "recharts", "lucide-react"],
  },
};

export default nextConfig;
