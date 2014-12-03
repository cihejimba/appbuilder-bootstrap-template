(function() {
    "use strict";

    var home = new kendo.View("home"),
        settings = new kendo.View("settings"),
        contacts = new kendo.View("contacts"),
        router = new kendo.Router();

    router.route("/", function() {
        home.render("#app");
    });
    router.route("/settings", function() {
        settings.render("#app");
    });
    router.route("/contacts", function() {
        contacts.render("#app");
    });
    router.bind("change", function() {
        $("#app").empty();
        $(".navbar-collapse").removeClass("in");
    });

    $(function() {
        router.start();
    })
}());