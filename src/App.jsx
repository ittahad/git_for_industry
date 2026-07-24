import './App.css'
import CodeBlock from './components/CodeBlock'
import Section from './components/Section'

const navItems = [
  { id: 'branch-strategy', label: 'Branch Strategy' },
  { id: 'git-workflows', label: 'Git Workflows' },
  { id: 'issues', label: 'Issues' },
  { id: 'branch-creation', label: 'Branch Creation' },
  { id: 'commits', label: 'Commits' },
  { id: 'git-hooks', label: 'Git Hooks' },
  { id: 'pull-requests', label: 'Pull Requests' },
  { id: 'cicd', label: 'CI/CD Pipelines' },
  { id: 'learning-order', label: 'Learning Order' },
  { id: 'complete-workflow', label: 'Complete Workflow' },
  { id: 'best-practices', label: 'Best Practices' },
]

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <p className="sidebar-title">Contents</p>
        <nav>
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="main">
        <header className="hero">
          <h1>Git &amp; GitHub Workflow for Professional Teams</h1>
          <p>
            A practical guide to how work flows from an issue to production — covering
            branch strategy, workflows, commits, hooks, pull requests, and CI/CD.
          </p>
        </header>

        <Section id="branch-strategy" title="1. Branch Strategy">
          <p>
            A typical enterprise repository consists of the following branches:
          </p>

          <div className="card-grid">
            <div className="card">
              <h3><span className="branch-tag">main</span></h3>
              <ul>
                <li>Production-ready branch</li>
                <li>Always deployable</li>
                <li>Protected branch</li>
                <li>No direct commits</li>
              </ul>
            </div>
            <div className="card">
              <h3><span className="branch-tag">dev</span></h3>
              <ul>
                <li>Integration branch</li>
                <li>Developers merge completed features here</li>
                <li>Used for testing before release</li>
              </ul>
            </div>
          </div>

          <div className="subsection">
            <h3><span className="branch-tag">feature/*</span></h3>
            <CodeBlock>{`feature/oauth-login
feature/payment-gateway
feature/dashboard-ui`}</CodeBlock>
            <ul>
              <li>Created from <span className="branch-tag">dev</span></li>
              <li>One feature per branch</li>
              <li>Deleted after merge</li>
            </ul>
          </div>

          <div className="subsection">
            <h3><span className="branch-tag">bugfix/*</span></h3>
            <CodeBlock>{`bugfix/login-timeout
bugfix/null-reference`}</CodeBlock>
            <ul>
              <li>Used for fixing non-production bugs</li>
              <li>Created from <span className="branch-tag">dev</span></li>
            </ul>
          </div>

          <div className="subsection">
            <h3><span className="branch-tag">hotfix/*</span></h3>
            <CodeBlock>{`hotfix/payment-failure
hotfix/security-patch`}</CodeBlock>
            <ul>
              <li>Created from <span className="branch-tag">main</span></li>
              <li>Used for urgent production issues</li>
              <li>Merged back into both <span className="branch-tag">main</span> and <span className="branch-tag">dev</span></li>
            </ul>
          </div>

          <div className="subsection">
            <h3><span className="branch-tag">release/*</span></h3>
            <CodeBlock>{`release/v2.4
release/v3.0`}</CodeBlock>
            <ul>
              <li>Stabilization branch before production</li>
              <li>Only bug fixes, version updates, and documentation updates</li>
              <li>No new features</li>
            </ul>
          </div>
        </Section>

        <Section id="git-workflows" title="2. Git Workflows">
          <p>There are several popular Git workflows.</p>

          <div className="subsection">
            <h3>Feature Branch Workflow</h3>
            <p>Every feature is developed in its own branch.</p>
            <CodeBlock>{`main
 ├── feature/login
 ├── feature/payment
 └── feature/profile`}</CodeBlock>
            <p><strong>Recommended for:</strong></p>
            <ul>
              <li>Small teams</li>
              <li>Medium teams</li>
              <li>SaaS products</li>
            </ul>
          </div>

          <hr className="divider" />

          <div className="subsection">
            <h3>GitFlow</h3>
            <CodeBlock>{`main
  │
release
  │
develop
  │
feature/*`}</CodeBlock>
            <p><strong>Additional branches:</strong></p>
            <ul className="tag-list">
              <li>feature/*</li>
              <li>bugfix/*</li>
              <li>hotfix/*</li>
              <li>release/*</li>
            </ul>
            <p><strong>Recommended for:</strong></p>
            <ul>
              <li>Enterprise applications</li>
              <li>Long release cycles</li>
              <li>Multiple environments</li>
            </ul>
          </div>

          <hr className="divider" />

          <div className="subsection">
            <h3>Trunk-Based Development (Optional)</h3>
            <p>Developers merge frequently into the main branch.</p>
            <CodeBlock>{`main
 ├── Small Feature
 ├── Small Fix
 └── Small Improvement`}</CodeBlock>
            <p><strong>Recommended for:</strong></p>
            <ul>
              <li>High-performing teams</li>
              <li>Continuous Deployment</li>
              <li>Microservices</li>
            </ul>
          </div>
        </Section>

        <Section id="issues" title="3. Issues">
          <p>Every piece of work should begin with an issue.</p>

          <div className="subsection">
            <h3>Example Issue</h3>
            <CodeBlock>{`#321 Add OAuth Login

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

Assignee: Akash
Estimate: 8 Hours / 3 Story Points
Priority: High
Labels: Backend, Authentication`}</CodeBlock>
          </div>

          <div className="subsection">
            <h3>Acceptance Criteria</h3>
            <p>Defines when the work is considered complete.</p>
            <ul>
              <li>User can login</li>
              <li>Existing users are linked</li>
              <li>No regression</li>
              <li>Unit tests pass</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Story Points vs Hours</h3>
            <h4>Story Points</h4>
            <p>Estimate complexity.</p>
            <ul className="tag-list">
              <li>1</li><li>2</li><li>3</li><li>5</li><li>8</li><li>13</li>
            </ul>
            <h4>Hours</h4>
            <p>Estimate actual effort.</p>
            <CodeBlock>{`4 Hours
8 Hours
16 Hours`}</CodeBlock>
          </div>

          <div className="subsection">
            <h3>Priority</h3>
            <ul className="tag-list">
              <li>Critical</li>
              <li>High</li>
              <li>Medium</li>
              <li>Low</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Labels</h3>
            <CodeBlock>{`Backend
Frontend
Authentication
Bug
Performance
Documentation`}</CodeBlock>
          </div>
        </Section>

        <Section id="branch-creation" title="4. Branch Creation">
          <p>Always create a branch from the correct parent.</p>
          <CodeBlock>{`git switch dev
git pull
git switch -c feature/oauth-login`}</CodeBlock>
          <p>Branch naming examples:</p>
          <CodeBlock>{`feature/oauth-login
feature/user-profile
bugfix/login-timeout
hotfix/payment-failure
release/v2.4`}</CodeBlock>
        </Section>

        <Section id="commits" title="5. Commits">
          <div className="subsection">
            <h3>Good Commit Practices</h3>
            <ul>
              <li>Keep commits small</li>
              <li>One logical change per commit</li>
              <li>Commit frequently</li>
              <li>Don&apos;t commit broken code</li>
              <li>Write meaningful messages</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Conventional Commits</h3>
            <div className="card-grid">
              <div className="card">
                <h4>Feature</h4>
                <CodeBlock>feat(auth): add Google login</CodeBlock>
              </div>
              <div className="card">
                <h4>Fix</h4>
                <CodeBlock>fix(payment): prevent duplicate charge</CodeBlock>
              </div>
              <div className="card">
                <h4>Documentation</h4>
                <CodeBlock>docs(api): update README</CodeBlock>
              </div>
              <div className="card">
                <h4>Refactor</h4>
                <CodeBlock>refactor(user): simplify validation</CodeBlock>
              </div>
              <div className="card">
                <h4>Test</h4>
                <CodeBlock>test(auth): add OAuth tests</CodeBlock>
              </div>
              <div className="card">
                <h4>Chore</h4>
                <CodeBlock>chore(ci): upgrade GitHub Actions</CodeBlock>
              </div>
              <div className="card">
                <h4>Style</h4>
                <CodeBlock>style(ui): format navbar</CodeBlock>
              </div>
              <div className="card">
                <h4>Performance</h4>
                <CodeBlock>perf(cache): reduce Redis calls</CodeBlock>
              </div>
            </div>
          </div>
        </Section>

        <Section id="git-hooks" title="6. Git Hooks">
          <p>Git Hooks automate checks before commits and pushes.</p>

          <div className="subsection">
            <h3>Common Hooks</h3>
            <div className="card-grid">
              <div className="card">
                <h4>pre-commit</h4>
                <p>Runs before creating a commit.</p>
                <ul>
                  <li>Code formatting</li>
                  <li>Linting</li>
                  <li>Unit tests</li>
                </ul>
              </div>
              <div className="card">
                <h4>commit-msg</h4>
                <p>Runs after writing the commit message.</p>
                <ul>
                  <li>Validate Conventional Commits</li>
                  <li>Reject invalid commit messages</li>
                </ul>
              </div>
              <div className="card">
                <h4>pre-push</h4>
                <p>Runs before pushing code.</p>
                <ul>
                  <li>Run test suite</li>
                  <li>Run security scans</li>
                  <li>Prevent broken code from being pushed</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="pull-requests" title="7. Pull Requests (PR)">
          <p>After development is complete:</p>
          <div className="flow-diagram">
            <pre>{`Feature Branch
      ↓
    Push
      ↓
Create Pull Request
      ↓
  Code Review
      ↓
   Approval
      ↓
    Merge`}</pre>
          </div>

          <div className="subsection">
            <h3>Pull Request Checklist</h3>
            <ul>
              <li>Meaningful title</li>
              <li>Description</li>
              <li>Linked issue</li>
              <li>Screenshots (if applicable)</li>
              <li>Test results</li>
              <li>Reviewers assigned</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Code Review</h3>
            <p>Reviewers typically check:</p>
            <ul className="tag-list">
              <li>Code quality</li>
              <li>Readability</li>
              <li>Performance</li>
              <li>Security</li>
              <li>Tests</li>
              <li>Architecture</li>
              <li>Edge cases</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Merge Strategies</h3>
            <div className="card-grid">
              <div className="card">
                <h4>Squash Merge</h4>
                <CodeBlock>{`20 commits
    ↓
1 clean commit`}</CodeBlock>
                <p>Recommended for most teams.</p>
              </div>
              <div className="card">
                <h4>Merge Commit</h4>
                <p>Keeps all commit history.</p>
                <CodeBlock>Merge pull request #123</CodeBlock>
                <p>Useful for preserving branch history.</p>
              </div>
              <div className="card">
                <h4>Rebase Merge</h4>
                <p>Creates a linear Git history with no merge commits.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cicd" title="8. Automated Checks & Build Pipelines">
          <div className="coming-soon">
            <p><strong>Next Video — Topics covered:</strong></p>
            <ul>
              <li>GitHub Actions &amp; Azure DevOps Pipelines</li>
              <li>Restore Packages, Build, Unit &amp; Integration Tests</li>
              <li>Code Coverage, SonarQube, Security Scans</li>
              <li>Docker Build &amp; Artifact Publishing</li>
              <li>Deployment, Environment Variables &amp; Secrets Management</li>
            </ul>
          </div>
        </Section>

        <Section id="learning-order" title="Recommended Learning Order">
          <ol className="learning-order">
            <li>Branch Strategy</li>
            <li>Git Workflows</li>
            <li>Issues</li>
            <li>Branch Creation</li>
            <li>Commits</li>
            <li>Git Hooks</li>
            <li>Pull Requests</li>
            <li>CI/CD Pipelines</li>
          </ol>
        </Section>

        <Section id="complete-workflow" title="Complete Workflow">
          <div className="flow-diagram">
            <pre>{`Create Issue
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
Create Pull Request
      │
      ▼
Code Review
      │
      ▼
Address Comments
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
Deploy to Production`}</pre>
          </div>
        </Section>

        <Section id="best-practices" title="Best Practices">
          <ul className="best-practices">
            <li>Protect the <span className="branch-tag">main</span> branch.</li>
            <li>Never commit directly to <span className="branch-tag">main</span>.</li>
            <li>Keep branches short-lived.</li>
            <li>Create one Pull Request per feature or fix.</li>
            <li>Follow Conventional Commits.</li>
            <li>Keep Pull Requests small and focused.</li>
            <li>Require code reviews before merging.</li>
            <li>Run automated tests on every Pull Request.</li>
            <li>Delete branches after merging.</li>
            <li>Tag production releases using Semantic Versioning (<code>v1.2.3</code>).</li>
            <li>Automate builds, testing, and deployments using CI/CD.</li>
          </ul>
        </Section>
      </main>
    </div>
  )
}

export default App
