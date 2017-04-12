###Switch Extras

Having the following list of roles for the users in a webapp: Admin, Editor, User. 
Create a script that prints in the console the roles a i have as a user using a Switch, create 3 users with 3 diff. roles and test each one.

Output:

```xUser role is Admin```

###For loop extras:

Create the html code in order to display a generated random list of 5 `<li>` inside of an `<ul>` and the number inside the `<li>` elements could be between 10 and 20.

The output should look like this:

```
<ul>
	<li>Random 13</li>
	<li>Random 19</li>
	<li>Random 15</li>
	<li>Random 16</li>
	<li>Random 17</li>
</ul>
```

### Functions extras

Create 2 functions:

One that does the procedure of generating a random number taking MAX and MIN as parameters, so we can change them every time i call the function without writing the rest of the Math.random Code. Make sure it returns the value of the generated number.

The other function will take a string which is the date in this format: `"11/04/17"` and return it into `April 11 2017`, don't use any built-in date functions in JS, create a switch statement;


### Arrays

#### Meal planning

Create an array with 12 diff menus for a diet (could be healthy or unhealthy), just the names and create a function that picks 6 meals per week randomly for Mon - Sat, for each meal just console log the day and the meal. We are not including Sunday cuz it's a cheat day. Make sure they don't repeat in the same week.

Output:

``` 
Monday - Tuna Salad
Tuesday - Chicken Salad
.
.
.
Friday - Salmon Salad
Saturday - Tacos!!
```

#### 3 Strikes

Save in an array 3 elements that will determine if all of them are true then you lose.

- Create a function that randomly decides if there's a strike or not every time you call it and saves in the next available index.
- Create a function that checks if you have 3 strikes and determine the final result, after seeing the result it's a good idea to clear the array to try again. 

Possible example Output:

```
Strike
Score
Strike

You can try again.

Strike
Strike
Strike

You lose.

Score
Score
Score

You Win.

```
