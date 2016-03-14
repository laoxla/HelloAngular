
namespace HelloAngular {
    angular.module("HelloAngular", []);

    class HomeController {
        public message = "Hello Controller!";

        public colors = ["Red", "Blue", "Green", "Purple"];

        update() {
            this.message = "You clicked it!";
        }
    }

    angular.module("HelloAngular")
        .controller("HomeController", HomeController);
}