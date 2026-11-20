# WordPress Conversion

This branch (`wordpress-woocommerce`) carries the WordPress version of Jollof Factory, replacing the static Astro site.

## What's here

- `wp-content/themes/jollof-factory/` — the full custom **block theme** (WordPress.com Studio scaffold + this build). Copy this folder into a WordPress install's `wp-content/themes/` to reproduce the site.
- `DESIGN.md` — the design system the theme's `theme.json` is generated from (colors, type, spacing, components, imagery treatment).

## The local Studio site

The running WordPress install lives at `~/Studio/jollof-factory` (Studio app site "Jollof Factory", http://localhost:8882). The theme folder there is the live copy — keep it in sync with this repo's copy.

## Stack

- **Block theme** — every page (Home, Recipes, Our Story) is standard Gutenberg page content; the header/footer are Site Editor template parts; templates include `page-no-title` for the designed pages.
- **WooCommerce** — the shop, product, cart, checkout and my-account pages use Woo's default block templates. Products are real WooCommerce products (Products → Add new), and the shop grid is driven by `woocommerce/product-collection`.
- **WooCommerce Stripe Gateway** — installed and enabled in test mode. **API keys still need to be pasted in:** WooCommerce → Settings → Payments → Stripe (add test or live publishable/secret keys, then toggle live when ready). The original hosted Stripe payment link is no longer used.
- Header cart: `woocommerce/mini-cart` block with a live item count + drawer.

## Adding content

- **New products**: Products → Add New in wp-admin. They appear on `/shop` and in the "New in store" section automatically.
- **New recipes**: edit the Recipes page in the editor — each recipe is a neo card section; give the outer group an anchor (`#slug`) to make homepage cards link to it.
- **Styling**: everything starts from `DESIGN.md` / `theme.json` (palette slugs: primary, secondary, accent, background, dark, neutral). Hard offset shadows and rotations live in `style.css` as block style variations (`Neo Card`, `Sticker`, `Ghost Number`, `Marker Quote`, `Lead`).
