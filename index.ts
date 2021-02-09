import { of, from } from "rxjs";
import { map, switchMap, filter, tap, last } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]).pipe(
  map(singleValue => singleValue + 1),
  tap(console.log),
  last(),
  map(lastVal => lastVal * 10)
);

source.subscribe(response => {
  console.log(response);
});
