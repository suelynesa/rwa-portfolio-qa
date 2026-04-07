Feature: Transaction History

  As a logged-in user
  I want to view transaction history
  So that I can track my financial activities

  @TC-HIST-001 @smoke @critical
  Scenario: View transaction history (Everyone) successfully
    Given the user is logged into the application
    When the user accesses the "Everyone" tab
    Then the system should display a list of transactions

  @TC-HIST-004 @regression
  Scenario: Display empty transaction history for new user
    Given a new user without previous transactions
    When the user accesses the "Mine" tab
    Then the system should display a "No Transactions" message

  @TC-HIST-009 @critical
  Scenario: Transaction should appear in "Everyone" after transfer
    Given the user has completed a transfer
    When the user accesses the "Everyone" tab
    Then the new transaction should be visible in the list

  @TC-HIST-010 @critical
  Scenario: Date filter should persist after refresh
    Given the user applies a date filter
    When the user refreshes the page
    Then the filter should remain applied