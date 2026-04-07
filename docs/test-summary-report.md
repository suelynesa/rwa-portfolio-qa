# Test Summary Report

## Project
Real World App – QA Testing Project

## Objective
The objective of this testing cycle was to validate the core functionalities of the Real World App, focusing on expected behaviors based on common banking application standards and proper handling of user inputs.

## Scope
Testing focused on the following main features:

- User Login
- User Registration
- Money Transfer
- Transaction History

## Test Approach

The testing activities included:

- Test case design based on functional requirements
- Manual test execution
- Bug identification and reporting
- Risk-based analysis
- End-to-end test automation using Cypress

## Test Environment

- Environment: Localhost  
- URL: http://localhost:3000  
- Browser: Chrome 145  
- Operating System: Windows 10 Pro  

## Test Execution Summary

All planned test cases were executed during this cycle.

## QA Metrics

| Metric | Result |
|------|------|
| Test Cases Designed | 45 |
| Test Cases Executed | 45 |
| Test Cases Passed | 32 |
| Test Cases Failed | 13 |
| Pass Rate | 71% |
| Fail Rate | 29% |
| Automated Tests | 15 |
| Critical Bugs Identified | 1 |

## Key Findings

During test execution, multiple issues related to input validation and business rules were identified.

### Critical Defect

A critical issue was found in the **Money Transfer** feature:

- The system allows negative transfer values
- Instead of decreasing, the user balance is increased

### Impact:
- Breaks core financial rules
- Compromises data integrity
- Represents a high security risk

## Risk Assessment

Due to the presence of a critical defect affecting financial transactions, the application is currently **not safe for production release**.

## Recommendations

- Implement strict validation for monetary inputs (e.g., disallow negative values)
- Strengthen backend validation (not relying only on frontend)
- Add additional test coverage for edge cases in financial operations
- Re-test affected functionalities after fixes (regression testing)

## Conclusion

While 71% of the test cases passed, the existence of failed scenarios (29%) — especially involving critical business logic — indicates that the application is not yet stable.

The identified critical defect must be resolved before release, as it directly impacts financial accuracy and system reliability.

Further testing cycles are recommended after fixes are applied to ensure system stability and quality.