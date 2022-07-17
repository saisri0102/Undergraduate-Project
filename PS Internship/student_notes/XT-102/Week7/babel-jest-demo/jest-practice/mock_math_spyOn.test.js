import * as app from "./app";
import * as math from "./math";

// Here we simply “spy” calls to the math function, but leave the original implementation in place:
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});