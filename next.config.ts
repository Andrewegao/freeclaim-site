import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/support.html", destination: "/support", permanent: true },
    ];
  },
};

export default config;
