export const ThemeTokens = {
  '--theme-primary-main': '#cc3300',
  '--theme-primary-hover': '#cc6b4b',
  '--theme-primary-contrast': '#fff',
  
  '--theme-secondary-main': '#555555',
  
  '--theme-bg-default': '#fff',
  '--theme-bg-paper': '#f4f4f4',
  
  '--theme-text-primary': '#555555',
  
  '--theme-font-body': "'Ubuntu', sans-serif",
  '--theme-font-header': "'Philosopher', sans-serif",
  
  '--theme-button-radius': '200px'
};

/**
 * Injects the exact values of ThemeTokens back into the global CSS scope (:root),
 * allowing any vanilla CSS or SCSS code to gracefully fetch variables using var(--theme-...).
 */
export function injectThemeVariables() {
  const rootStyle = document.documentElement.style;
  for (const [key, value] of Object.entries(ThemeTokens)) {
    rootStyle.setProperty(key, value);
  }
}
