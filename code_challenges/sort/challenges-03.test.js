'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named changeAllClassNames that uses jQuery to select all each li and add a class of "fruit";

------------------------------------------------------------------------------------------------ */
const $ = createSnippetWithJQuery(`
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li>Pear</li>
</ul>
`);

const changeAllClassNames = () => {
  $('li').addClass('fruit')
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, highest to smallest.
------------------------------------------------------------------------------------------------ */

const sortBackwards = (arr) => arr.sort ((a,b)=> b-a);


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */

const alphabetize = (arr) => {
  arr.sort((a,b)=>{
    if (a > b) {
      return 1;
    } else if (a < b){
      return -1;
    }
  });
  return arr;

};





/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.
------------------------------------------------------------------------------------------------ */

const sortByLength = (arr) => arr.sort((a,b) => a.length - b.length);



describe('Testing challenge 1', () => {
  test('It should add a class of fruit to all the list items', () => {
    changeAllClassNames();

    expect($('li.apple').hasClass('fruit')).toBe(true);
    expect($('li.orange').hasClass('fruit')).toBe(true);
  })
})



describe('Testing challenge 2', () => {
  test('It should sort high-to-low the numbers in an array', () => {
    const nums = [3,4,5,6,7];
    expect(sortBackwards(nums)).toStrictEqual([7,6,5,4,3]);
    expect(sortBackwards([3,2,1])).toStrictEqual([3,2,1]);
    expect(sortBackwards([12,20,3])).toStrictEqual([20, 12, 3]);
    expect(sortBackwards([])).toStrictEqual([]);
    expect(sortBackwards([1])).toStrictEqual([1]);
  });
});





describe('Testing challenge 3', () => {
  test('It should sort strings alphabetically', () => {
    expect(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'Zebra', 'alphabet', 'carrot']);
    expect(alphabetize(['alphabet','Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'alphabet', 'carrot']);
    expect(alphabetize([])).toStrictEqual([]);
  });
});


describe('Testing challenge 4', () => {
  test('It should sort strings by length', () => {
    const ans = sortByLength(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    expect(ans.slice(0,2)).toStrictEqual(['Zebra', 'carrot']);
    expect(ans.slice(2,4)).toEqual(expect.arrayContaining(['Alphabet', 'alphabet']));
    expect(sortByLength(['a', 'bc', ''])).toStrictEqual(['', 'a', 'bc']);
    expect(sortByLength(['a'])).toStrictEqual(['a']);
    expect(sortByLength([])).toStrictEqual([]);
  });
});






function createSnippetWithJQuery(html){
  return cheerio.load(html);
}
