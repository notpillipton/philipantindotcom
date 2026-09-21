import { test, expect, Page } from '@playwright/test';

const LIVE_URL = 'https://philipantin.com';
const LOCAL_URL = 'http://localhost:4200';

/**
 * Crawls a target site via client-side SPA navigation to avoid origin rate limits (429)
 */
async function crawlSiteData(page: Page, baseUrl: string) {
  // 1. Home / About Page
  await page.goto(`${baseUrl}/`);
  await expect(page.locator('#bio')).toBeVisible({ timeout: 20000 });

  const navButtons = (await page.locator('.desktop-nav button').allInnerTexts())
    .map((t) => t.trim().toUpperCase())
    .filter((t) => t && !t.includes('EN') && !t.includes('ES') && !t.includes('FR'));

  const heroSubtitle = (await page.locator('.MuiTypography-h5').first().innerText()).trim();
  const bioHeading = (await page.locator('#bio .MuiTypography-h3').first().innerText()).trim();

  const bioParagraphs = (await page.locator('#bio .MuiTypography-body1').allInnerTexts())
    .map((t) => t.trim());

  const assetTitles = (await page.locator('#bio .MuiGrid-root .MuiTypography-h3').allInnerTexts())
    .map((t) => t.trim());

  const assetDescriptions = (await page.locator('#bio .MuiGrid-root .MuiTypography-body2').allInnerTexts())
    .map((t) => t.trim());

  const footerLinks = (await page.locator('footer a').allInnerTexts())
    .map((t) => t.trim());

  const footerCopyright = (await page.locator('footer .MuiTypography-body2').innerText()).trim();

  // 2. Navigate client-side to Competencies
  await page.locator('.desktop-nav button:has-text("COMPETENCIES")').click();
  await expect(page.locator('#competencies')).toBeVisible({ timeout: 15000 });

  const compHeading = (await page.locator('#competencies .MuiTypography-h1').innerText()).trim();
  const compSubtitle = (await page.locator('#competencies .MuiTypography-body1').innerText()).trim();
  const compBackBtn = (await page.locator('#competencies button').first().innerText()).trim();

  // 3. Navigate client-side to Past / Time Warp
  await page.locator('.desktop-nav button:has-text("TIME WARP")').click();
  await expect(page.locator('#past')).toBeVisible({ timeout: 15000 });

  const pastHeadings = (await page.locator('#past .MuiTypography-h4').allInnerTexts())
    .map((t) => t.trim());

  const pastParagraphs = (await page.locator('#past .MuiTypography-body1').allInnerTexts())
    .map((t) => t.trim());

  const pastArchiveBtn = (await page.locator('#past a[href*="archive"]').innerText()).trim();

  // 4. Open Contact Modal
  await page.locator('.desktop-nav button:has-text("CONTACT PHILIP")').click();
  await expect(page.locator('mat-dialog-container')).toBeVisible({ timeout: 15000 });

  const contactTitle = (await page.locator('mat-dialog-container .title-text').innerText()).trim();
  const contactLabels = (await page.locator('mat-dialog-container .label-col').allInnerTexts())
    .map((t) => t.trim());
  const contactActions = (await page.locator('mat-dialog-container mat-dialog-actions button').allInnerTexts())
    .map((t) => t.trim());

  // Close dialog
  await page.locator('mat-dialog-container button:has-text("Cancel")').click();

  return {
    home: {
      navButtons,
      heroSubtitle,
      bioHeading,
      bioParagraphs,
      assetTitles,
      assetDescriptions,
      footerLinks,
      footerCopyright,
    },
    competencies: {
      heading: compHeading,
      subtitle: compSubtitle,
      backBtn: compBackBtn,
    },
    past: {
      headings: pastHeadings,
      paragraphs: pastParagraphs,
      archiveBtn: pastArchiveBtn,
    },
    contact: {
      title: contactTitle,
      labels: contactLabels,
      actions: contactActions,
    },
  };
}

