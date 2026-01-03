# Security Policy

## Supported Versions

We aim to support the latest published version of @phcdevworks/spectre-tokens. Security updates are applied to the current major version only.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

**Please ensure you are using the most recent version** of both:
- The @phcdevworks/spectre-tokens package
- All dependent Spectre packages (@phcdevworks/spectre-ui, etc.)

Older releases may not receive security fixes.

## Reporting a Vulnerability

If you discover a security vulnerability, please **DO NOT** open a public issue. Security issues should be reported privately to protect users.

### How to Report

**Preferred method**: Use [GitHub Security Advisories](https://github.com/phcdevworks/spectre-tokens/security/advisories/new) to privately report vulnerabilities

**Alternative methods**:
- Email the maintainers at [security contact - see repository]
- Direct message maintainers through GitHub

### What to Include

Please provide as much detail as possible to help us reproduce and assess impact:

1. **Description of the vulnerability** and potential impact
2. **Steps to reproduce** or proof-of-concept code
3. **Affected versions** (if known)
4. **Potential attack scenarios**
5. **Suggested mitigation** (if you have ideas)

### What to Expect

1. **Acknowledgment**: We will acknowledge receipt within **48 hours**
2. **Assessment**: We will investigate and provide an initial assessment within **5 business days**
3. **Updates**: We will keep you informed of the fix status throughout the process
4. **Resolution**: We will work on a fix and coordinate disclosure timing with you
5. **Credit**: We will credit you in the security advisory (unless you prefer to remain anonymous)

## Responsible Disclosure

We appreciate responsible disclosure and will work with you to:
- Understand the scope and severity of the issue
- Develop and test a fix
- Coordinate public disclosure timing
- Credit your contribution (if desired)

**Please allow us reasonable time to address the issue before public disclosure.**

## Security Best Practices

When using @phcdevworks/spectre-tokens:

1. **Keep packages updated** to the latest version
2. **Monitor dependencies** for known vulnerabilities (`npm audit`)
3. **Use lock files** (package-lock.json) to ensure reproducible builds
4. **Review token changes** in updates that might affect security-related tokens (e.g., focus ring visibility)
5. **Follow WCAG guidelines** when implementing tokens in production

## Scope

This security policy covers:
- The @phcdevworks/spectre-tokens package code
- Token definitions in `tokens/`
- TypeScript source and build scripts
- Generated CSS and JavaScript outputs

This policy does **NOT** cover:
- Vulnerabilities in consuming applications
- Issues in downstream packages (report to those repositories):
  - @phcdevworks/spectre-ui
  - @phcdevworks/spectre-ui-wordpress
  - @phcdevworks/spectre-ui-astro
- Third-party dependencies (report to their maintainers)
- Browser-specific rendering issues

## Contact

For security-related questions that aren't vulnerabilities:
- Open a [GitHub Discussion](https://github.com/phcdevworks/spectre-tokens/discussions)
- Tag maintainers in relevant issues

Thank you for helping keep @phcdevworks/spectre-tokens and our community safe!
