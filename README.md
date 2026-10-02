# Amery IT Homepage v6

This rebuild follows the client-approved HOME section of the supplied Word document.

Included in order:
1. Hero + Free IT Health Check CTA
2. Technology Should Make Your Working Day Easier
3. IT Support That Begins and Ends With Your Business + five principles
4. What Our Clients Say
5. Certifications (designer direction says to use certification icons from the previous website)
6. How We Support Your Business + six services + Explore Our Services
7. Straightforward Support Means No-Nonsense Pricing + three standard packages
8. Getting Started is Easy + three steps + Get Started
9. Your Questions Answered + all seven homepage FAQs
10. Contact form + Free IT Health Check sidebar

Animation:
- JavaScript sets `.js` in the document head, so reveal styles only hide content when JS is actually available.
- IntersectionObserver reveals each section once as it enters view.
- Cards use staggered delays.
- Hero content animates on page load.
- Hero image has subtle requestAnimationFrame parallax.
- prefers-reduced-motion disables motion cleanly.

Copy:
- Visible homepage marketing copy is kept to the client-approved HOME copy.
- Certification names are based on the client's existing website because the Word document explicitly instructs the designer to use certification icons from the previous website.


## v7 founder story
Added the client-approved `Why I Built Amery IT` section with Greg Sheppard's full founder quote. It appears after the business-principles section and before testimonials, and inherits the existing JavaScript scroll-reveal behavior through `data-reveal`.


## v8 revision
- Preserved every core homepage component from v6/v7.
- Reworked the founder story into a cleaner editorial split instead of an oversized quote card.
- Replaced placeholder certification chips with the actual certification/award artwork shown on the current Amery IT website reference.
- Replaced generic service symbols with the corresponding current-site icon artwork/style:
  - IT Support
  - Cyber Security
  - Cloud / Microsoft, Apple & Google
  - Networks & Wi-Fi
  - Cyber Essentials
  - Backup & Business Continuity uses a matching custom green cloud/backup icon because the current-site reference does not provide a directly corresponding backup icon.


## v9
- Removed all CSS drop-shadow filters from certification badges and service icons.
- Rebuilt the certification strip as a clean premium framed rail.
- Service icons are background-cleaned and integrated directly into cards.
- Reworked the five principles with modern inline SVG icons and a more stable blue/green/yellow icon system.
- Rebuilt testimonials as an auto-advancing horizontal carousel using only the four client-approved testimonials, with multiple placeholder business images.
- Reworked the founder section into an editorial layout without using an unverified third-party portrait. Greg Sheppard's official Amery IT/LinkedIn profiles were located, but no founder photo was scraped into the design.
- Added left, right and up scroll-reveal variations instead of one repeated fade-up motion.


## v10
- Getting Started rebuilt as a connected premium three-step process rail, emphasizing only wording already present in the approved copy.
- All six service icons are now inline SVG and visually aligned with the current Amery IT site's service categories.
- Certification section simplified into a clean trust strip with balanced whitespace and no drop shadows.
- Client stories are now a smaller text-only sequential rotator using the four approved testimonials.
- Founder note no longer uses the misaligned avatar/initial icon.
- Technology intro now uses a premium structured panel without adding new marketing copy.
- Hero eyebrow remains one line on large desktop and wraps responsively below 1100px.


## v11
- Swapped About and Pricing in the desktop navigation so nav order matches the page flow.
- Certifications now use a plain white section with a simple `Certifications` heading and restrained framed logo cells.
- Client stories are substantially shorter and use a compact text-only sequential layout, optimized for mobile.
- Pricing was rebuilt visually for conversion: stronger hierarchy, premium slate background, elevated cards, and a more prominent Half Board card—without introducing any new pricing copy or unsupported sales claims.


## v12
- Certification logos now sit directly on a plain white section without individual borders/cards.
- Certification heading uses a restrained gold underline instead of the previous dash element.
- Client stories use tighter, consistent typography; the longest Lucy Edgar quote automatically uses a smaller size for balance.
- Contact form now has a clear `Send Enquiry` CTA button.


## v14 — stable rebuild from v12
This version intentionally starts from the working v12 package.

Changes only:
- fade-up reveal animation only
- fail-safe motion system: content is visible by default and is only hidden after JS initializes successfully
- 1.8-second reveal fallback prevents blank sections if IntersectionObserver behaves unexpectedly
- functional mobile hamburger menu
- redesigned FAQ with softer animated open/close motion
- improved certification alignment on mobile

No other v12 page sections were rebuilt.
