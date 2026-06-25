You are an expert Next.js + responsive UI engineer.

Task:
Make this entire Next.js project fully responsive (mobile/tablet/desktop) by processing ALL pages step-by-step.

Critical rules:
- DO NOT change business logic, data fetching, API calls, auth, routing behavior, or state management.
- DO NOT rename routes or restructure folders.
- Only adjust UI: layout, spacing, typography, grid/flex behavior, breakpoints, overflow handling.
- Preserve existing components. If a fix requires editing a shared component, do it only if necessary and keep behavior identical.
- Do NOT add new libraries unless absolutely required. Prefer existing styling approach.
- Mobile-first approach.

Project analysis first:
1) Detect router type:
   - If `/app` exists → App Router pages
   - If `/pages` exists → Pages Router pages
2) Build a page inventory:
   - List every route/page file (including nested routes, dynamic routes like `[id]`, route groups if any)
   - Identify shared layouts and reusable UI components used across multiple pages
3) Prioritize work order:
   - Public/main pages first (home, auth, major flows)
   - Then dashboards/inner pages
   - Then edge/rare routes

Step-by-step execution (IMPORTANT):
For EACH page in the inventory, do the following and then move to the next page automatically:
A) Open the page + its directly-used components (only those needed)
B) Identify responsive issues for:
   - Mobile (<640px)
   - Tablet (640px–1024px)
   - Desktop (>1024px)
C) Fix issues:
   - Replace fixed widths/heights with responsive units/classes
   - Add Tailwind breakpoints (sm/md/lg/xl) or CSS media queries based on current styling
   - Prevent horizontal overflow (overflow-x-hidden only if justified; prefer fixing the cause)
   - Make tables/cards/forms usable on mobile (stacking, wrapping, responsive grids)
   - Ensure modals/menus are viewport-safe
   - Ensure images use responsive sizing and Next/Image best practices if already used
D) Keep accessibility intact (labels, focus, tap targets)
E) Ensure UI looks consistent with the existing design system

Output requirements:
- Work page-by-page. After each page:
  1) Show the exact files changed (paths)
  2) Provide code diffs or full updated files (whichever is clearer)
  3) Give a short checklist of what was fixed (max 6 bullets)
- Continue to the next page until ALL pages are done.

Guardrails:
- If you discover a shared component causing responsiveness issues across many pages, fix it once in the component and note impacted pages.
- If any change risks functionality, STOP and explain the risk, then propose the safest UI-only alternative.

Start now:
- Scan the repository and generate the page inventory.
- Begin with the first page in your prioritized order.
