# Git & GitHub Workflow for Professional Teams

This guide covers a Git workflow commonly used by professional software engineering teams. It takes you through the entire development lifecycle—from creating an issue to deploying code to production.

---

# 1. Branch Strategy

A well-organized branch strategy keeps development predictable and prevents developers from stepping on each other's work.

## `main`

The `main` branch always contains production-ready code.

- Protected branch
- No direct commits
- Every change goes through a Pull Request
- Represents the current production version

---

## `dev`

The `dev` branch is where active development happens.

- Features are merged here first
- Used for integration testing
- Becomes the base for future releases

---

## `feature/*`

Each new feature gets its own branch.

Examples:

```text
feature/oauth-login
feature/payment-gateway
feature/dashboard-ui
```

Guidelines:

- Create from `dev`
- One branch per feature
- Delete after merging

---

## `bugfix/*`

Used for fixing bugs found during development or testing.

Examples:

```text
bugfix/login-timeout
bugfix/null-reference
```

Typically:

- Created from `dev`
- Merged back into `dev`

---

## `hotfix/*`

Hotfix branches are reserved for urgent production issues.

Examples:

```text
hotfix/payment-failure
hotfix/security-patch
```

Typical workflow:

- Create from `main`
- Fix the issue
- Merge into both `main` and `dev`

---

## `release/*`

When development is complete, create a release branch to stabilize the application before production.

Examples:

```text
release/v2.4
release/v3.0
```

Only allow:

- Critical bug fixes
- Version updates
- Documentation changes

Avoid adding new features at this stage.

---

# 2. Git Workflows

Different companies follow different Git workflows depending on their team size and release strategy.


## GitFlow

GitFlow introduces dedicated branches for development and releases.

```text
main
 │
release
 │
dev
 │
feature/*
```

Additional branches include:

- `feature/*`
- `bugfix/*`
- `hotfix/*`
- `release/*`

Best suited for:

- Enterprise applications
- Teams with scheduled releases
- Projects supporting multiple environments

---

## Trunk-Based Development

Instead of long-lived feature branches, developers merge small changes into the main branch frequently.

```text
main
 ├── Small Feature
 ├── Small Fix
 ├── Small Improvement
```

Commonly used by:

- Large engineering teams
- Companies practicing Continuous Deployment
- Teams deploying multiple times per day

---

# 3. Issues

Every piece of work should start with an issue.

A good issue clearly explains **what needs to be built**, **how success is measured**, and **who owns the task**.

Example:

```text
#321 Add OAuth Login

Description

- Google Login
- GitHub Login

Acceptance Criteria

- Can login
- Existing users linked
- Tests pass

Test Cases

- Google account
- Existing account
- Invalid callback

Assignee
Akash

Estimate
8 Hours / 3 Story Points

Priority
High

Labels
Backend
Authentication
```

---

## Acceptance Criteria

Acceptance criteria define when a task is considered complete.

Examples:

- User can sign in successfully
- Existing accounts are linked
- No regressions are introduced
- Unit tests pass

---

## Estimation

Most teams estimate work using either Story Points or Hours.

### Story Points

Measure complexity rather than time.

Example:

```text
1 • 2 • 3 • 5 • 8 • 13
```

### Hours

Measure expected effort.

```text
2 Hours
4 Hours
8 Hours
16 Hours
```

---

## Labels & Priority

Labels make filtering easier.

Examples:

```text
Backend
Frontend
Bug
Performance
Authentication
Documentation
```

Priority usually follows:

- Critical
- High
- Medium
- Low

---

# 4. Creating a Branch

Always start by updating your local repository.

```bash
git switch dev

git pull

git switch -c feature/oauth-login
```

Use meaningful branch names.

Good examples:

```text
feature/oauth-login

feature/user-profile

bugfix/login-timeout

hotfix/payment-failure

release/v2.4
```

---

# 5. Commits

Good commits make the project history easy to understand.

A few simple rules:

- Keep commits small
- One logical change per commit
- Commit frequently
- Don't commit broken code
- Write meaningful messages

---

## Conventional Commits

Feature

```text
feat(auth): add Google login
```

Bug Fix

```text
fix(payment): prevent duplicate charge
```

Documentation

```text
docs(api): update README
```

Refactoring

```text
refactor(user): simplify validation
```

Tests

```text
test(auth): add OAuth tests
```

Maintenance

```text
chore(ci): upgrade GitHub Actions
```

Formatting

```text
style(ui): format navbar
```

Performance

```text
perf(cache): reduce Redis calls
```

---

# 6. Git Hooks

Git Hooks automatically run scripts before certain Git actions.

They help maintain code quality without relying on developers to remember every step.

Common hooks include:

### `pre-commit`

Runs before a commit is created.

Typical uses:

- Format code
- Run linters
- Execute unit tests

---

### `commit-msg`

Runs after the commit message is written.

Typical uses:

- Validate Conventional Commits
- Reject invalid commit messages

---

### `pre-push`

Runs before code is pushed to the remote repository.

Typical uses:

- Run the test suite
- Security checks
- Prevent broken code from reaching the repository

---

# 7. Pull Requests

Once development is complete, push your branch and open a Pull Request.

```text
Feature Branch

↓

Push

↓

Open Pull Request

↓

Code Review

↓

Approval

↓

Merge
```

---

## A Good Pull Request Includes

- A clear title
- Description of the changes
- Linked issue
- Screenshots (if applicable)
- Testing information
- Assigned reviewers

---

## During Code Review

Reviewers usually look for:

- Readability
- Code quality
- Performance
- Security
- Test coverage
- Architecture
- Edge cases

Code reviews are about improving the code—not criticizing the developer.

---

## Merge Strategies

### Squash Merge

Combines multiple commits into one clean commit.

```text
20 commits

↓

1 commit
```

Recommended for most teams.

---

### Merge Commit

Preserves every commit and the complete branch history.

Useful when history matters.

---

### Rebase Merge

Keeps the Git history linear by avoiding merge commits.

---

# 8. Next Video — Automated Checks & Build Pipelines

After opening a Pull Request, the real automation begins.

We'll cover:

- GitHub Actions
- Azure DevOps Pipelines
- Restore Packages
- Build
- Unit Tests
- Integration Tests
- Code Coverage
- SonarQube
- Security Scans
- Docker Build
- Artifact Publishing
- Deployments
- Secrets & Environment Variables

---

# Complete Development Workflow

```text
Create Issue
      │
      ▼
Estimate Work
      │
      ▼
Create Feature Branch
      │
      ▼
Develop Feature
      │
      ▼
Commit Frequently
      │
      ▼
Run Git Hooks
      │
      ▼
Push Branch
      │
      ▼
Open Pull Request
      │
      ▼
Code Review
      │
      ▼
Address Feedback
      │
      ▼
Approval
      │
      ▼
Merge
      │
      ▼
Delete Branch
      │
      ▼
CI/CD Pipeline
      │
      ▼
Deploy to Staging
      │
      ▼
Deploy to Production
```

---

# Best Practices

- Protect your `main` branch.
- Never commit directly to production branches.
- Keep feature branches short-lived.
- Open small, focused Pull Requests.
- Follow Conventional Commits.
- Require code reviews before merging.
- Run automated tests on every Pull Request.
- Delete branches after merging.
- Tag production releases using Semantic Versioning (`v1.2.3`).
- Automate builds, testing, and deployments with CI/CD.