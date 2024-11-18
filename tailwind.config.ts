import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
} satisfies Config;
