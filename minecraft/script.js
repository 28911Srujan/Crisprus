/* =====================================================
   MAIN CONNECTOR
===================================================== */

const connectorBadge =
    document.getElementById("connectorBadge");

const connectorStatus =
    document.getElementById("connectorStatus");

const connectorStatusCard =
    document.getElementById("connectorStatusCard");

const connectorSymbol =
    document.getElementById("connectorSymbol");

const connectorTitle =
    document.getElementById("connectorTitle");

const connectorDescription =
    document.getElementById("connectorDescription");


function setConnectorState(state) {

    connectorBadge.classList.remove(
        "online",
        "offline",
        "starting"
    );

    connectorStatusCard.classList.remove(
        "online",
        "offline",
        "starting",
        "state-change"
    );

    void connectorStatusCard.offsetWidth;

    connectorStatusCard.classList.add(
        "state-change"
    );


    if (state === "ONLINE") {

        connectorBadge.classList.add("online");

        connectorStatusCard.classList.add("online");

        connectorStatus.textContent = "ONLINE";

        connectorTitle.textContent = "Online";

        connectorDescription.textContent =
            "The main connector is online.";

        connectorSymbol.textContent = "●";
    }


    if (state === "OFFLINE") {

        connectorBadge.classList.add("offline");

        connectorStatusCard.classList.add("offline");

        connectorStatus.textContent = "OFFLINE";

        connectorTitle.textContent = "Offline";

        connectorDescription.textContent =
            "The main connector is currently offline.";

        connectorSymbol.textContent = "●";
    }


    if (state === "STARTING") {

        connectorBadge.classList.add("starting");

        connectorStatusCard.classList.add("starting");

        connectorStatus.textContent = "STARTING";

        connectorTitle.textContent = "Starting";

        connectorDescription.textContent =
            "The main connector is starting...";

        connectorSymbol.textContent = "◌";
    }
}


document
    .getElementById("connectorOn")
    .addEventListener("click", () => {

        setConnectorState("STARTING");

        setTimeout(() => {
            setConnectorState("ONLINE");
        }, 1500);

    });


document
    .getElementById("connectorOff")
    .addEventListener("click", () => {

        setConnectorState("OFFLINE");

    });


document
    .getElementById("connectorRestart")
    .addEventListener("click", () => {

        setConnectorState("STARTING");

        setTimeout(() => {
            setConnectorState("ONLINE");
        }, 1800);

    });


/* =====================================================
   DROPDOWN
===================================================== */

const dropdown =
    document.getElementById("dropdown");

const dropdownButton =
    document.getElementById("dropdownButton");

const dropdownMenu =
    document.getElementById("dropdownMenu");

const dropdownText =
    document.getElementById("dropdownText");


/* Open / close */

dropdownButton.addEventListener("click", (event) => {

    event.stopPropagation();

    dropdown.classList.toggle("open");

});


/* Prevent menu clicks from bubbling */

dropdownMenu.addEventListener("click", (event) => {

    event.stopPropagation();

});


/* Close when clicking outside */

document.addEventListener("click", () => {

    dropdown.classList.remove("open");

});


/* =====================================================
   SERVER STATES
===================================================== */

const serverStates = {

    PVP: "OFFLINE",

    SMP: "OFFLINE",

    SKYWARS: "OFFLINE",

    MINIGAME: "OFFLINE",

    ETC: "OFFLINE",

    "PILLARS OF FORTUNE": "OFFLINE"

};


let selectedServer = null;


/* =====================================================
   SELECTED SERVER ELEMENTS
===================================================== */

const selectedServerCard =
    document.getElementById(
        "selectedServerCard"
    );

const selectedServerName =
    document.getElementById(
        "selectedServerName"
    );

const serverBadge =
    document.getElementById(
        "serverBadge"
    );

const serverStatus =
    document.getElementById(
        "serverStatus"
    );

const serverStatusCard =
    document.getElementById(
        "serverStatusCard"
    );

const serverSymbol =
    document.getElementById(
        "serverSymbol"
    );

const serverTitle =
    document.getElementById(
        "serverTitle"
    );

const serverDescription =
    document.getElementById(
        "serverDescription"
    );


/* =====================================================
   UPDATE SERVER DISPLAY
===================================================== */

function setServerState(server, state) {

    selectedServerName.textContent =
        server;

    serverBadge.classList.remove(
        "online",
        "offline",
        "starting"
    );

    serverStatusCard.classList.remove(
        "online",
        "offline",
        "starting",
        "state-change"
    );

    void serverStatusCard.offsetWidth;

    serverStatusCard.classList.add(
        "state-change"
    );


    if (state === "ONLINE") {

        serverBadge.classList.add("online");

        serverStatusCard.classList.add("online");

        serverStatus.textContent = "ONLINE";

        serverTitle.textContent = "Online";

        serverDescription.textContent =
            "This server is currently running.";

        serverSymbol.textContent = "●";
    }


    if (state === "OFFLINE") {

        serverBadge.classList.add("offline");

        serverStatusCard.classList.add("offline");

        serverStatus.textContent = "OFFLINE";

        serverTitle.textContent = "Offline";

        serverDescription.textContent =
            "This server is currently stopped.";

        serverSymbol.textContent = "●";
    }


    if (state === "STARTING") {

        serverBadge.classList.add("starting");

        serverStatusCard.classList.add("starting");

        serverStatus.textContent = "STARTING";

        serverTitle.textContent = "Starting";

        serverDescription.textContent =
            "This server is starting...";

        serverSymbol.textContent = "◌";
    }
}


/* =====================================================
   SERVER SELECTION
===================================================== */

document
    .querySelectorAll(".server-option")
    .forEach(option => {

        option.addEventListener("click", () => {

            selectedServer =
                option.dataset.server;


            dropdownText.textContent =
                selectedServer;


            selectedServerCard.classList.remove(
                "hidden"
            );

            selectedServerCard.classList.remove(
                "selected-server-show"
            );

            void selectedServerCard.offsetWidth;

            selectedServerCard.classList.add(
                "selected-server-show"
            );


            setServerState(
                selectedServer,
                serverStates[selectedServer]
            );


            dropdown.classList.remove("open");

        });

    });


/* =====================================================
   SERVER ON
===================================================== */

document
    .getElementById("serverOn")
    .addEventListener("click", () => {

        if (!selectedServer) {
            return;
        }

        serverStates[selectedServer] =
            "STARTING";

        setServerState(
            selectedServer,
            "STARTING"
        );


        setTimeout(() => {

            serverStates[selectedServer] =
                "ONLINE";

            setServerState(
                selectedServer,
                "ONLINE"
            );

        }, 1600);

    });


/* =====================================================
   SERVER OFF
===================================================== */

document
    .getElementById("serverOff")
    .addEventListener("click", () => {

        if (!selectedServer) {
            return;
        }

        serverStates[selectedServer] =
            "OFFLINE";

        setServerState(
            selectedServer,
            "OFFLINE"
        );

    });


/* =====================================================
   SERVER RESTART
===================================================== */

document
    .getElementById("serverRestart")
    .addEventListener("click", () => {

        if (!selectedServer) {
            return;
        }

        serverStates[selectedServer] =
            "STARTING";

        setServerState(
            selectedServer,
            "STARTING"
        );


        setTimeout(() => {

            serverStates[selectedServer] =
                "ONLINE";

            setServerState(
                selectedServer,
                "ONLINE"
            );

        }, 1800);

    });


/* =====================================================
   INITIAL CONNECTOR STATE
===================================================== */

setConnectorState("OFFLINE");