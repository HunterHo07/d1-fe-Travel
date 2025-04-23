# Setting Up GitHub Pages for OceanVoyage

This guide will walk you through the process of setting up GitHub Pages for the OceanVoyage project.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Your project pushed to a GitHub repository

## Steps to Deploy to GitHub Pages

1. **Push your code to GitHub**

   If you haven't already, push your code to GitHub:

   ```bash
   git add .
   git commit -m "Add Jekyll for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings**

   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select the branch you want to deploy (usually `main`)
   - Click "Save"

3. **Choose a theme (optional)**

   - In the GitHub Pages section of your repository settings
   - Click on "Choose a theme"
   - Select the Cayman theme (or any other theme you prefer)
   - Click "Select theme"

4. **Wait for deployment**

   - GitHub will now build and deploy your site
   - This may take a few minutes
   - Once deployed, you'll see a message saying "Your site is published at https://yourusername.github.io/travel3/"

5. **Visit your site**

   - Go to the URL provided in the GitHub Pages section
   - Your site should now be live!

## Customizing Your Site

You can customize your site by editing the following files:

- `_config.yml`: Configure site-wide settings
- `assets/css/style.scss`: Customize the theme's CSS
- `_layouts/default.html`: Customize the layout
- `index.md`: Edit the main content of your site

## Troubleshooting

If your site doesn't appear or looks incorrect:

1. Check the GitHub Pages settings to make sure it's enabled
2. Look at the build logs for any errors
3. Make sure your repository is public
4. Ensure you have the correct files in your repository
5. Wait a few minutes for changes to propagate

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Cayman Theme Documentation](https://github.com/pages-themes/cayman)
