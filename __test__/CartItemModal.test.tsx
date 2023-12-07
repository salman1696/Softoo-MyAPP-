import { fireEvent, render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../src/store";
import CartItemModal from "../src/components/CartItemModal/CartItemModal";
import renderer from "react-test-renderer";
import React = require("react");
import { Cart } from "Softoo-MyAPP-/src/screens";

it("renders correctly across screens", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CartItemModal item={undefined} navigation={undefined} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/////////////////////////////////////////////////////////////////

test("Pressing add quantity button updates the quantity in the cart", () => {
  // Simulate user interaction: pressing the add quantity button
  const product = {
    id: 1,
    name: "Example Product",
    price: 10,
    count: 1,
  };
  const updatedProduct = {
    ...product,
    count: 2,
  };
  const cart = [product];

  // Update the cart state
  const { getByTestId } = render(
    <Cart navigation={undefined} route={undefined} />
  );
  fireEvent.press(getByTestId("add-quantity-button"));

  // Verify that the quantity in the cart is updated
  const cartItems = getByTestId("cart-items");
  expect(cartItems.children.length).toBe(1);
  expect(cartItems.children[0].props.product).toEqual(updatedProduct);
});
/////////////////////////////////////////////////////////////////

test("Pressing minus quantity button updates the quantity in the cart", () => {
  // Simulate user interaction: pressing the add quantity button
  const product = {
    id: 1,
    name: "Example Product",
    price: 10,
    count: 1,
  };
  const updatedProduct = {
    ...product,
    count: 0,
  };
  const cart = [product];

  // Update the cart state
  const { getByTestId } = render(
    <Cart navigation={undefined} route={undefined} />
  );
  fireEvent.press(getByTestId("add-quantity-button"));

  // Verify that the quantity in the cart is updated
  const cartItems = getByTestId("cart-items");
  expect(cartItems.children.length).toBe(1);
  expect(cartItems.children[0].props.product).toEqual(updatedProduct);
});
