# Money Transfer – Test Cases

This document presents some test cases that were automated with Cypress for the **money transfer functionality**.  
The complete test suite is available in the Excel file inside the `/docs` folder.

---

## Feature: Money Transfer

### Objective
Validate that users can perform money transfers correctly and that the system applies proper validation for invalid or inconsistent transaction values.

---

## Automated Test Scenarios

| ID | Preconditions | Scenario | Steps | Expected Result | Status |
|----|--------------|---------|------|----------------|-------|
| TC-TRANS-001 | - User is registered and logged into the system. <br> - User has sufficient balance available. <br> - There must be a contact on the list. | Transfer money successfully | 1. Click **"$ NEW"** <br> 2. Select a contact <br> 3. Enter a valid transfer amount <br> 4. Add a transfer note <br> 5. Click **"Pay"** | - Success confirmation message is displayed <br> - User balance is updated correctly <br> - Transaction appears in the transaction history | Pass |
| TC-TRANS-002 | - User is registered and logged into the system. <br> - User with insufficient funds in their account. <br> - There must be a contact on the list. | Do not allow transfers without sufficient funds. | 1. Click **"$ NEW"** <br> 2. Select a contact <br> 3. Enter a valid transfer amount <br> 4. Add a transfer note <br> 5. Click **"Pay"** | - The system should display an error message. <br> - The transaction should not proceed due to insufficient funds. | Failed |
| TC-TRANS-003 | - User is registered and logged into the system. <br> - User has sufficient balance available. <br> - There must be a contact on the list. | Do not allow transfer with negative value | 1. Click **"$ NEW"** <br> 2. Select a contact <br> 3. Enter a negative transfer amount (example: -5) <br> 4. Add a transfer note <br> 5. Click **"Pay"** | - System should block the transaction <br> - Error message should be displayed <br> - Balance must not increase or change | Failed | 
| TC-TRANS-007 | - User is registered and logged into the system. <br> - User has sufficient balance available. <br> - User has sufficient balance available. | Allow transfer with decimal values (cents) | 1. Click **"$ NEW"** <br> 2. Select a contact <br> 3. Enter a transfer amount with cents (example: 1.50) <br> 4. Add a transfer note <br> 5. Click **"Pay"** | - The system should process the transfer including the cents value <br> - Balance should be updated with the exact transferred amount <br> - Transaction should appear correctly in the history | Failed |

---

## Example Defects Identified

During the execution of the automated tests, some critical defects were identified in the transfer feature, including:

- Negative transfer values incorrectly increasing the account balance.
- Transfers with decimal values (cents) not being processed correctly.

Detailed bug reports are available in the `/docs/bug-reports` folder.

---

## Test Techniques Applied

- Functional Testing  
- Equivalence Partitioning  
- Boundary Value Analysis  
- Negative Testing  
- Validation Testing  

---

## Notes

For the complete and detailed test case documentation (including additional transfer scenarios), please refer to:

📎 `test-cases-complete.xlsx`

Some scenarios identified defects during testing. Bug reports can be found in:

📎 `/docs/bug-reports`