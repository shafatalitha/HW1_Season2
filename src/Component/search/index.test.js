import { Provider } from "react-redux";
import Search from "./index";
import { render, screen, cleanup } from "@testing-library/react";
import store from "../../store";


const setup = () =>
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

describe("Search bar should rendered", () => {
  beforeEach(setup);
  afterEach(cleanup);

  it("Success rendered", () => {
    const searchInput = screen.getByTestId("input-search");
    const buttonsearch = screen.getByTestId("button-search");

    expect(searchInput).toBeInTheDocument();
    expect(buttonsearch).toBeInTheDocument();
  });
});