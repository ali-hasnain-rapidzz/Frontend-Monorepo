"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavLink = exports.NavItem = exports.NavList = exports.Logo = exports.Nav = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Nav = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 8px;\n  margin-left: 5px;\n  margin-right: 20px;\n  background: #fff;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid #eaeaea;\n  border-radius: 15px;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  height: 60px;\n"], ["\n  margin-top: 8px;\n  margin-left: 5px;\n  margin-right: 20px;\n  background: #fff;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid #eaeaea;\n  border-radius: 15px;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  height: 60px;\n"])));
exports.Logo = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  img {\n    margin-top: 15px;\n    height: 70px;\n  }\n"], ["\n  img {\n    margin-top: 15px;\n    height: 70px;\n  }\n"])));
exports.NavList = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n"], ["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n"])));
exports.NavItem = styled_components_1.default.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0 15px;\n"], ["\n  margin: 0 15px;\n"])));
exports.NavLink = styled_components_1.default.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
