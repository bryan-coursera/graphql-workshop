"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _graphqlAnywhere = require("graphql-anywhere");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defaults(obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);
    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : _defaults(subClass, superClass);
}
// $FlowDisable

// module.exports = withFragments({
//   course: gql`
//     fragment SomeCourseFragment on CoursesV1 {
//       name
//       slug
//     }
//   `
// })(SomeComponent);

// This function will handle data masking and validating whether or not enough data is being
// passed to this component.

// $FlowDisable
var filterProps = function filterProps(unfilteredProps, fragments) {
  return _underscore2.default.mapObject(unfilteredProps, function(value, key) {
    if (fragments[key]) {
      return (0, _graphqlAnywhere.filter)(fragments[key], value);
    }
    return value;
  });
};

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
};

module.exports = function(fragments) {
  return function(Component) {
    var _class, _temp;

    var WithFragments = ((_temp = (_class = (function(_React$Component) {
      _inherits(WithFragments, _React$Component);

      function WithFragments() {
        _classCallCheck(this, WithFragments);

        return _possibleConstructorReturn(
          this,
          _React$Component.apply(this, arguments)
        );
      }

      WithFragments.prototype.render = function render() {
        var filteredProps = filterProps(this.props, fragments);

        return _react2.default.createElement(Component, filteredProps);
      };

      return WithFragments;
    })(_react2.default.Component))), (_class.displayName = "WithFragments(" +
      getDisplayName(Component) +
      ")"), (_class.propTypes = _underscore2.default.mapObject(
      fragments,
      function(fragment) {
        return (0, _graphqlAnywhere.propType)(fragment);
      }
    )), (_class.fragments = fragments), _temp);

    return WithFragments;
  };
};
