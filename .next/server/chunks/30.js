"use strict";
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 6567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G9": () => (/* binding */ addToHistory),
/* harmony export */   "ek": () => (/* binding */ removeFromFavourites),
/* harmony export */   "l9": () => (/* binding */ removeFromHistory),
/* harmony export */   "my": () => (/* binding */ addToFavourites),
/* harmony export */   "on": () => (/* binding */ getFavourites),
/* harmony export */   "s1": () => (/* binding */ getHistory)
/* harmony export */ });
/* harmony import */ var _lib_authenticate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5425);

async function addToFavourites(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "Authorization": `JWT ${(0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function removeFromFavourites(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "Authorization": `JWT ${(0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function getFavourites() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
        method: "GET",
        headers: {
            "Authorization": `JWT ${(0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        console.log(data);
        return data;
    } else {
        return [];
    }
}
async function addToHistory(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "Authorization": `JWT ${(0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function removeFromHistory(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "Authorization": `JWT ${(0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function getHistory() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history`, {
        method: "GET",
        headers: {
            "Authorization": `JWT ${(0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}


/***/ }),

/***/ 3360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ searchHistoryAtom),
/* harmony export */   "p": () => (/* binding */ favouritesAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const favouritesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)();
const searchHistoryAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;