"use client";

import { useState } from "react";
import ThemeLoader from "../theme-loader";

const themes = ["teal", "blue", "green", "dark", "cyan"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("teal");

  return (
    <>
      <ThemeLoader theme={theme} />

      <div className="fixed bottom-6 right-6 bg-white shadow-soft p-3 rounded-xl border border-neutral-200 z-50">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-neutral-50"
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
