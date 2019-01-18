const MyComponent = require("./MyComponent");

class FailingComponent extends React.Component {
    render() {
        return React.createElement(MyComponent);
    }
}

module.exports = FailingComponent;
