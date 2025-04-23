# OceanVoyage GitHub Pages Site

This is the GitHub Pages site for the OceanVoyage project. It uses Jekyll with the Cayman theme to showcase the project.

## Local Development

To run this site locally:

1. Install Ruby and Bundler
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the local server
5. Visit `http://localhost:4000/travel3` in your browser

## Theme Customization

The site uses the Cayman theme. To customize the theme:

1. Create a `assets/css/style.scss` file with the following content:

```scss
---
---

@import "{{ site.theme }}";

// Add your custom CSS here
```

2. Add your custom CSS to the file

## Adding Content

To add new pages:

1. Create a new Markdown file in the root directory
2. Add the following front matter to the top of the file:

```yaml
---
layout: default
title: Your Page Title
---
```

3. Add your content below the front matter

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.
