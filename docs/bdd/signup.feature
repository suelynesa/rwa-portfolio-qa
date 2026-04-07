Feature: Sign Up

  As a new user
  I want to create an account
  So that I can use the application

  Background:
    Given the user is on the sign up page

  @TC-SIGNUP-001 @smoke @critical
  Scenario: New user successfully registered
    When the user fills in valid data
    Then the account should be created successfully

  @TC-SIGNUP-002 @regression
  Scenario: Registration with missing fields
    When the user submits incomplete data
    Then error messages should be displayed

  @TC-SIGNUP-010 @regression
  Scenario: Should not allow registration with an existing username
    Given a user with the same username already exists
    When the user submits the registration form
    Then an error message should be displayed

  @TC-SIGNUP-011 @regression
  Scenario: Registration with blank spaces
    When the user fills fields with only spaces
    Then the system should not allow registration