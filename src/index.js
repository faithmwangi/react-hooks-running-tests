import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("displays the text 'hello from the Header!'", () => {
    render(<Header />);
    expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
  });
});
