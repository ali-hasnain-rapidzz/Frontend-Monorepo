"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var navbar_1 = require("./Styling/navbar");
var Navbar = function () { return (react_1.default.createElement(navbar_1.Nav, null,
    react_1.default.createElement(navbar_1.Logo, null, "Logo"),
    react_1.default.createElement(navbar_1.NavList, null,
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "#" },
                react_1.default.createElement(navbar_1.NavLink, null, "Features"))),
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/solutions" },
                react_1.default.createElement(navbar_1.NavLink, null, "Solutions"))),
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/docs" },
                react_1.default.createElement(navbar_1.NavLink, null, "Docs"))),
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/blog" },
                react_1.default.createElement(navbar_1.NavLink, null, "Blog"))),
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/ci-pricing" },
                react_1.default.createElement(navbar_1.NavLink, null, "CI Pricing"))),
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/resources" },
                react_1.default.createElement(navbar_1.NavLink, null, "Resources")))),
    react_1.default.createElement(navbar_1.NavList, null,
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/app" },
                react_1.default.createElement(navbar_1.NavLink, null, "Go to App"))),
        react_1.default.createElement(navbar_1.NavItem, null,
            react_1.default.createElement(link_1.default, { href: "/contact" },
                react_1.default.createElement(navbar_1.NavLink, null, "Contact")))))); };
exports.default = Navbar;
