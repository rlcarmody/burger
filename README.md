# MySQL Burger

## Overview

* A small application for listing out burgers that are avaialble to eat and marking them as "devoured"
* Select the ingredients to list before submitting
* The backend is powered with Express server and Handlebars for server-side rendering

## Table Structure

To store ingredients and burger names as distinct entities, three tables were used to create the many-to-many relationship with the following schema:

### burgers              
| ID | burger_name    | devoured |
|----|----------------|----------|
| 1  | Black and Bleu | false    |

### ingredients
| ID | ingredient_name |
|----|-----------------|
| 1  | lettuce         |

The above two tables are related through a joining table with the ids of the two used as foreign keys

### burger_ingredients
| ID | burgerID | ingredientID |
|----|----------|--------------|
| 1  | 3        | 5            |

The "Add" button on the client makes a POST request to the server with the name of the burger and an array of the ingredient IDs.

The server then inserts the burger name into the burgers table and after retrieving the insertID executes an insert into the burger_ingredients table.


### Adding ingredients

The client does not support adding ingredients to the database at this time, but an api route is configured to allow additions using a post request. 

_Example_

```javascript
fetch('/api/ingredients',{
  method: 'POST',
  body: JSON.stringify({
    name: 'INGREDIENT NAME'
  })
})