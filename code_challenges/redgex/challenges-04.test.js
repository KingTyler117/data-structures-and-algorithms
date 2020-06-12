'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Without altering the html, write a function named generateSubmitButton that uses jQuery to create a submit button with the text "submit" and append it to the DOM.
------------------------------------------------------------------------------------------------ */
let $ = createSnippetWithJQuery(`
<section>
  <form>
    <label> First Name:
      <input type="text" name="first" />
    </label>

    <label> Last Name:
      <input type="text" name="last" />
    </label>
  </form>
</section>
`);

const generateSubmitButton = () => {
  // $(document).ready(function(){npm
  $('body').append('<button type="submit" >submit</button>');

  // });

  // Use Jquerry to target location on page
  // $()
  // Use J Querry to create a sumbit button.
  // Apend sumbit button to target location

}
// kdkdkd kdkdkd mdkdk djkdkd dkdkd djkmdkd dkdmd ddmd 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named isNum that takes in a string or number of any length. This function should use a regular expression pattern to return true if the input contains a number, and false if the input does not contain a number.

For example:
12345 returns true
'12345' returns true
'h3llo world' returns true
'hello world' returns false
------------------------------------------------------------------------------------------------ */

const isNum = (input) => {
  let reg = /^\d+$/;
  return reg.test(input)

};


describe('Testing challenge 2', () => {
  test('It should return true if the input is a number', () => {
    expect(isNum(1234567890)).toBeTruthy();
    expect(isNum('12345')).toBeTruthy();
  });
});

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named isCapitalized that takes in a string. This function should use a regular expression pattern to match all words that begin with a capital letter. It should only match words, not punctuation.

Return an array containing all the matches.
------------------------------------------------------------------------------------------------ */

const isCapitalized = (str) => {
  let regx = /^[A-Z][a-z]*/
  let arr = str.split(' ');
  return arr.reduce((accum, element)=>{
    let extracted = element.match(regx);
    if (extracted) {
      accum.push(extracted[0])

    }
    return accum;

  }, [] )

  // console.log(arr[0][0].toUpperCase())
  // if (arr[0][0].toUpperCase() === arr[0][0]) {
  //   console.log('monkey')
  // }
  // for (let i = 0;i < arr.length; i++) {
  //   console.log(arr[i][0])
  //   if (arr[i][0].toUpperCase() === arr[i][0]) {
  //     console.log('was capitol')
  //   }
  // }
  // }
  // arr.sort();
  // return arr;
}
describe('Testing challenge 3', () => {
  test('It should only return words that begin with a capital letter', () => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    expect(capitalResult).toStrictEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
    expect(capitalResult.length).toStrictEqual(5);

    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);

    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named citiesAtoJ that takes in an array of city names and uses a regular expression pattern to return a new array containing any cities that begin with the letters A through J, inclusive.
------------------------------------------------------------------------------------------------ */

const citiesAtoJ = (arr) => {
  return arr.reduce((accum, element)=>{
    let regx = /^[a-j]/
    if ( regx.test(element.toLowerCase())) {
      accum.push(element)

    }
    return accum;

  }, [] )
  // arr.sort((a,b) => {
  //   if(a.length > b.length){ return 1;}
  //   if(a.length < b. length) { return -1;}
  //   return 0;

  // });
  // return arr;

};




/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

You have created a game application and begin by asking users an easy question: In which month is Halloween?

Write a function named matchMonth which uses a regular expression pattern to match any of these inputs: October, Oct, october, oct

If the user enters any of these four inputs, return true. For any other input, return false.

Do not use the vertical bar (pipe) in your pattern.
------------------------------------------------------------------------------------------------ */

const matchMonth = (input) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named noPunctuation that contains a regular expression pattern to find all of the words that contain a space immediately at the end of the word. Return an array of all such words, still containing the space at the end.

For example, if given the string "Hello, and have a wonderful day!", the word "Hello, " would not be returned because it is immediately followed by a comma. The word "day!" would not be returned because it is immediately followed by an exclamation point.

The expected output of "Hello, and have a wonderful day!" is ["and ", "have ", "a ", "wonderful "].
------------------------------------------------------------------------------------------------ */

const noPunctuation = str => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

You want to teach a friend how to play hangman and want to show them using a partially complete puzzle.

Write a function named hangman which uses the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string, regardless of capitalization, and replace them with an underscore.

The function should return a string containing the consonants in their original positions and underscores where the vowels were previously located.

For example, 'Welcome to Code 301!' will return 'W_lc_m_ t_ C_d_ 301!'.
------------------------------------------------------------------------------------------------ */

let hangman = (str) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named findShells that takes in the string below and uses a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells".

Do not use the vertical bar (pipe) character.

Hint: All of these words end with the letters "ells".
------------------------------------------------------------------------------------------------ */

const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

const findShells = (str) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-04.solution.test.js

------------------------------------------------------------------------------------------------ */
describe('Testing challenge 1', () => {
  test('It should add a submit button to the DOM', () => {
    generateSubmitButton();
    expect($('button').text()).toStrictEqual('submit');
  })
});


describe('Testing challenge 2', () => {
  test('It should return true if the input is a number', () => {
    expect(isNum(1234567890)).toBeTruthy();
    expect(isNum('12345')).toBeTruthy();
  });
});


describe('Testing challenge 3', () => {
  test('It should only return words that begin with a capital letter', () => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    expect(capitalResult).toStrictEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
    expect(capitalResult.length).toStrictEqual(5);

    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);

    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});



describe('Testing challenge 4', () => {
  let cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

  test('It should return the cities whose names begin with the letters A through J', () => {
    expect(citiesAtoJ(cities)).toContain('Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken');
    expect(citiesAtoJ(cities).length).toStrictEqual(5);

    expect(citiesAtoJ([])).toStrictEqual([]);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toEqual(expect.arrayContaining(['Albuquerque', 'Chicago', 'Eugene']));
  });
});


function createSnippetWithJQuery(html){
  return cheerio.load(html);
}
