"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        // Define a Getter Length function
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // Define compare Function
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    // Define swap function
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var characters = this.data.split("");
        _a = [characters[rightIndex], characters[leftIndex]], characters[leftIndex] = _a[0], characters[rightIndex] = _a[1];
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
