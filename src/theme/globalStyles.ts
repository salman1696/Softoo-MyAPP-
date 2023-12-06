import { StyleSheet } from 'react-native';
import { SIZING } from './sizing';
import { SPACING } from './spacing';
import { Colors } from './themes/default_dark/Variables';

export const GST = StyleSheet.create({
  ...SPACING,
  ...SIZING,
  FLEX: {
    flex: 1,
  },
  ERROR: {
    marginTop: 5,
    fontSize: 14,
    color: Colors.primary,
  },
  SHADOW: {
    shadowColor: Colors.textGray800,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  DIVIDER: {
    borderBottomColor: "#444",
    borderBottomWidth: 1,
  },
  CONTENT_CONTAINER: {
    flexGrow: 1,
    justifyContent: "center",
  },
  BOTTOM_BTN_CONTANIER: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: RF(10),
  },
  TRIANGLE: {
    position: "absolute",
    bottom: -RF(15),
    right: "12%",
    width: 0,
    height: 0,
    borderLeftWidth: RF(25),
    borderTopWidth: RF(15),
    borderLeftColor: "transparent",
    borderTopColor: "#000",
  },
  OVERLAYSTYLE: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    marginRight: 0,
    paddingRight: 0,
  },
});
