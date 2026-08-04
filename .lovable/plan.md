# Static rebuild of the Tyche Ventures homepage

Rebuild tycheventures.com's homepage as a clean, self-contained page that matches the original look, using the 2021 Wayback capture as the reference for the header and footer (which are broken on the live site today). Everything else — copy, logo, colors, images — comes from the current live site.

## Scope

- Homepage only.
- All images and the logo are downloaded and hosted inside the project, so the page keeps working if the WordPress site goes away.
- No contact form (the site has none). All buttons and menu links keep their existing behaviour and point to the same URLs on tycheventures.com.

## Sections to reproduce, in order

1. Header — logo, main navigation (Home, About, Services, Work, Blog, Contact), "Get A Quote" button, sticky on scroll, hamburger menu on mobile. Rebuilt from the archived version so it renders correctly.
2. Hero — "Welcome to / Tyche Ventures", rotating tagline ("Building…"), Get A Quote button, banner illustration.
3. Four value cards — 100% Customer Satisfaction, Reasonable Pricing, Quality Solutions, Skilled and Experienced Team.
4. Services — six cards with icons (Website Design & Development, LMS, E-Commerce, Job Portal, SEO, Digital Marketing), plus View All and Get A Quote buttons.
5. Featured Projects — six project tiles (Luxe Luck, Chanakya Mandal Pariwar, Mahendra Jewellers, Top Somali Jobs, Dietitian Sheetal, Hureo) linking to their existing pages, plus View All.
6. Counters — Jobs Completed, Clients, Satisfaction %, Years of Experience, animating up when scrolled into view.
7. Who Trusted Us — eleven client logos, each linking out to the client site.
8. Our Client Says — testimonial slider with photo, quote, name and company.
9. Footer — rebuilt from the archive: about blurb, quick links, services links, contact details, social icons, copyright bar.

## Look and feel

The existing palette and typography are carried over: dark navy headings, light-blue/teal accent, white and very light grey section backgrounds, generous section padding, serif-spaced wordmark in the hero, sans-serif body. Cards keep their soft border and subtle shadow treatment.

Corrections made where the original is broken or clumsy: proper responsive behaviour at tablet and phone widths, consistent section spacing, accessible alt text and link labels, and working header/footer layout instead of the current broken ones.

## Technical notes

- Delivered as a single page at `/` in this project (`src/routes/index.tsx`) with styling driven by design tokens in `src/styles.css` — no WordPress, no plugins, no jQuery.
- Images pulled from tycheventures.com/wp-content and the Wayback capture, stored as project assets and referenced locally.
- Small amounts of client-side JS only for the mobile menu, count-up numbers, and testimonial slider.
- Page metadata (title, description, social preview tags) set for the homepage.

## Not included

Inner pages (Services, Work, About, Contact, Get A Quote, project case studies) — those links still go to the current WordPress site. Say the word if you want those converted next.
