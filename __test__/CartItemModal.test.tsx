import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import CartItemModal from '../src/components/CartItemModal/CartItemModal';
import renderer from "react-test-renderer";
import React = require('react');

it('renders correctly across screens', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <CartItemModal item={undefined} navigation={undefined} />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});