'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
var LeftPanel_jsx_1 = require("./components/leftPanel/LeftPanel.js");
var LogInModalWindow_js_1 = require("./components/logIn/LogInModalWindow.js");
var Navigation_js_1 = require("./components/navigation/Navigation.js");
require("./app.sass");
var body = document.getElementsByTagName('body');
var App = function () {
    var _a = (0, react_2.useState)(false), modal = _a[0], setModal = _a[1];
    var openModalWindow = function () {
        setModal(true);
        if (body[0] !== undefined) {
            body[0].style.overflowY = 'hidden';
            body[0].style.paddingRight = '15px';
        }
        ;
    };
    var closeModalWindow = function () {
        setModal(false);
        if (body[0] !== undefined) {
            body[0].style.overflowY = 'scroll';
            body[0].style.paddingRight = '0';
        }
        ;
    };
    return (<div className='app' id='appId'>
            <LeftPanel_jsx_1.default openModalWindow={openModalWindow} modal={modal} setModal={setModal}/>
            <div className='app-appContainer'>
                <Navigation_js_1.default />
            </div>
            {modal && <LogInModalWindow_js_1.default closeModalWindow={closeModalWindow}/>} 
            {/* <CreateArticle /> */}
        </div>);
};

export default App;
