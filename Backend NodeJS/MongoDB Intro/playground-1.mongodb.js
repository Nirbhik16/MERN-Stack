// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Harry"
  },
  {
    "name": "Python",
    "price": 18000,
    "instructor": "Emma"
  },
  {
    "name": "C++",
    "price": 22000,
    "instructor": "James"
  },
  {
    "name": "JavaScript",
    "price": 25000,
    "instructor": "Sophia"
  },
  {
    "name": "SQL",
    "price": 19000,
    "instructor": "Oliver"
  },
  {
    "name": "HTML",
    "price": 15000,
    "instructor": "Charlotte"
  },
  {
    "name": "CSS",
    "price": 16000,
    "instructor": "William"
  },
  {
    "name": "Ruby",
    "price": 23000,
    "instructor": "Isabella"
  }
]);

// Print a message to the output window.
console.log(`Done! Successfully inserted.`);