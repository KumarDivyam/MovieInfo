"use strict";
(() => {
var exports = {};
exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/movie.js

async function handler(req, res) {
    if (req.method === "GET") {
        const options = {
            method: "GET",
            url: "https://imdb8.p.rapidapi.com/title/find",
            params: {
                q: req.query.movieName
            },
            headers: {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "e324e15cd4msh843620e8d6ea870p1b7b8ajsnbd8d12bc1494"
            }
        };
        external_axios_default().request(options).then(function(response) {
            res.status(200).json(response.data);
        }).catch(function(error) {
            console.error(error);
            res.status(response.status);
        });
    } else {
        res.status(400);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(190));
module.exports = __webpack_exports__;

})();