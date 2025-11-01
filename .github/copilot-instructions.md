# Migration Instructions: Merging meritranker-web into notion-ui-ai-editor

1. Move landing page and scaffold components from meritranker-web to src/pages or src/app in notion-ui-ai-editor.
2. Place reusable UI components from meritranker-web into src/components.
3. Merge routes and API endpoints, ensuring no conflicts with existing routes.
4. Integrate global styles and assets from meritranker-web into src/styles and public.
5. Compare and update dependencies in package.json:
   - Add missing dependencies from meritranker-web.
   - Update shared dependencies to compatible versions.
   - Remove duplicates and resolve conflicts.
6. Test the merged project thoroughly to ensure all features work as expected.
7. Update documentation and README to reflect the new structure and features.

