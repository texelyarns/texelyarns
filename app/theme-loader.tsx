"use client";

import { useEffect } from "react";

export default function ThemeLoader({ theme = "teal" }) {
  useEffect(() => {
    async function loadTheme() {
      const data = await import(`./theme/${theme}.json`);
      const root = document.documentElement;

      root.style.setProperty("--theme-brand-primary", data.brandPrimary);
      root.style.setProperty("--theme-brand-primary-light", data.brandPrimaryLight);
      root.style.setProperty("--theme-brand-primary-dark", data.brandPrimaryDark);

      root.style.setProperty("--theme-brand-secondary", data.brandSecondary);
      root.style.setProperty("--theme-brand-secondary-light", data.brandSecondaryLight);
      root.style.setProperty("--theme-brand-secondary-dark", data.brandSecondaryDark);
    }

    loadTheme();
  }, [theme]);

  return null;
}
