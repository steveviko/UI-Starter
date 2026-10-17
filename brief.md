
Implement a complete, responsive landing page for a modern online learning platform based on the supplied reference screenshot and UI specification.

### Visual direction

Recreate the reference's friendly, premium educational aesthetic. Use a blue-gradient hero, a prominent learner portrait with layered circular artwork, floating trust badges, image-led course categories, an asymmetric platform-benefits section, compact popular-course cards, a horizontal learner-story carousel, a clean FAQ accordion, an illustrated final call to action, and a dark multi-column footer.

Preserve the reference's overall section order, visual hierarchy, generous whitespace, rounded surfaces, compact metadata, and strong contrast between the hero, light content sections, pale-blue course section, closing CTA, and dark footer.

### Design token rules

Use the supplied JSONC specification as the source of truth for design tokens and layout decisions.

- Maintain exactly two core color palettes: primary blue and secondary sky blue.
- Use neutral grays and separately defined accent colors for text, surfaces, borders, ratings, status indicators, and decorative artwork.
- Centralize color, typography, spacing, radius, shadow, and motion values in reusable tokens.
- Use semantic surface and text tokens rather than hardcoded colors throughout components.
- Support complete light and dark themes. Keep the blue brand identity in both modes.
- Keep photography, course artwork, portraits, and decorative illustrations visually consistent.
- Follow the supplied typography hierarchy and spacing scale.
- Apply the specified hover, focus, active, selected, and disabled states consistently.
- Avoid introducing unnecessary colors, excessive shadows, heavy borders, or inconsistent corner radii.

### Responsive layout

Follow the supplied breakpoint definitions and adapt the page from narrow mobile screens to large desktop displays.

Keep the layout mobile-first. Collapse navigation appropriately, resize the hero portrait and decorations, reposition floating badges, adapt category and course grids, preserve touch-friendly horizontal carousels, constrain the FAQ width, and stack footer groups on narrow screens.

Use a centered content container with a readable maximum width. Prevent accidental horizontal page overflow. Preserve the intended visual composition rather than merely reducing element sizes.

### Component behavior

Make navigation, course search, category selection, course filtering, enrollment actions, carousel controls, testimonial playback, FAQ accordions, theme switching, and newsletter submission functional.

Use consistent reusable components for cards, buttons, badges, section headings, filters, metadata rows, and interactive controls. Provide clear keyboard focus states, accessible labels, meaningful image alternatives, readable contrast, and reduced-motion support.

### Final quality

Match the reference's visual character without relying on its exact screenshot dimensions. Keep text hierarchy, card alignment, image cropping, spacing, and section transitions consistent. Ensure that both themes look deliberately designed, all interactive controls behave correctly, and every section remains readable and visually balanced at every supported viewport width.
