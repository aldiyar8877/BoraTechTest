Feature: BoraLogin

  Scenario: Verify Bora Login
    Given I am on Boratech login page
    When I login as default user
    Then login must be successful
    And close browser

  Scenario: Verify Unsuccessful Login
    Given I am on Boratech login page
    When I login with random password
    Then error message will be display