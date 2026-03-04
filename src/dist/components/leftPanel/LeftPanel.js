import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import '../../../components/leftPanel/leftPanel.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
function LeftPanel(props) {
    return (_jsx("div", { className: 'leftPanel', children: _jsxs("div", { className: "leftPanel-leftPanelContent", children: [_jsx(FontAwesomeIcon, { icon: faCircleUser, className: 'leftPanel-leftPanelContent-faCircleUser' }), _jsx("button", { className: "leftPanel-leftPanelContent-logIn", onClick: props.onClick, children: "\u0412\u043E\u0439\u0442\u0438" })] }) }));
}
;
export default LeftPanel;
//# sourceMappingURL=LeftPanel.js.map