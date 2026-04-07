# Transaction History – Test Cases

This document presents some test cases that were automated with Cypress for the **transaction history functionality**.  
The complete test suite is available in the Excel file inside the `/docs` folder.

---

## Feature: Transaction History

### Objective
Validate that users can view and interact with transaction history correctly, ensuring data consistency, correct filtering behavior, and proper handling of empty states.

---

## Automated Test Scenarios

| ID | Preconditions | Scenario | Steps | Expected Result | Status |
|----|--------------|---------|------|----------------|-------|
| TC-HIST-001 | - User is registered and logged into the system <br> - There must be existing transactions | View transaction history (Everyone) successfully | 1. Click on **"Everyone"** tab | - Transaction list is displayed <br> - List contains transactions from different users <br> - Each transaction must display the value, user, and note. | Pass |
| TC-HIST-004 | - User is registered and logged into the system <br> - User has no previous transactions | Display empty transaction history for new user | 1. Click on **"Mine"** tab | - No transactions are displayed <br> - Message **"No Transactions"** is visible | Pass |
| TC-HIST-009 | - User is registered and logged into the system <br> - There must be a contact available | The transaction should appear in the "Everyone" history after the transfer. | 1. Make a transfer to a contact <br> 2. Access homepage <br> 3. Click on **"Everyone"** tab <br> | - The new transaction should appear at the top of the list <br> - Transaction data (user, amount, note) should be correct | Failed |
| TC-HIST-010 | - User is registered and logged into the system <br> - There must be existing transactions | Filter should persist after page refresh | 1. Click on **"Everyone"** tab <br> 2. Apply a date filter <br> 3. Refresh the page <br> 4. Check if the filter remains applied. | - Applied filter should remain active after refresh <br> - Transaction list should remain filtered accordingly | Failed |

---

## Example Defects Identified

During the execution of the automated tests, some functional issues were identified in the transaction history feature:

- Transactions do not appear in the **"Everyone"** tab after being created.
- Applied filters are not persisted after page refresh.

Detailed bug reports are available in the `/docs/bug-reports` folder.

---

## Test Techniques Applied

- Functional Testing  
- Validation Testing  
- Negative Testing  
- Exploratory Testing  

---

## Notes

For the complete and detailed test case documentation (including additional scenarios), please refer to:

📎 `test-cases-complete.xlsx`

Some scenarios identified defects during testing. Bug reports can be found in:

📎 `/docs/bug-reports`