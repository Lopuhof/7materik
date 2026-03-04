import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../../components/notFound/notFound.sass';
const NotFound = () => {
    return (_jsx("div", { className: 'notFound', children: _jsxs("div", { className: 'notFound-container', children: [_jsxs("div", { className: 'notFound-container-title', children: [_jsx("div", { className: 'notFound-container-title-xmark', children: _jsx(FontAwesomeIcon, { icon: faXmark, className: 'notFound-container-title-xmark-icon' }) }), _jsx("div", { className: 'notFound-container-title-text', children: "404" })] }), _jsx("div", { className: 'notFound-container-subtitle', children: "\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0435, \u0442\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442..." })] }) }));
};
export default NotFound;
//# sourceMappingURL=NotFound.js.map