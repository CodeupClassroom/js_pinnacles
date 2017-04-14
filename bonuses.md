Bonuses!
========

If you are finished with your exercises, take a stab at these
challenges:

Easy
----

Create a function that accepts an array, and returns the first element
in the array

``` {.javascript}
first([1, 2, 3]);
// 1
```

------------------------------------------------------------------------

Create a function that accepts an array and return the last element in
the array

``` {.javascript}
last([1, 2, 3]);
// 3
```

------------------------------------------------------------------------

Create a function that accepts an array, and returns everything *but*
the first element

``` {.javascript}
rest([1, 2, 3, 4, 5]);
// [2, 3, 4, 5]
```

------------------------------------------------------------------------

Create a function that accepts an array, and returns a random element
from the array

Medium
------

Create a function that accepts a string that is a sentence, and returns
an object whose keys are the unique words in the string, and whose
values are the number of times that word occurs in the string.

``` {.javascript}
wordCount('one two three');
// {"one": 1, "two": 1, "three": 1}
wordCount('coffee tacos coffee tacos tacos');
// {"coffee": 2, "tacos": 3}
```

------------------------------------------------------------------------

Create a function that generates a range of numbers. The function should
accept a start and end number, and return an array of a range between
those numbers

``` {.javascript}
range(1, 5);
// [1, 2, 3, 4, 5]
range(-5, -1);
// [-5, -4, -3, -2, -1]
```

**Bonus**

Allow your function to optionally take a third parameter for step (i.e.
the distance between elements)

``` {.javascript}
range(2, 10, 2);
// [2, 4, 6, 8, 10]
```

------------------------------------------------------------------------

Create a function to split an array up into chunks. The function should
accept an array and a chunk size, and return an array of arrays, where
each inner array is the size passed to the function.

``` {.javascript}
var numbers = [1, 2, 3, 4, 5, 6];
chunk(numbers, 2);
// [[1, 2], [3, 4], [5, 6]]
```

``` {.javascript}
var numbers = [1, 2, 3, 4, 5, 6];
chunk(numbers, 4);
// [[1, 2, 3, 4], [5, 6]]
```

------------------------------------------------------------------------

Hard
----

Remember how we used to text on cell phones? You would have to press
each key a number of times to get certain letters.

```
    +------+-----+------+
    |  1   |  2  |  3   |
    |      | abc | def  |
    +------+-----+------+
    |  4   |  5  |  6   |
    | ghi  | jkl | mno  |
    +------+-----+------+
    |  7   |  8  |  9   |
    | pqrs | tuv | wxyz |
    +------+-----+------+
    | *    |  0  |  #   |
    |      |  _  |      |
    +------+-----+------+
```

So to type `codeup`, you would need to

1.  press 2 3 times
2.  press 6 3 times
3.  press 3 1 time
4.  press 3 2 times
5.  press 8 2 times
6.  press 7 1 time

For a total of 12 keypresses

Write a function that accepts a string as input and returns the number
of keypresses you would have to make to text that string

``` {.javascript}
keypresses('codeup');
// 12
keypresses('hey there');
// 18
```

- Don't worry about upper and lower case
- Don't worry about punctuation
- the `0` key is a space

