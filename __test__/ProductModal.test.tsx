import { fireEvent, render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../src/store";
import ProductModal from "../src/components/ProductModal/ProductModal";
import renderer from "react-test-renderer";
import React = require("react");
import { Cart } from "Softoo-MyAPP-/src/screens";

it("renders correctly across screens", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ProductModal item={undefined} navigation={undefined} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//////////////////////////////////////////////////////////////////

test("Adding a product to cart updates the cart screen", () => {
  // Simulate user interaction: adding a product to the cart
  const product = {
    id: 1,
    name: "Example Product",
    price: 10,
  };
  const cart = [];
  const updatedCart = [product];

  // Update the cart state
  const { getByTestId } = render(
    <Cart navigation={undefined} route={undefined} />
  );
  fireEvent.press(getByTestId("add-to-cart"));

  // Verify that the cart screen displays the updated cart
  const cartItems = getByTestId("cart-items");
  expect(cartItems.children.length).toBe(1);
  expect(cartItems.children[0].props.product).toEqual(product);
});

/////////////////////////////////////////////////////////////////
