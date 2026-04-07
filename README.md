# QA Automation Project – Cypress Real World App

This project demonstrates End-to-End (E2E) test automation using Cypress, applying structured test design, risk-based prioritization, and QA best practices.

It covers a **complete QA process**, including:

- Test Strategy  
- Risk Analysis  
- Test Case Design  
- Bug Reporting  
- End-to-End Test Automation  
- Quality and Risk Analysis  

---

# Project Objective

Apply end-to-end test automation in a real-world application while prioritizing critical business flows based on risk and impact analysis.

This project demonstrates a **complete QA process**, including test design, execution, automation, and product quality and risk analysis.

---

# Key Bugs Identified

- **Critical financial integrity issue** : The system allows **negative transfer values**, resulting in the **user balance increasing instead of decreasing**.
- Inconsistent data between **Mine** and **Everyone** transaction history
- Value filter limitation (**functional inconsistency**)
- Filter persistence issue (**state management issue**)

Detailed bug reports are available in the `/docs/bug-reports` folder.

---

# Test Strategy Overview

Detailed test strategy is available in the `/docs` folder. 

---

# Automation Strategy

Not all scenarios were automated.

Automation was prioritized for:

- Critical business flows  
- Financial operations  
- Regression-prone features  
- Core user journeys  

Exploratory testing was performed before automation to identify risks and inconsistencies.

---

# Technologies Used

- Cypress  
- JavaScript  
- Page Object Model (POM)  
- Custom Commands  
- Fixtures  
- Factory Pattern (test data generation)  
- Git & GitHub  

---

# Project Structure

```
rwa-cypress-tests/
 ├── fixtures/
 │    └── credentials.json
 │
 ├── pages/
 │    ├── loginPage.js
 │    ├── dashboardPage.js
 │    ├── signUpPage.js
 │    ├── bankAccountPage.js
 │    ├── transactionPage.js
 │    └── transferPage.js
 │
 ├── support/
 │    └── commands.js
 │
 └── tests/
      └── automation-rwa
           ├── login.spec.js
           ├── signUp.spec.js
           ├── transfer.spec.js
           ├── transactions.spec.js
           └── bankAccount.spec.js
```

---

# Risk and Quality Analysis (UX & Product)

Conducted focusing on usability and product behavior.

See: `/docs/risk-and-quality-analysis`

---

# QA Documentation

- Test Cases
- Bug Reports
- Test Strategy  
- Test Summary Report  
- Risk and Quality Analysis  

All documentation is available in the `/docs` folder.

---

# How to Run the Tests

## Requirements

- Node.js installed
- Yarn installed

```bash
npm install yarn@latest -g
yarn dev
npx cypress open
```

---

# Project Note

The base project was forked from the **Cypress Real World App** and adapted for QA automation practice and portfolio purposes.