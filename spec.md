# SDS Pallathingal Landing Page

## Current State
New project. No existing application.

## Requested Changes (Diff)

### Add
- Full landing page for SDS PALLATHINGAL premium Kerala snacks brand
- Hero section with tagline 'Enjoy your tea with our snacks' and 'Shop Now' CTA
- Product gallery with 5 products: Unniyappam, Fried Banana, Moong Ball, Parippuvada, Elayada
- Each product card with name, description (tradition/premium quality), and 'Buy Now' button
- Buy Now links to WhatsApp +919747307370 with pre-filled order message per product
- Footer with About Us section (authentic Kerala snacks) and contact details
- Generated food photography images for each product

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Generate AI food images for each of the 5 products
2. Build single-page React frontend with:
   - Sticky navbar with brand name
   - Hero section (full-height, dark bg, gold headline, CTA button)
   - Products section (grid of 5 cards with image, name, description, Buy Now button)
   - Footer with About Us and contact info
3. WhatsApp redirect logic: open `https://wa.me/919747307370?text=Hi+SDS+PALLATHINGAL...` on Buy Now click
4. Visual theme: black/deep charcoal background, gold (#D4AF37 or similar) accents, elegant typography
