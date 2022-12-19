"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 5425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "So": () => (/* binding */ authenticateUser),
/* harmony export */   "YG": () => (/* binding */ readToken),
/* harmony export */   "a$": () => (/* binding */ registerUser),
/* harmony export */   "gy": () => (/* binding */ removeToken)
/* harmony export */ });
/* unused harmony export isAuthenticated */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

function setToken(token) {
    localStorage.setItem("access_token", token);
}
function getToken() {
    try {
        return localStorage.getItem("access_token");
    } catch (err) {
        return null;
    }
}
function readToken() {
    try {
        const token = getToken();
        return token ? jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token) : null;
    } catch (err) {
        return null;
    }
}
function isAuthenticated() {
    const token = readToken();
    return token ? true : false;
}
function removeToken() {
    localStorage.removeItem("access_token");
}
async function authenticateUser(user, password) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
            userName: user,
            password: password
        }),
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        setToken(data.token);
        return true;
    } else {
        throw new Error(data.message);
    }
}
async function registerUser(user, password, password2) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        body: JSON.stringify({
            userName: user,
            password: password,
            password2: password2
        }),
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return true;
    } else {
        throw new Error(data.message);
    }
}


/***/ })

};
;