import {StyleSheet} from "react-native";
import {theme} from "../../constants/Theme";

export const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.divider,
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: "5%",
    width: "100%",
    justifyContent: "flex-start",
  },
  inputContainerStyle: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: undefined,
    flexShrink: undefined
  },
  plus: {
    position: "absolute",
    left: theme.sizes.size15,
    top: 10,
  },
  spinner: {
    top: "25%",
    right: 10,
    position: "absolute",
  },
  list: {
    minWidth: "80%",
    backgroundColor: theme.backgroundPrimary,
    paddingTop: 0,
    marginTop: 0,
    borderWidth: 1,
    borderColor: theme.primary,
    maxHeight: 300,
  },
  listShadow: {
    backgroundColor: theme.backgroundPrimary,
    position: "absolute",
    zIndex: 3,
    top: 50,
    right: "4%",
    left: "8%",
    elevation: 4,
    shadowOffset: {width: 6, height: 9},
    shadowColor: theme.textSubtitle,
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  listFooter: {
    height: 16.7,
    borderTopWidth: 1,
    borderTopColor: theme.divider,
  },
  input: {
    fontSize: theme.sizes.size20,
    lineHeight: theme.sizes.size24,
    textDecorationLine: "none",
    paddingLeft: 40,
    height: 42,
    maxWidth: "100%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.primary,
    flexGrow: 2,
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 6,
    height: 41,
    justifyContent: "center",
  },
  listItemText: {
    justifyContent: "center",
    color: theme.listItem,
  },
  listHeader: {
    height: 41.8,
    justifyContent: "center",
    paddingTop: 0,
    backgroundColor: theme.backgroundPrimary,
    borderBottomWidth: 1,
    borderBottomColor: theme.primary,
  },
  listHeaderText: {
    color: theme.textSubtitle,
  },
  separator: {
    height: 1,
    backgroundColor: theme.divider,
  },
  sectionSeparator: {
    backgroundColor: theme.primary,
  },
  active: {
    zIndex: 100,
  },
});
