# filter-predicates

A collection of useful functions to throw into `Array.filter()`.

## Installation

`npm install filter-predicates` or `yarn add filter-predicates`.

## What's available?

```javascript
import { filterFalsy, filterNull, filterNaN, filterTruthy, filterUndefined } from "filter-predicates";

const testArray = [true, false, 1, 0, -1, null, undefined, NaN];

testArray.filter(filterFalsy); // [true, 1, -1]

testArray.filter(filterNull); // [true, false, 1, 0, -1, undefined, NaN]

testArray.filter(filterNaN); // [true, false, 1, 0, -1, null, undefined]

testArray.filter(filterTruthy); // [false, 0, null, undefined, NaN]

testArray.filter(filterUndefined); // [true, false, 1, 0, -1, null, NaN]
```

## But why though?

Honestly I just got tired of explaining what `Array.filter(_ => _)` was for. Figured this would be easier in the future.
