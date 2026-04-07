Feature: Money Transfer

  As a logged-in user
  I want to transfer money
  So that I can send funds to other users

  Background: 
    Given the user is logged in

  @TC-TRANS-001 @smoke @critical
  Scenario: Transfer money successfully
    Given the user has sufficient balance
    When the user transfers a valid amount
    Then the transfer should be completed successfully

  @TC-TRANS-002 @regression
  Scenario: Should not allow transfers without sufficient funds
    Given the user has insufficient balance
    When the user tries to transfer money
    Then an error message should be displayed

  @TC-TRANS-003 @critical
  Scenario: Should not allow transfers with negative value
    When the user enters a negative transfer amount
    Then the system should not allow the transfer

  @TC-TRANS-007 @regression
  Scenario: Transfer with decimal value
    When the user enters a transfer amount with cents
    Then the system should process the value correctly