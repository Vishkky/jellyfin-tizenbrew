// Runs inside the Jellyfin web client loaded from the server.
(function () {
    // Use the TV layout (focus-based navigation for the remote) unless the user picked something else.
    try {
        if (!localStorage.getItem('layout')) {
            localStorage.setItem('layout', 'tv');
        }
    } catch (e) { /* storage unavailable: jellyfin-web falls back to its own detection */ }
})();
