# Implementation Guide

## Project Setup

### Next.js 14 Setup

```bash
# Initial setup
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
```

### Key Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.292.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn components
│   └── shared/       # reusable components
├── styles/
│   ├── globals.css
│   └── typography.css
└── lib/
    └── utils.ts      # utility functions
```

## Configuration Files

### Tailwind Configuration

The project uses Tailwind CSS v3.3.3 which is fully compatible with Next.js 14.1.3 and our design system. Our configuration extends the base Tailwind setup with custom theme values derived from our design system documentation.

```typescript
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Uses class strategy for dark mode toggling
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'], // Dynamic font loading
        mono: ['var(--font-mono)', 'monospace'], // IBM Plex Mono
        heading: ['var(--font-mono)', 'monospace'], // Used for brand typography
      },
      colors: {
        // Core Brand Colors - Complete color scale for gradient creation
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          // ...complete color scale
        },
        accent: {
          // ...complete color scale
        },
        neutral: {
          // ...complete grayscale
        },
        
        // Semantic Colors - For contextual meaning
        success: {
          light: '#dcfce7',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        error: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        
        // System Colors - Theme-aware using CSS variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Border radius system follows the design system's radius scale
      borderRadius: {
        lg: "var(--radius)",  // 0.5rem by default
        md: "calc(var(--radius) - 2px)", // 0.375rem
        sm: "calc(var(--radius) - 4px)", // 0.25rem
      },
      
      // Container configuration for consistent layouts
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px", // Max container width
        },
      },
    },
  },
  plugins: [],
}
```

#### CSS Variables Implementation

Our theme uses CSS variables for dynamic theming support, implemented in `globals.css`:

```css
@layer base {
  :root {
    /* Color Palette Variables (HSL format for theme flexibility) */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 201 96% 32%;
    --primary-foreground: 210 40% 98%;
    --secondary: 142 72% 29%;
    --secondary-foreground: 210 40% 98%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 270 95% 75%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 201 96% 32%;
    --radius: 0.5rem;
  }

  .dark {
    /* Dark mode overrides */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ...additional dark mode variables */
  }
}
```

## Implementation Checklist

### 1. Typography Implementation

1. Install Inter font:
```typescript
// layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

2. Apply base typography styles:
```css
/* globals.css */
@layer base {
  :root {
    --font-sans: 'Inter var';
  }

  body {
    @apply text-base text-gray-900 leading-relaxed;
  }

  h1 {
    @apply text-4xl font-semibold tracking-tight lg:text-5xl;
  }
  /* ...other typography styles */
}
```

### 2. Color System Implementation

1. Define color variables:
```css
/* globals.css */
@layer base {
  :root {
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* ...other color variables */
  }
}
```

2. Create color utility classes:
```css
/* globals.css */
@layer utilities {
  .gradient-brand {
    @apply bg-gradient-to-r from-primary-600 to-primary-500;
  }
}
```

### 3. Component Implementation

