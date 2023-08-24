Feature: Search articles

  Scenario Outline: As a user, I can search an article
    Given I am on the ebay page
    When I search <word>
    Then I should see the number of items that returned by the search
    Examples:
      | word    |
      | Pilas   |

# Imprimir por consola el número de items que devuelve la búsqueda.

