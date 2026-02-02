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

## Questions & Answers

### 1. What are Custom Hooks in React? Propose a practical example where you would create one and explain why it would be useful (skip this if React is not your main known framework).

Custom Hooks are JavaScript functions that start with "use" and allow you to extract and reuse stateful logic between components without changing your component hierarchy.
best example shared fucntion between components managing data manipulation and logic,
seprating data and ui code

Example: A `useDebounce` hook to debounce keystrokes of the user.

### 2. What advantages does using TypeScript offer in a Frontend project? What challenges might arise when integrating it into an existing project?

TypeScript adds static typing to JavaScript, transforming potential runtime errors into compile-time errors.

Advantages: Improved developer experience through better autocompletion, self-documenting code, and safer refactoring.

Challenges: it may have some initial setup overhead, a learning curve but the benefits are worth it.

### 3. How would you approach implementing testing in a Frontend application? What types of tests do you consider essential, and why?

my approch to testing will be in that order:

1. Unit Tests: For isolated business logic (function,component and hooks unit tests ).
2. Integration Tests: For component interactions (navigation between pages or itegration between critical flow).
3. E2E Tests: For the most important "happy path" user flows (most critical and expensive tests).

Why: This ensures reliability without slowing down development cycles.

### 4. You are assigned a project with a team distributed across different time zones and cultures. What strategies would you use to ensure effective communication and an efficient workflow?

Effective remote work relies on asynchronous communication and clear documentation.
from my experience working in remote teams from different time zones my strategies are:

- Establish a "Golden Overlap" (2–3 hours) for synchronous meetings.
- Use detailed PR descriptions and ADRs (Architecture Decision Records).
- Standardize task definitions to minimize back-and-forth across time zones.

### 5. A team member suggests a technical solution that you consider inefficient or incorrect. How would you handle this situation to avoid tension while ensuring that the best solution is adopted?

The focus should be on objective data rather than personal opinions to maintain a collaborative environment.

i will think of those approachs:

- Ask clarifying questions to understand their rationale.
- Propose a "Proof of Concept" (PoC) or request for comments (RFC) to compare solutions.
- Frame the feedback around project constraints (scalability, maintenance) to keep the conversation professional and merit-based.
