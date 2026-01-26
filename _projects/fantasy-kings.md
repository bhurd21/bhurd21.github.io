---
title: Fantasy Kings
description: A Rails 8 web app that combines fantasy football with sports betting.
image: /assets/images/fantasy-kings.png
link: https://github.com/bhurd21/fantasy-kings
date: 2024-03-20
---

**Fantasy Kings** lets my friends and me experience sports betting without losing real money. Everyone gets a simulated **$10 weekly allowance** to bet on live NFL odds.

I built it as a greenfield Rails 8 project using Hotwire, Stimulus, and Kamal for deployment. A scheduled pipeline syncs odds from _[The Odds API](https://the-odds-api.com/)_ into local models to stay under rate limits.

### Living with the App

Building it was only half the battle. I maintained the app throughout the football season, pushing continuous updates, tweaking the UI, and shipping hotfixes to keep the "bookie" running smoothly.

### The Result

I finished 2nd out of 4. The fact that not even the winner "broke even" serves as a perfect proof of concept for why we keep the stakes at zero!

<p class="text-center text-gray-500 text-sm mt-2">Swipe or scroll to view all screens</p>
<!-- screenshots -->
<div class="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 -mx-4 px-4">
  <div class="snap-center shrink-0">
    <img src="/assets/images/fantasy-kings-login.PNG" alt="Login screen" class="h-[500px] rounded-lg shadow">
  </div>
  <div class="snap-center shrink-0">
    <img src="/assets/images/fantasy-kings-home.PNG" alt="Home screen" class="h-[500px] rounded-lg shadow">
  </div>
  <div class="snap-center shrink-0">
    <img src="/assets/images/fantasy-kings-week.PNG" alt="Weekly view" class="h-[500px] rounded-lg shadow">
  </div>
  <div class="snap-center shrink-0">
    <img src="/assets/images/fantasy-kings-leaderboard.PNG" alt="Leaderboard" class="h-[500px] rounded-lg shadow">
  </div>
  <div class="snap-center shrink-0">
    <img src="/assets/images/fantasy-kings-profile.PNG" alt="Profile" class="h-[500px] rounded-lg shadow">
  </div>
</div>
