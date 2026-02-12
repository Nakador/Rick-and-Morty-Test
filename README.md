# React + TypeScript + Vite

[Live Demo](https://rick-and-morty-test-three.vercel.app/)

AppSpace Rick and Morty Theme test

## Performance & Quality

The application has been audited using Google Chrome DevTools Lighthouse to ensure high performance, accessibility, and SEO standards.

### Lighthouse Results

![Lighthouse Results](./public/assets/lighthouse-results.png)

| Category           | Score |
| :----------------- | :---- |
| **Performance**    | 96    |
| **Accessibility**  | 95    |
| **Best Practices** | 96    |
| **SEO**            | 100   |

## Test Coverage

The project maintains high test coverage across components, hooks, and services.

| File          | % Stmts | % Branch | % Funcs | % Lines |
| :------------ | :------ | :------- | :------ | :------ |
| **All files** | 93.17   | 83.72    | 92.89   | 93.22   |

Run the coverage report locally:

```bash
yarn test --coverage
```

## Technical Decisions & Approach

### 🧪 Testing Strategy
Our testing strategy follows the **Testing Trophy** model, ensuring a balance between speed and confidence.

- **[Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: The "Wubba Lubba Dub Dub" of our unit and integration testing. We focus on user behavior rather than implementation details.
- **[Cypress](https://www.cypress.io/)**: Handles the end-to-end "happy paths." It ensures our inter-dimensional travelers can actually find what they're looking for without ending up in the Shrimp Dimension.
- **[Storybook](https://storybook.js.org/)**: Think of it as the **Citadel of Ricks** for our components. It allows us to view and test components in total isolation, ensuring they work perfectly across all dimensions (screen sizes).
- **[Styled Components](https://styled-components.com/)**: Allows us to keep our styles scoped and maintainable, avoiding CSS conflicts across dimensions. It's like having a dedicated micro-verse for each component's look and feel.
- **[TanStack Query](https://tanstack.com/query/latest)**: Manages our inter-dimensional data fetching. It handles caching, synchronization, and server state, so we don't have to worry about desynced realities.
- **[ESLint](https://eslint.org/)**: The "Council of Ricks" for our code quality. It enforces strict rules to ensure every Rick (and Morty) is writing consistent, high-quality code.

### 🏗 Architecture: Atomic Design
I followed the **Atomic Design** methodology to build a scalable and maintainable UI library:

- **Pages**: Individual routes where data meets design.
- **Templates**: Page-level layouts (MainLayout).
- **Organisms**: Complex UI components (FilterBar, CharacterCard).
- **Molecules**: Groups of atoms working together (Autocomplete, StatusBadge).
- **Atoms**: The smallest building blocks (Buttons, Inputs, Text).

### 📁 Folder Structure & Modularization
The project is strictly separated into two main domains to ensure a clean separation of concerns:

#### 1. `src/designSystem` (The UI Library)
This is our "Inter-dimensional UI Kit." It contains all presentational components, theme tokens, and global styles. These components are "dumb" and rely strictly on props.
- Each component is self-contained in its own folder:
  - `component.tsx`: Logic and structure.
  - `component.styles.ts`: Styled-components definitions.
  - `component.stories.tsx`: Storybook documentation.
  - `component.test.tsx`: Unit and integration tests (Jest/RTL).

#### 2. `src/app` (The Business Logic)
This is where the "real work" happen. It contains:
- `hooks/`: Custom React hooks for shared logic (e.g., `useCharacterFilters`, `useDebouncedCallback`).
- `providers/`: The "Micro-verse Batteries" of the app. Context providers for global state and configuration (e.g., `ThemeProvider`, `QueryClientProvider`).
- `services/`: The "Portal Gun" of the app.
  - `api/`: API integration, data fetching logic using TanStack Query.
  - `apiHooks/`: Abstracted hooks like `useCharacters` and `useCharacter` for clean data access.
  - `types/`: Strongly typed definitions for API responses and entities.
- `utils/`: The "Rick's Gadgets" folder. 
  - `typeGuards/`: Runtime type checks to prevent "Cronenberg" data issues.
  - `sorting/`: Logic for organizing characters across dimensions.
  - `error/`: Standardized error handling for inter-dimensional mishaps.
- `pages/`: Container components that handle routing logic, fetch data via hooks, and compose Design System components.

### 🎨 Design & Aesthetics
The UI is inspired by the vibrant and chaotic (yet organized) aesthetic of **Rick and Morty**:
- **Portal Green (#97ce4c)**: Used for primary actions and success states.
- **Spaceship Grey**: Foundation for our layout and containers.
- **Dimension Hopping**: Smooth transitions and micro-animations to keep the experience feeling "alive."

### 🚀 Potential Improvements
- **Inter-dimensional Caching**: More aggressive React Query caching strategies for frequent travelers..
- **Edge Case Coverage**: Implementing more robust Error Boundaries for when the API decides to disintegrate.


## Questions & Answers

### 1. What are Custom Hooks in React? Propose a practical example where you would create one and explain why it would be useful.

Custom Hooks are JavaScript functions that start with `use` and allow you to extract and reuse stateful logic between components without changing your component hierarchy. They enable a clean separation of concerns by moving business logic, side effects, or data orchestration out of the UI components.

**Practical Example:**
In this project, I implemented the `useDebouncedCallback` hook ([useDebouncedCallback.ts](file:///Users/nakador/Code%20Projects/untitled%20folder/test/src/app/hooks/useDebouncedCallback/useDebouncedCallback.ts)). 
- **Why it's useful:** Without it, every keystroke in the Autocomplete search would trigger an API call, leading to performance bottlenecks and unnecessary server load. By encapsulating this logic in a custom hook, we ensure that the search logic is reusable, testable (see [useDebouncedCallback.test.ts](file:///Users/nakador/Code%20Projects/untitled%20folder/test/src/app/hooks/useDebouncedCallback/useDebouncedCallback.test.ts)), and decoupled from the `Autocomplete` component's rendering logic.

### 2. What advantages does using TypeScript offer in a Frontend project? What challenges might arise when integrating it into an existing project?

TypeScript adds static typing to JavaScript, transforming potential runtime errors into compile-time errors.

**Advantages:**
- **Improved Developer Experience (DX):** Superior autocompletion and "Intellisense" make navigation and usage of large codebases much faster.
- **Self-Documenting Code:** Interfaces and Types act as a living contract for data structures, reducing the need for extensive external documentation.
- **Safer Refactoring:** The compiler immediately catches breaking changes when modifying shared types or component props.

**Challenges:**
- **Initial Setup/Overhead:** Configuring `tsconfig.json` and build pipelines (like Vite) requires upfront effort.
- **Learning Curve:** Teams new to static typing may initially experience slower development as they learn to define complex types (e.g., Generics).
- **External Libraries:** Integrating legacy JavaScript libraries "without types" may require writing custom declaration files (`.d.ts`).

### 3. How would you approach implementing testing in a Frontend application? What types of tests do you consider essential, and why?

My approach follows the **Testing Trophy** model, prioritizing tests that provide the most "confidence per line of code."

**Essential Test Types:**
1.  **Unit Tests (Jest):** For isolated business logic, utility functions, and small "atom" components. These are fast and provide granular feedback.
2.  **Integration Tests (React Testing Library):** Essential for verifying how multiple components (Molecules/Organisms) work together and interact with the DOM as a user would.
3.  **End-to-End (E2E) Tests (Cypress):** For critical "happy paths" (e.g., searching for a character and viewing results). These are the most expensive but provide the highest confidence that the system works as a whole.

**Why:** This tiered approach ensures comprehensive coverage without the maintenance burden of testing every implementation detail.

### 4. You are assigned a project with a team distributed across different time zones and cultures. What strategies would you use to ensure effective communication and an efficient workflow?

Effective distributed work relies on a shift from synchronous to **asynchronous-first** communication.

**Strategies:**
- **Asynchronous Syncs:** Use detailed PR descriptions, recorded Loom/video demos, and Architecture Decision Records (ADRs) to provide context without requiring a meeting.
- **Golden Overlap:** Establish a small window (2-4 hours) where all team members are online for high-bandwidth discussions or pairing.
- **Strong Documentation:** Maintain a centralized "Source of Truth" (like this README or a Wiki) to minimize "knowledge silos" caused by timezone gaps.
-  **Cultural Awareness:** Respect local holidays and working hours, and encourage social channels to build rapport beyond functional tasks.

### 5. A team member suggests a technical solution that you consider inefficient or incorrect. How would you handle this situation to avoid tension while ensuring that the best solution is adopted?

The focus should always be on **objective data and project constraints** rather than personal opinions.

**Approach:**
- **Clarifying Questions:** "Help me understand how this approach handles [Edge Case X]?" This allows the colleague to discover potential flaws themselves or provide context I might be missing.
- **Proof of Concept (PoC):** If there's a disagreement, I suggest a quick time-boxed spike to compare both solutions based on measurable metrics (performance, bundle size, readability).
- **Merit-Based Feedback:** Frame the critique around established project standards or patterns (e.g., "This might introduce a performance bottleneck in the FilterBar because...").
- **Assume Positive Intent:** Start from the premise that everyone wants the best outcome for the project.
