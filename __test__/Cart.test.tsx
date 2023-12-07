import React from "react";
import { render } from "@testing-library/react-native";
import Cart from "../src/screens/BottomTab/Cart";

test("renders cart screen correctly", () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
  ];

  const { getByText } = render(
    <Cart navigation={undefined} route={undefined} />
  );

  // Assert that all product names and quantities are rendered correctly
  expect(getByText("Product 1")).toBeTruthy();
  expect(getByText("2")).toBeTruthy(); // Quantity of Product 1
  expect(getByText("Product 2")).toBeTruthy();
  expect(getByText("1")).toBeTruthy(); // Quantity of Product 2

  // Add more assertions for prices, total amount, or any other relevant information
});

////////////////////////////////////////////////////////////////////////////

test('Cart screen displays "Cart is empty" message when cart is empty', () => {
  // Simulate an empty cart
  const cart = [];

  // Render the cart screen with the empty cart state
  const { getByText } = render(
    <Cart navigation={undefined} route={undefined} />
  );

  // Verify that the "Cart is empty" message is displayed
  const emptyCartMessage = getByText("Cart is empty");
  expect(emptyCartMessage).toBeTruthy();
});
