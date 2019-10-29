---
title: '9Dashboard'
date: '2019-09-22'
description: 'Hackathon project creating a Apple News style dashboard / reader for Nine / Fairfax content internally.'
image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
github: 'https://github.com/Jacknes/9dashboard'
published: true
---

9Dashboard is a minimalist interface designed for use internally with Nine. Built for a Nine hackathon.

This idea came about in a post Nine-Fairfax merger world. My team functioned very closely to how Fairfax handles their publishing technologies and accordingly my team was transferred, and along with all of Fairfax we formed 'Nine Publishing'.

This was pretty cool, we were exposed to a large number of new teams, new verticals and products to explore. One problem cropped up however - it was hard to keep up to date with everything we wrote and published. Apple and Google provided news curation tools, but ultimately this led to other news sources leaking in.

So, how do we fix this problem? What type of product could we build for an upcoming hackathon that would actually translate some business value to Nine, or just be cool to make.

9Dashboard! or Dashy for those who know it intimately. Our target space was the highly sought after new tab. What if we could build a lightweight, minimal and elegant news reader for the now massive Nine publishing network.

![light](https://i.imgur.com/XrTsZ7l.png)

So that's what we did. This glorified Create React App massaged the Nine Network data (9News, nine.com.au, WWOS, Honey network) and Fairfax verticals (SMH, AFR) into a neat, easy to use clean reader. Although ads are a big part of our business, for an internal user removing the side bar, ads, related content and videos would allow staff to keep up to date with everything we put out. Our goal was the keep the experience simple, but to allow users to quickly jump from vertical to vertical, story to story during their working day and beyond.

![home](https://i.imgur.com/96uPODX.png)

As this was the first combined hackathon we had competed in as Nine Publishing, we also hoped that a unified news reader could help develop a unified culture, both work and social.

![vertical](https://i.imgur.com/u6GdSUv.png)

Technology wise, we used React and Styled Components to pull together a statically rendered single page app that leveraged the existing REST and GraphQL endpoints. We also borrowed our 9Press (The fully custom CMS my team has built) theme allowing us to do cool things like... _dark mode!_

![dark](https://i.imgur.com/zUIXdMT.png)

And unfortunately, a banana mode, the theme of the hack and a feature that awarded our only success, "best use of banana". Sometimes I wonder where it all went wrong, and the banana mode is always where I land.

![banana](https://i.imgur.com/4i39PEg.png)

We also added a 'focused' mode for a fullscreen engaging reading experience, and also because it was easy to implement and looked cool for the demo.

![home](https://i.imgur.com/xKF66az.png)

But yeah, that's what we did. I think it's cool, and I hope that after I work more closely with some of the legacy Fairfax teams in the next few months I'll have more insight and experience to pull it together into a real internal product.

We also had some cool ideas about how this product could be extended to provide even more value:

-   Real time analytics to help editors track which content is performing well.
-   Ads?! If we wanted to release a clean news reader (imo a really cool idea), we could always sneak an ad or two and a paywall in their to keep revenue up.

9Dashboard was built by Jack Pascoe and Paul Noble. Designed by Tom Winter.
