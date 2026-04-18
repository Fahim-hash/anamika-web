import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - experimental ব্লক ছাড়া সরাসরি ব্যবহারের চেষ্টা
  allowedDevOrigins: ['192.168.0.102'],
};

export default nextConfig;