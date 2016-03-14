var HelloAngular;
(function (HelloAngular) {
    angular.module("HelloAngular", []);
    var HomeController = (function () {
        function HomeController() {
            this.message = "Hello Controller!";
            this.colors = ["Red", "Blue", "Green", "Purple"];
        }
        HomeController.prototype.update = function () {
            this.message = "You clicked it!";
        };
        return HomeController;
    }());
    angular.module("HelloAngular")
        .controller("HomeController", HomeController);
})(HelloAngular || (HelloAngular = {}));
//# sourceMappingURL=app.js.map