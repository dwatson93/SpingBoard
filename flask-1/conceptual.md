### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
- JavaScript is a scripting language, Python is an object-oriented programming language

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
  get() and setdefault()


- What is a unit test?
- A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.

- What is an integration test?
-  a test for checking if separately developed modules work together as expected

- What is the role of web application framework, like Flask?
- create and comnuicate with server requests

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  use query param because pretzel is a extension of food 

- How do you collect data from a URL placeholder parameter using Flask?
- request.form

- How do you collect data from the query string using Flask?
- request.args

- How do you collect data from the body of the request using Flask?
- request.data

- What is a cookie and what kinds of things are they commonly used for?
- cookires is saved data of the user, it is commonly used to share user data and settings between server request

- What is the session object in Flask?
- saved info that is saved while the user is on the site.

- What does Flask's `jsonify()` do?
- return json
