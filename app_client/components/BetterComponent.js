
let ngThis;

class BetterComponentCtrl {

    static $inject = ['$element', '$filter']; // Inject $filter angular service, and $element

    constructor($element, $filter) {
        // Create a `this` for angular that will be called ngThis 
        // `this` will be used in React.createClass as React context
        ngThis = this;
        ngThis.$filter = $filter;
        ngThis.$element = $element;
        ngThis.controllerValueToShowInReactComponent = `test`;
    }

    initReactComp() {
        ngThis.reactComponent = React.createClass({
            render: function() {
                // Using the angular myNgFilter filter in the React context!
                // That means that every service/controller/factory/filter can be reached in the context via ngThis
                // All ngThis values are exposed here like `controllerValueToShowInReactComponent`
                return <h1> 
                            { ngThis.$filter('myNgFilter')('Hello World!') } { ngThis.controllerValueToShowInReactComponent }
                        </h1>;
            }
        });
    }

    $onInit() {
        console.log('on init in component');
    }

    /**
     * Every time there's a changes in the component inputs (Like input in bindings),
     * This function will be executed with the new values binded to ngThis, 
     * and we will render the reactComponent again.
     */
    $onChanges() {

        if(!ngThis.reactReady) {
            // Initial code
            ngThis.initReactComp(); // Initial react component once at bootstrap
            ngThis.reactReady = true;
        }

        const reactComponent = ngThis.reactComponent;
        // Render the reactComponent we configured above and render it on the 
        // base element ($element) of the component
        ReactDOM.render(<reactComponent
                           input={ngThis.input} />, ngThis.$element[0]);
    }


}


export default {
    bindings: {
        input: '<'
    },
    template: ``,
    controller: BetterComponentCtrl
}