#### Example Button Component
```typescript
// components/ui/button.tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
        // ...other variants
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

## Testing Protocol

### 1. Visual Regression Testing
- Use tools like Chromatic or Percy
- Test across breakpoints
- Validate color contrast
- Check typography scaling

### 2. Accessibility Testing
- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader compatibility
- Color contrast validation

### 3. Performance Testing
- Lighthouse metrics
- Core Web Vitals
- Bundle size analysis
- Runtime performance

### 4. Psychological Testing
- User interaction recording
- Heat map analysis
- Eye-tracking studies
- A/B testing key components

## Quality Assurance Checklist

### Typography
- [ ] Font loading optimization
- [ ] Responsive type scaling
- [ ] Line length constraints
- [ ] Proper hierarchy implementation

### Colors
- [ ] Contrast ratios met
- [ ] Color blindness testing
- [ ] Dark mode compatibility
- [ ] System color preferences

### Layout
- [ ] Responsive breakpoints
- [ ] Grid system implementation
- [ ] Spacing consistency
- [ ] Container queries where needed

### Components
- [ ] Accessibility compliance
- [ ] Interaction states
- [ ] Loading states
- [ ] Error handling

## Maintenance Guidelines

### 1. Version Control
- Use semantic versioning
- Document breaking changes
- Maintain changelog
- Tag releases

### 2. Documentation
- Keep design tokens updated
- Document component variants
- Maintain usage examples
- Update testing protocols

### 3. Performance Monitoring
- Track Core Web Vitals
- Monitor bundle sizes
- Analyze runtime performance
- Test new browser versions

### 4. Accessibility Audits
- Regular WCAG compliance checks
- Screen reader testing
- Keyboard navigation testing
- Color contrast validation

## Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Design Psychology References
- See individual system documents for specific research references
- Regular updates based on new research findings
- Cross-reference with UX psychology studies
- Monitor industry best practices

## Project File Index

This comprehensive index documents all key files in the project, their purpose, and their key functionalities to ensure AI developers have complete context when working with the codebase.

### Configuration Files

| File | Purpose | Key Features |
|------|---------|-------------|
| **package.json** | Project dependencies and scripts | Next.js 14.1.3, React 18.2.0, Tailwind CSS 3.3.3, TypeScript 5 |
| **tsconfig.json** | TypeScript configuration | Strict mode enabled, path aliases (e.g., `@/components`) |
| **next.config.mjs** | Next.js configuration | SWC minification, image optimization, experimental features |
| **postcss.config.mjs** | PostCSS plugins | Tailwind CSS, Autoprefixer |
| **tailwind.config.mjs** | Tailwind CSS theme | Custom colors, fonts, border radius, container settings |
| **eslint.config.mjs** | ESLint rules | TypeScript, React, and Next.js specific rules |
| **components.json** | UI components config | shadcn/ui configuration for component generation |

### Application Files

| File | Purpose | Key Features |
|------|---------|-------------|
| **src/app/layout.tsx** | Root layout component | Font loading, metadata, viewport settings, HTML structure |
| **src/app/page.tsx** | Homepage component | Hero section, feature cards, call-to-action |
| **src/app/globals.css** | Global styles | CSS variables, base styles, utility classes |

### Component Files

| File | Purpose | Key Features |
|------|---------|-------------|
| **src/components/ui/button.tsx** | Button component | Variants: default, destructive, outline, ghost, link; Sizes: default, sm, lg, icon |
| **src/components/ui/card.tsx** | Card component | Subcomponents: CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| **[Additional UI components]** | Various UI elements | Follow similar patterns to Button and Card components |

### Utility Files

| File | Purpose | Key Features |
|------|---------|-------------|
| **src/lib/utils.ts** | Utility functions | `cn()`: className merging with clsx and tailwind-merge<br>`formatDate()`: Date formatting<br>`debounce()`: Function debouncing<br>`generateId()`: Random ID generation<br>`getNestedValue()`: Safe object property access |

### Documentation Files

| File | Purpose | Key Features |
|------|---------|-------------|
| **docs/01-brand-foundation.md** | Brand guidelines | Mission, values, voice, tone |
| **docs/02-typography.md** | Typography system | Font families, scales, usage guidelines |
| **docs/03-color-system.md** | Color palette | Primary, secondary, accent colors, semantic colors |
| **docs/04-spacing-layout.md** | Layout guidelines | Grid system, spacing scale, responsive breakpoints |
| **docs/05-components.md** | Component library | Component documentation, variants, accessibility |
| **docs/06-implementation.md** | Implementation guide | Technical setup, configuration, maintenance guide |

## Key Functionality Reference

This section details critical functionality implemented across the codebase to help AI developers understand the system capabilities.

### 1. Theming System

The project uses a CSS variables-based theming system that supports:

- Light/dark mode using the `class` strategy
- HSL color format for flexible opacity adjustments
- Dynamic font loading with next/font
- Consistent spacing and component sizing

```tsx
// How the theme is applied to HTML
<html lang="en" className={`${isDarkMode ? 'dark' : ''}`}>
  <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
    {children}
  </body>
</html>
```

### 2. Component Composition Pattern

Components follow a composition pattern that enables flexibility while maintaining design consistency:

```tsx
// Example usage showing composition pattern
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### 3. Utility Function System

The utils.ts file contains essential utility functions that should be used consistently:

```typescript
// Example usage of utility functions
import { cn, formatDate, debounce } from "@/lib/utils";

// Combining class names
const className = cn(
  "base-style", 
  isActive && "active-style", 
  variant === "primary" ? "primary-style" : "secondary-style"
);

// Formatting dates
const formattedDate = formatDate(new Date(), { 
  month: 'short', 
  year: 'numeric' 
});

// Debouncing event handlers
const handleResize = debounce(() => {
  // Handle resize logic
}, 200);
```

### 4. Responsive Design Pattern

The project follows a mobile-first responsive approach using Tailwind's breakpoint system:

```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text that scales across breakpoints
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Responsive grid layout
</div>
```

## Version Compatibility Notes

This project has specific version dependencies that must be maintained for compatibility:

- **Next.js version**: 14.1.3 (Not compatible with Next.js 15+ without migration)
- **React version**: 18.2.0
- **Tailwind CSS**: 3.3.3 (Not compatible with Tailwind v4 without significant changes)
- **TypeScript**: 5.x
- **Node.js**: 18.x or 20.x recommended

### Critical Version Dependencies

Some packages have strict peer dependencies:

- class-variance-authority: 0.7.1 (works with Tailwind 3.x)
- eslint-config-next: 14.1.3 (must match Next.js version)
- tailwind-merge: 1.14.0 (compatible with Tailwind 3.x)

## Update and Maintenance Process

When updating any part of this system:

1. **Document all changes** in the relevant documentation file
2. **Update this index** if new files or functionality are added
3. **Verify version compatibility** between interdependent packages
4. **Test across all supported browsers** and device sizes
5. **Run accessibility checks** to maintain WCAG compliance

This documentation should be treated as a living document that evolves with the codebase.