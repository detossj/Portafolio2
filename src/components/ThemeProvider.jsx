import usePortfolioStore from '@/stores/portfolioStore';
import React, { useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const theme = usePortfolioStore((state) => state.theme);

  useEffect(() => {
    if (theme?.colors) {
        const root = document.documentElement;
        root.style.setProperty('--color-brand-primary', theme.colors.primary);
        root.style.setProperty('--color-brand-secondary', theme.colors.secondary);
        root.style.setProperty('--color-brand-bg', theme.colors.background);
        root.style.setProperty('--color-brand-surface', theme.colors.surface);
        root.style.setProperty('--color-brand-surface-alt', theme.colors.surfaceAlt);
        root.style.setProperty('--color-brand-border', theme.colors.border);
        root.style.setProperty('--color-brand-text-primary', theme.colors.textPrimary);
        root.style.setProperty('--color-brand-text-secondary', theme.colors.textSecondary);
        root.style.setProperty('--color-brand-text-muted', theme.colors.textMuted);
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;