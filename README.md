# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mozzion/lotide`

**Require it:**

`const _ = require('@mosszion/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetter = function(str)`: description
* `assertArraysEqual = function(arr1, arr2)`: checks if two arrays are equal
* `assertEqual = function(actual, expected)`: checks two primitives equallity
* `assertObjectsEqual = function(actual, expected)`: checks two objects equallity
* `countOnly = function(actual, expected)`: counts specific items only
* `eqArrays = function(firstArray, secondArray)`: two input arrays checked for equality
* `eqObjects = function(object1, object2)`: two input objects checked for equality
* `findKey = function(object, callback)`: uses callback to find key of an object's value
* `findKeyByValue = function(object, value)`: given an object and a value, returns key of the value from the Object
* `flatten = function(arr)`: given an array or nested array, returns a single flat array
* `head = function(list)`: given an array, returns the first element of the array
* `head = function(list)`: given an array, returns the first element of the array
* `index file`: contains all of the functions of our codesgiven an array
* `letterPositions = function(sentence)`: returns index of a letter selected
* `map = function (array, callback)`: takes an array and callback, and returns another array after went through callback
* `middle = function(ary)`: takes an array and returns another array with the middle elements
* `tail = function(ary)`: takes an array and returns the elements except the first element 
* `takeUntil = function(array, callback)`: takes an array and a callback , and returns a slice of array
* `without = function(array1, array2)`: takes two arrays and returns a small array which is not common for both arrays








