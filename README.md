# My Portfolio

This repository hosts the source code for [@diegofelipece](https://github.com/diegofelipece)’s portfolio website [diegoesteves.ink](https://diegoesteves.ink).

As a developer, I find it useful to keep this as a public repository, so anyone interested can take a look at my code.

Over the years, I’ve had several different portfolio websites — and at some point, I even considered not having one anymore. As I transitioned from design to development, it became harder to visually showcase my work, and I noticed that many developers don’t even maintain personal portfolios. Still, I realized it’s part of who I am, and a simple way to express a bit of my identity and skills.

For this version, I decided to focus on two main goals: keeping hosting costs low and maintaining a simple structure for updates and maintenance. In the end, I chose to build a static website using Next.js — which was actually my first project with the framework. I also decided not to use any CMS, since I’m the one who updates the site myself, and given that portfolio updates aren’t that frequent, I’m still happy with that choice.

Hope you like it!

---

## Getting Started

First, run the development server:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The site is exported to static files in `out/` and deployed to GitHub Pages by
`.github/workflows/pages.yml`. Pull requests to `master` validate the static
build without publishing it. Only pushes to `master` publish the site, built
for the root of `diegoesteves.ink`.

The workflow adds the custom-domain `CNAME` file only to production builds.
Before moving DNS away from DigitalOcean, verify the production Pages
deployment, configure
the production Pages domain, and update the DNS records. Keep the existing DNS
values available for rollback until the new domain is confirmed to work.

### DNS cutover

The `diegoesteves.ink` DNS zone currently points to DigitalOcean (`178.62.53.48`).
After adding and verifying `diegoesteves.ink` in the repository's Pages settings
and deploying from `master`, update the DNS zone:

- Replace the apex (`@`) A record with GitHub Pages' four A records:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and
  `185.199.111.153`.
- Optionally add the four GitHub Pages AAAA records for IPv6:
  `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and
  `2606:50c0:8003::153`.
- Optionally point `www` to `diegofelipece.github.io` with a CNAME record.
- Remove conflicting old apex A/AAAA and `www` records that point to the old
  host. Do not change the zone's nameservers.

Verify the new records with `dig diegoesteves.ink A` and
`dig www.diegoesteves.ink CNAME`, then enable HTTPS in Pages when it becomes
available. DNS propagation can take up to 24 hours. Keep the old DigitalOcean
IP and records noted so they can be restored if rollback is needed.