"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOpening = void 0;
const react_1 = require("react");
// hooks
const useOpening = (initialState = { anchor: null, isOpen: false }) => {
    const [opening, setOpening] = (0, react_1.useState)(initialState);
    const close = (0, react_1.useCallback)(() => setOpening({ anchor: null, isOpen: false }), []);
    const open = (0, react_1.useCallback)((event = {}) => {
        const { currentTarget = null } = event;
        setOpening({ anchor: currentTarget, isOpen: true });
    }, []);
    const toggle = opening.isOpen ? close : open;
    return Object.assign(Object.assign({}, opening), { close, open, toggle });
};
exports.useOpening = useOpening;
//# sourceMappingURL=index.js.map