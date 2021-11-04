# filter-predicates

A collection of useful functions to throw into `Array.filter()`.

## Installation

`npm install filter-predicates` or `yarn add filter-predicates`.

## What's available?

```javascript
import { filterFalsy, filterTruthy, filterNull } from "filter-predicates";

const arr = [true, false, 1, 0, null, "string"];

arr.filter(filterFalsy); // [true, 1, "string"]

arr.filter(filterTruthy); // [false, 0, null]

arr.filter(filterNull); // [true, false, 1, 0, "string"]
```

## But why though?

Honestly I just got tired of explaining what `Array.filter(_ => _)` was for. Figured this would be easier in the future.
