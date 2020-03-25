"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.App = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Adori Branded Apps"),
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, "A demo app to test out player SDK integration into branded apps"),
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, "A simple counter to test React Native common package"),
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, count),
        react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () { return setCount(count + 1); } })));
};
var styles = react_native_1.StyleSheet.create({
    body: {
        backgroundColor: "white",
    },
    sectionContainer: {
        margin: 32,
        textAlign: "center"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "black",
    },
    sectionDescription: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: '400',
        color: "gray",
    }
});
