import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";
import { fizzbuzz } from "./mod.ts";

Deno.test("fizzbuzz(10)", () => {
  const result = [...fizzbuzz(10)];
  const expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"];
  assertEquals(result, expected);
});
