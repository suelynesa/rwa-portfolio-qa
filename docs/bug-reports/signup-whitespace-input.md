# Bug Report – Sign Up Feature

## Bug ID
BUG-SIGN-001

---

## Title
Allows user registration with required fields containing only whitespace, causing login failure afterward

---

## Environment
* Environment: Localhost
* URL: http://localhost:3000
* Browser: Chrome 145
* Operating System: Windows 10 Pro

---

## Type
Functional

---

## Severity
High

---

## Priority
High

---

## Justification
This issue directly impacts the critical authentication flow and compromises the integrity of stored user data.

---

## Precondition
User not registered in the system.

---

## Steps to Reproduce
1. Click the **"Don't have an account? Sign Up"** button
2. Fill **First Name** with whitespace characters (" ")
3. Fill **Last Name** with whitespace characters (" ")
4. Fill **Username** with whitespace characters (" ")
5. Enter a valid password in the **Password** field
6. Enter the same valid password in the **Confirm Password** field
7. Click the **"Sign Up"** button
8. Attempt to log in using the newly created user

---

## Expected Result
* The system should treat fields containing only whitespace as invalid
* An error message should be displayed indicating that the field is required
* The **Sign Up** button should remain disabled and not allow interaction
* Validation rules should ensure consistency between registration and authentication

---

## Actual Result
* The **Sign Up** button becomes enabled and allows interaction
* The registration is completed successfully
* The user is unable to authenticate afterward

---

## Evidence
- Video (Manual Reproduction): /docs/evidence/BUG-SIGN-001-whitespace-input/whitespace-input-manual-repro.mp4
- Video (Automated Test - Cypress): /docs/evidence/BUG-SIGN-001-whitespace-input/whitespace-input-cypress-repro.mp4
- Screenshot 1: /docs/evidence/BUG-SIGN-001-whitespace-input/whitespace-input-field.png
- Screenshot 2: /docs/evidence/BUG-SIGN-001-whitespace-input/signup-enabled.png
- Screenshot 3: /docs/evidence/BUG-SIGN-001-whitespace-input/login-disabled.png

---

## Notes
The behavior suggests the absence of input sanitization (such as `trim()`) before required field validation and/or before persisting the data on the backend.

There are also indications of inconsistency between validation rules applied during registration and those used during authentication, suggesting possible misalignment between frontend and backend validation logic.