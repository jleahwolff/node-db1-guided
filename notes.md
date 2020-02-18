## RELATIONAL DATABASE MANAGEMENT SYSTEMS
- SQLite3
- 

#Project
Using library: `npm i knex`
Driver: SQLite3 `npm i sqlite3`


```sql
SELECT * FROM customers
WHERE country = 'Mexico' OR city = 'Paris'
ORDER BY country desc, ContactName;

SELECT * FROM customers
WHERE country = 'Mexico' OR city = 'Paris'
ORDER BY country desc, ContactName
LIMIT 5;

INSERT INTO Shippers (ShipperName, Phone)
VALUES ('Vincent Shippers', '555-555-5555');

UPDATE employees
SET Notes = 'was not born on new years', photo = 'N/A'
WHERE employeeId = 11;
```