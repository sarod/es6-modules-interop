define(["moment"], function (momentStar) {
  "use strict";

  momentStar = _interopRequireWildcard(momentStar);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  try {
    console.log("momentStar:" + momentStar().toString());
  } catch (e) {
    console.log(e);
  }

  try {
    console.log("momentDefault:" + (0, momentStar.default)().toString());
  } catch (e) {
    console.log(e);
  }
});