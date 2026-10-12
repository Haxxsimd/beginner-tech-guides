# beginner-tech-guides
My new website

 # Beginner Tech Guides: Project Brief

*Brainstorm notes, 2026-10-12. Status: idea stage, not yet committed.*

## The idea in one paragraph
A trustworthy, free website that teaches beginners and older people practical tech, DIY and "it's less scary than you think" skills. Short social videos draw people in. The site builds trust with honest guides and no tricks. A cheap paid tier offers longer, step-by-step video guides for people who want to go deeper.

## Why me
I like teaching and I'm good at making people listen when I explain computers, PCBs, Raspberry Pi/Arduino and embedded things. My message is that you don't need to be a genius, rich, or hire a technician to try things, and that valuable things online aren't always behind a trial or paywall.

I can put in 4-6 hours a day, sometimes more. Besides income, this is a way to use my knowledge and skills for something real, build a portfolio, and support my mental health.

## Audience
- Beginners and older, non-technical people, mainly in Sweden to start.
- Curious but put off by topics that feel too advanced or scary: AI, crypto, the dark web, home servers, BIOS.
- They are cautious and have seen plenty of scams, so trust is the product.

## Example hooks and guides
- Run a small home server for your photos instead of paying for iCloud.
- Enter the BIOS: the PC will not explode.
- Everyday tips and tricks, DIY with cheap parts (Raspberry Pi, Arduino).
- Explain AI, crypto and the dark web safely: how they work and what to watch out for.

## Funnel
1. **Social (Facebook, YouTube, then TikTok/Instagram):** short, hooky clips.
2. **Free website (the hub):** written guides, images and short videos. No paywall, no trial, no scam feel.
3. **Paid tier (optional, cheap):** longer step-by-step video guides, offered after trust is built.

## Goals
- **Primary:** real income, even if modest. I have no job, so this matters.
- **Minimum:** cover running costs.
- **Impact:** people feel it's useful and trustworthy, and come back curious.

## Principles
- **Trust first.** No dark patterns, no fake urgency, no bait-and-switch.
- **Teach and warn, don't promise income.** Show how things work and what to watch out for. Income claims are restricted under Swedish/EU marketing law and look like scam marketing to this audience.
- **Keep dark web and crypto content educational and safety-first.**
- **Accessible design:** large text, few steps per screen, simple navigation, and a written or PDF version next to each video.
- **Near-zero fixed costs** until the first sales: free or cheap tiers, nothing to maintain.

## Language and market
Swedish first, English later. The structure should allow adding English without rebuilding.

## Preliminary delivery design (not final)
- **Free site:** static site on a host with a built-in CDN (Cloudflare Pages, Vercel or Netlify). Long-cache fingerprinted assets, short TTL for HTML.
- **Free teaser videos:** posted natively on social platforms, which host them at no cost to me. A copy on the site comes from cheap CDN-backed storage.
- **Paid videos:** a managed video platform (Cloudflare Stream, Bunny Stream or Mux) that handles transcoding, global delivery and signed expiring links.
- **Payments:** Stripe, or a merchant of record (Paddle, Lemon Squeezy) that handles EU VAT. Check Swish/card options for Swedish users.
- **Flow:** payment, webhook records the purchase, backend issues a short-lived signed playback link.
- **Known limit:** signed links deter casual sharing but cannot stop screen recording. Acceptable at a low price point.
- **Cost driver:** video viewing hours, not visitor count. Check the margin per sale before choosing a price.

## Risks
- **Trust:** this audience is a scam target, so anything that looks like "get rich" content hurts the brand.
- **Legal:** income claims and consumer rules (Konsumentverket); VAT on digital sales in the EU.
- **Time:** consistent content production by one person.
- **Piracy:** paid videos can be copied.
- **Competition:** many free YouTube tutorials exist. The edge is audience fit, tone and trust.

## Open questions
- Expected volume: how many guides and buyers in the first six months?
- Price point and what exactly is paid versus free.
- Platform and tooling choices (site builder, video platform, payments).
- Do I have a name and domain yet?
- Time is settled: 4-6 hours a day. The open part is how to split it between filming, writing and building the site.

## Suggested next steps
1. Pick 3-5 launch topics and film 3 short teasers.
2. Build a minimal Swedish site on a free host with the free guides.
3. Post the teasers on Facebook/YouTube and see what response comes.
4. Only then add the paid tier, once people ask for more.
5. Return to the brainstorm to finish the design: approaches, architecture, cost math.

