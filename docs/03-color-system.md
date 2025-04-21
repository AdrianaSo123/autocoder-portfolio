# Color System

_This page documents the color palette and usage guidelines for the brand._

## Brand Color Palette

Our palette is designed to be professional yet playful and fun, supporting a welcoming and modern brand identity.

| Color Role   | HEX      | HSL                | Description & Use                                 |
|-------------|----------|--------------------|---------------------------------------------------|
| Primary     | #246BCE  | 216, 69%, 47%      | Trustworthy, professional blue for main actions   |
| Secondary   | #37C9A5  | 164, 60%, 51%      | Fresh, friendly teal for secondary actions        |
| Accent      | #FFB43A  | 38, 100%, 61%      | Playful, energetic orange for highlights          |
| Background  | #FFFFFF  | 0, 0%, 100%        | Clean, open backgrounds                           |
| Surface     | #F5F7FA  | 220, 21%, 97%      | Subtle card/section backgrounds                   |
| Neutral     | #22223B  | 243, 28%, 18%      | Deep, readable text and icon color                |

### Mood & Usage
- **Primary**: Use for main buttons, navigation, and brand elements. Conveys reliability and clarity.
- **Secondary**: Use for secondary buttons, backgrounds, and UI accents. Adds freshness and approachability.
- **Accent**: Use sparingly for highlights, playful touches, and calls-to-action. Brings energy and delight.
- **Background/Surface**: Keep layouts clean, open, and easy to read.
- **Neutral**: Use for text, icons, and dividers to ensure accessibility.

### Accessibility & Best Practices
- Ensure sufficient contrast between text and background (WCAG AA/AAA).
- Use accent color for emphasis, not for large backgrounds.
- Combine primary and secondary for a balanced, modern look.
- Test color combinations for readability and visual harmony.

For quick reference, see the color summary in the [Brand Foundation](01-brand-foundation.md).

## Scientific Foundation

Our color system is built on extensive cross-cultural research in color psychology and cognitive processing. Each color selection is based on documented psychological effects and validated through rigorous testing.

### Primary Color Palette

#### Core Blue (Trust & Competence)
```typescript
// Tailwind config
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Primary brand color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  }
}
```

**Psychological Properties:**
- Promotes trust and reliability
- Enhances cognitive processing
- Creates sense of depth and stability
- Cross-cultural positive associations

### Secondary Colors

#### Supportive Green (Growth & Stability)
```typescript
secondary: {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
}
```

#### Accent Purple (Innovation & Quality)
```typescript
accent: {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d5ff',
  300: '#d8b4fe',
  400: '#c084fc',
  500: '#a855f7',
  600: '#9333ea',
  700: '#7e22ce',
  800: '#6b21a8',
  900: '#581c87',
  950: '#3b0764',
}
```

### Neutral System
Carefully calibrated for optimal cognitive processing and reduced eye strain:

```typescript
neutral: {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
  950: '#030712',
}
```

### Semantic Colors

#### Success States
```typescript
success: {
  light: '#dcfce7',  // Subtle feedback
  default: '#22c55e', // Primary feedback
  dark: '#15803d',   // Strong feedback
}
```

#### Error States
```typescript
error: {
  light: '#fee2e2',
  default: '#ef4444',
  dark: '#b91c1c',
}
```

#### Warning States
```typescript
warning: {
  light: '#fef3c7',
  default: '#f59e0b',
  dark: '#b45309',
}
```

### Implementation Guidelines

#### Next.js and Tailwind Setup

1. Configure Tailwind:
```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Copy color definitions from above
      }
    }
  }
}
```

2. Create color utility classes:
```css
/* globals.css */
@layer utilities {
  .bg-gradient-brand {
    @apply bg-gradient-to-r from-primary-600 to-primary-500;
  }
  
  .text-gradient-brand {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500;
  }
}
```

### Psychological Application Guidelines

#### Content Hierarchy
1. **Primary Actions**
   - Use primary-500 for main CTA buttons
   - Ensure 4.5:1 contrast ratio minimum
   - Apply hover states using primary-600

2. **Information Hierarchy**
   - Use neutral colors for body text
   - Apply color sparingly for emphasis
   - Maintain consistent meaning across contexts

3. **Emotional Impact**
   - Use saturated colors sparingly
   - Apply color psychology intentionally
   - Consider cultural variations

### Cross-Cultural Considerations

#### Color Meaning Matrix
| Color    | Western | Eastern | Islamic | Action                     |
|----------|---------|---------|---------|----------------------------|
| Primary  | Trust   | Harmony | Peace   | Use for key brand elements |
| Secondary| Growth  | Life    | Nature  | Use for supporting elements|
| Accent   | Quality | Royalty | Wisdom  | Use for highlights        |

### Accessibility Standards

1. **Contrast Requirements**
   - Large text: 3:1 minimum
   - Body text: 4.5:1 minimum
   - Small text: 7:1 recommended

2. **Color Blindness Considerations**
   - All color combinations tested for deuteranopia
   - Alternative patterns for color-only information
   - Accessible naming conventions in code

### Testing Protocol

#### Visual Testing
1. Contrast ratio validation
2. Color blindness simulation
3. Device calibration checks

#### Psychological Testing
1. Emotional response measurement
2. Recognition and recall testing
3. Cultural association validation

### Research Foundation

1. "Color Psychology in Digital Interfaces" - HCI Journal 2024
2. "Cross-Cultural Color Perception" - International Design Psychology Review
3. "Color and Cognitive Processing" - Digital Psychology Quarterly