# Deployment Guide

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Automatic Deployment

The site automatically deploys when you push to the `main` branch. The deployment workflow (`.github/workflows/deploy.yml`) will:

1. Build the Jekyll site
2. Optimize CSS with PurgeCSS
3. Deploy to GitHub Pages

## 📋 Pre-Deployment Checklist

- [x] ✅ URL updated in `_config.yml`: `https://samkomo.github.io`
- [x] ✅ Base URL configured: `/personal-website`
- [x] ✅ GitHub Actions workflow configured
- [x] ✅ All changes committed and pushed

## 🔧 GitHub Pages Setup

1. **Enable GitHub Pages:**

   - Go to your repository: `https://github.com/samkomo/personal-website`
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Verify Deployment:**
   - After pushing to `main`, check the **Actions** tab
   - The deployment workflow should run automatically
   - Once complete, your site will be available at: `https://samkomo.github.io/`

## 🌐 Custom Domain (Optional)

If you want to use a custom domain (e.g., `samuelkarumba.com`):

1. **Add CNAME file:**

   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Update DNS:**

   - Add a CNAME record pointing to `samkomo.github.io`
   - Or add A records for GitHub Pages IPs

3. **Update `_config.yml`:**
   ```yaml
   url: https://yourdomain.com
   baseurl: "" # Empty for root domain
   ```

## 🔍 Manual Deployment

If you need to manually trigger deployment:

1. Go to **Actions** tab in GitHub
2. Select **Deploy site** workflow
3. Click **Run workflow** → **Run workflow**

## 📝 Build Verification

To test the production build locally:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site` directory.

## ⚠️ Troubleshooting

- **Build fails:** Check the Actions tab for error logs
- **Site not updating:** Clear browser cache or wait a few minutes
- **Images not loading:** Ensure ImageMagick is installed in CI (already configured)
- **CSS issues:** PurgeCSS runs automatically in the workflow

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [al-folio Theme](https://github.com/alshedivat/al-folio)
