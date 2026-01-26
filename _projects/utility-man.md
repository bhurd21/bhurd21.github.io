---
title: Utility Man
description: A Chrome web extension that automatically solves Immaculate Grid puzzles using data from the Sean Lahman baseball database.
image: /assets/images/utility-man.png
link: https://github.com/bhurd21/utility_man
chrome_extension: https://chromewebstore.google.com/detail/utility-man/odpgppmidhpfpjdkoikeheciidiokomd
date: 2024-01-15
---

I am notoriously bad at **[Immaculate Grid](https://www.sports-reference.com/immaculate-grid/)**. My brain just isn't wired to recall obscure players on command. However, my brain _is_ wired to build tools that can help me out.

### The Data Challenge

Baseball data is notoriously difficult to access; most of the "good stuff" is hidden behind expensive subscriptions. The **[Lahman Database](https://sabr.org/lahman-database/)** stands out as a premier free resource, offering incredible depth and longevity. With records dating back to the 1800s, it not only provides the schema to solve around **75%** of all Immaculate Grid questions, but just as important, it contains enough raw data to generate multiple results per cell.

### Mapping the Grid

An Immaculate Grid cell is created by intersecting two of these five question types:
- **Team:** (e.g., Yankees, Red Sox, Cubs)
- **Stat:** (e.g., 300+ HR, 3000+ Hits, 20+ Wins)
- **Position:** (e.g., Pitcher, Catcher, First Base)
- **Award:** (e.g., MVP, Cy Young, Gold Glove)
- **Player Bio:** (e.g., Hall of Fame, Born outside the US)

While the Lahman database handles Team, Stat, and Position questions perfectly, it has gaps in more obscure "Player Bio" or "Award" categories. Specifically, data like WAR thresholds or amateur draft data are not included in the Lahman database.

### Bridging the Gap with TDD

By joining additional datasets into the original database, I improved the answer rate of my API from 75% to **98%** of all possible Immaculate Grid questions.

Scaling from 75% to 98% was a fun exercise in **Test-Driven Development (TDD)**. I scraped old puzzles and ran them through my API, marking a cell as "passed" if it returned a non-empty response. This approach quickly surfaced the gaps I needed to fill.

### Adding a Front End

To interface with the grid, I built a **Chrome Extension**. Google's extension framework makes it straightforward to read the page's DOM and trigger external API calls.

By scraping the aria-labels of each cell on the Immaculate Grid site, the extension sends the criteria to my API and receives a list of qualifying players. I then inject these results directly into the UI as list elements. The result is a seamless experience where the answers appear as a menu of options.

### The Result

Below is a video of the Chrome extension in action, achieving a **rarity score of 0**—the perfect Immaculate Grid.

<!-- videos -->
<div class="space-y-8">
  <figure>
    <video controls class="w-full max-w-md mx-auto rounded-lg shadow" src="/assets/images/download_promo_skinny.mp4"></video>
    <figcaption class="text-center text-gray-600 mt-2 italic">An immaculate grid!</figcaption>
  </figure>

  <figure>
    <video controls class="w-full max-w-md mx-auto rounded-lg shadow" src="/assets/images/thirty_second_zero_skinny.mp4"></video>
    <figcaption class="text-center text-gray-600 mt-2 italic">He's always ready on the bench</figcaption>
  </figure>
</div>
