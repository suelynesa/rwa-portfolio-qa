Feature: Login

  As a user
  I want to log into the application
  So that I can access my account

  Background:
    Given the user is registered

  @TC-LOGIN-001 @smoke @critical
  Scenario: Login with valid credentials
    When the user enters valid credentials
    Then the user should be redirected to the dashboard

  @TC-LOGIN-002 @regression
  Scenario: Login with invalid credentials
    When the user enters invalid credentials
    Then an error message should be displayed

  @TC-LOGIN-011 @regression
  Scenario: Should validate minimum password length at login
    When the user enters a password with fewer than 4 characters
    Then an error message should be displayed
    And the login button should remain disabled