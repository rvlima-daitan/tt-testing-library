import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

test("should not render the result span if not data was received", async () => {
  const json = jest.fn().mockResolvedValue({});
  jest.spyOn(window, "fetch").mockResolvedValue({ json } as any);
  const { queryByTestId, getByText } = render(<App />);
  act(() => {
    fireEvent.click(getByText(/Request/i));
  });
  await waitFor(() => {
    expect(queryByTestId("result")).not.toBeInTheDocument();
  });
});

test("should render the result span with the data received", async () => {
  const expectedResult = { name: "Death Star" };
  const json = jest.fn().mockResolvedValue(expectedResult);
  jest.spyOn(window, "fetch").mockResolvedValue({ json } as any);
  const { getByTestId, getByText } = render(<App />);
  act(() => {
    fireEvent.click(getByText(/Request/i));
  });
  await waitFor(() => {
    expect(getByTestId("result").textContent).toEqual(
      JSON.stringify(expectedResult),
    );
  });
});
