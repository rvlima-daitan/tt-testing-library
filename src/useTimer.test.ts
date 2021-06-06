import { renderHook } from "@testing-library/react-hooks";
import useTimer from "./useTimer";

test("should return the timer value", async () => {
  const { result, waitForValueToChange } = renderHook(() => useTimer());

  expect(result.current).toBe(0);
  await waitForValueToChange(() => result.current, { timeout: 2000 });
  expect(result.current).toBe(1);
});