test.describe('i18n English-Fidelity & Multi-Language Verification', () => {
  test('English version matches live production site https://philipantin.com verbatim', async ({ browser }) => {
    const liveContext = await browser.newContext();
    const livePage = await liveContext.newPage();

    const localContext = await browser.newContext();
    const localPage = await localContext.newPage();

    try {
      const liveData = await crawlSiteData(livePage, LIVE_URL);
      const localData = await crawlSiteData(localPage, LOCAL_URL);

      // 1. Verify Home Page Content
      expect(localData.home.heroSubtitle, 'Hero subtitle must match live site').toBe(liveData.home.heroSubtitle);
      expect(localData.home.bioHeading, 'Bio heading must match live site').toBe(liveData.home.bioHeading);
      expect(localData.home.bioParagraphs, 'Bio paragraphs must match live site').toEqual(liveData.home.bioParagraphs);
      expect(localData.home.assetTitles, 'Asset card titles must match live site').toEqual(liveData.home.assetTitles);
      expect(localData.home.assetDescriptions, 'Asset card descriptions must match live site').toEqual(liveData.home.assetDescriptions);
      expect(localData.home.footerLinks, 'Footer links must match live site').toEqual(liveData.home.footerLinks);
      expect(localData.home.footerCopyright, 'Footer copyright must match live site').toBe(liveData.home.footerCopyright);

      // 2. Verify Competencies Content
      expect(localData.competencies.heading, 'Competencies heading must match live site').toBe(liveData.competencies.heading);
      expect(localData.competencies.subtitle, 'Competencies subtitle must match live site').toBe(liveData.competencies.subtitle);
      expect(localData.competencies.backBtn, 'Competencies back button must match live site').toBe(liveData.competencies.backBtn);

      // 3. Verify Past / Time Warp Content
      expect(localData.past.headings, 'Past section headings must match live site').toEqual(liveData.past.headings);
      expect(localData.past.paragraphs, 'Past paragraphs must match live site').toEqual(liveData.past.paragraphs);
      expect(localData.past.archiveBtn, 'Past archive button must match live site').toBe(liveData.past.archiveBtn);

      // 4. Verify Contact Dialog
      expect(localData.contact.title, 'Contact title must match live site').toBe(liveData.contact.title);
      expect(localData.contact.labels, 'Contact labels must match live site').toEqual(liveData.contact.labels);
      expect(localData.contact.actions, 'Contact actions must match live site').toEqual(liveData.contact.actions);
    } finally {
      await liveContext.close();
      await localContext.close();
    }
  });

  test('Switching to Spanish and French translates across Angular shell and React remote', async ({ page }) => {
    await page.goto(`${LOCAL_URL}/`);
    await expect(page.locator('#bio')).toBeVisible({ timeout: 15000 });

    // Open language menu and switch to Spanish
    await page.locator('.lang-btn').click();
    await page.locator('button:has-text("Español")').click();

    // Verify Spanish translations in Angular shell & React remote
    await expect(page.locator('.desktop-nav button').first()).toContainText('ACERCA DE PHILIP');
    await expect(page.locator('#bio .MuiTypography-h3').first()).toContainText('¿Quién es Philip? ¿Qué puede hacer?');
    await expect(page.locator('text=Aprendiz insaciable. Comunicador eficaz.')).toBeVisible();

    // Open language menu and switch to French
    await page.locator('.lang-btn').click();
    await page.locator('button:has-text("Français")').click();

    // Verify French translations in Angular shell & React remote
    await expect(page.locator('.desktop-nav button').first()).toContainText('À PROPOS DE PHILIP');
    await expect(page.locator('#bio .MuiTypography-h3').first()).toContainText('Qui est Philip ? Que peut-il faire ?');
    await expect(page.locator('text=Apprenant insatiable. Communicateur efficace.')).toBeVisible();
  });
});
