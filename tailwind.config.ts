import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 赛博朋克配色
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          yellow: '#ffff00',
          green: '#39ff14',
        },
        cyber: {
          bg: '#000000',
          card: '#0a0a0a',
          border: 'rgba(0, 255, 255, 0.2)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff',
        'neon-pink': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff',
        'neon-sm': '0 0 5px #00ffff, 0 0 10px #00ffff',
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'glitch': 'glitch 2s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '-2px' },
          '100%': { top: '100vh' },
        },
        glitch: {
          '0%, 100%': { textShadow: '2px 0 #ff00ff, -2px 0 #00ffff' },
          '25%': { textShadow: '-2px -2px #ff00ff, 2px 2px #00ffff' },
          '50%': { textShadow: '2px 2px #ff00ff, -2px -2px #00ffff' },
          '75%': { textShadow: '-2px 0 #ff00ff, 2px 0 #00ffff' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
