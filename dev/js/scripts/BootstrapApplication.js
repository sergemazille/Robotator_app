function BootstrapApplication() {

    // Si le client est l'application web, on lance directement la recherche du serveur.
    // Sinon il faut attendre que l'appareil soit prêt
    if (Client.isWebApp) {
        // Passe la fonction principale un objet Robotator qui va déterminer l'adresse IP complète du serveur et lancer l'application en fonction
        let robot = new Robotator();
        robot.launchApp(application);
    } else {
        // Initialisation de Cordova
        var app = {
            initialize: function () {
                this.bindEvents();
            },
            bindEvents: function () {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            onDeviceReady: function () {
                let robot = new Robotator();
                robot.launchApp(application);
            }
        };

        app.initialize();
    }
}

BootstrapApplication();
