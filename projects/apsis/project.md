---
projectId: "apsis"
title: "Apsis"
description: "A full-stack modernization of NASA's APOD website"
technologies: ["typescript"]
githubUrl: https://github.com/jayhwkns/apsis
---
Apsis is a modernized version of NASA's [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html)
website.
NASA provides [their own API](https://github.com/nasa/apod-api) to fetch APOD
data, but the back-end doesn't implement this.
Instead, the back-end uses [Cheerio](https://cheerio.js.org/) to act as a web-scraper,
converting HTML data to markdown with frontmatter (similar to how this
portfolio site works).

I built Apsis in a week to get some practice with common full-stack technology.
I would never typically choose to run JavaScript on the back-end, even with
typescript, but it was fun just to quickly scrape something together.
