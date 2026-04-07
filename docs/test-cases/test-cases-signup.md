# User Registration – Test Cases 

This document presents some test cases that were automated with Cypress for **user registration functionality**.The complete test suite is available in the Excel file inside the `/docs` folder.

---

## Feature: Login

### Objective
Validate that users can register successfully and that proper validations are applied for incomplete or invalid data.

---

## Automated Test Scenarios

| ID | Preconditions | Scenario | Steps | Expected Result | Status |
|----|----------|--------------|-------|----------------|-----|
| TC-SIGN-001 | - User not registered in the system. <br> - The user must be on the registration page. | Register new user successfully | 1. Enter valid first name <br> 2. Enter valid last name <br> 3. Enter valid username <br> 4. Enter valid password <br> 5. Enter confirm password <br> 6. Click "Sign Up" | - The Sign Up button is enabled and allows interaction <br> - The user has been successfully registered and should be redirected to the login screen. | Pass
| TC-SIGN-002 | - User not registered in the system. <br> - The user must be on the registration page. | Registered new user with empty first name. | 1. Leave first name field empty <br> 2. Enter valid last name <br> 3. Enter valid username <br> 4. Enter valid password <br> 5. Enter confirm password <br> 6. Click "Sign Up" | - Error messages appear for missing required field <br> - The Sign Up button should remain disabled and not allow interaction <br> - The user should not be able to complete registration. | Pass
| TC-SIGN-010 | - User not registered in the system. <br> - The user must be on the registration page. | Attempt to register username that already exists. | 1. Enter valid first name <br> 2. Enter valid last name <br> 3. Fill in username already registered <br> 4. Enter valid password <br> 5. Enter confirm password <br> 6. Click "Sign Up" | - An error message should be displayed indicating that the user already exists. <br> - The Sign Up button should remain visually disabled (grayed out) and not allow interaction. <br> - Registration should not be allowed. | Failed
| TC-SIGN-011 | - User not registered in the system. <br> - The user must be on the registration page. | Verify that the system does not allow records with required fields composed only of spaces. | 1. Fill in first name with spaces (" ") <br> 2. Fill in last name with spaces (" ") <br> 3. Fill in username with spaces (" ") <br> 4. Enter valid password <br> 5. Enter confirm password <br> 6. Click "Sign Up" | - The system should consider fields composed only of spaces as invalid. <br> - Should display an error message indicating a required field. <br> - The Sign Up button should remain disabled and not allow interaction. | Failed

---

## Test Techniques Applied

- Functional Test
- Equivalence Partitioning
- Boundary Value Analysis
- Negative Testing
- Validation Testing

---

## Notes

For the complete and detailed test case documentation (including other features), please refer to:
📎 `test-cases-complete.xlsx`
To check the bug report related to test case TC-SIGN-011, please refer to:
📎 `sample-bug-sign-011.md`