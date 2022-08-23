Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Select destination Pune to Bangaluru
    Given open goibio web Page
    When select destination from pune to Bangaluru 
    And Departure date: 7th day from current date
    Then click search
    And list all the flights which have ope stop (without using filter)