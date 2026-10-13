# Jellyfin (Server) for TizenBrew

A TizenBrew module that opens the Jellyfin web client **served by your own Jellyfin server** on a Samsung Tizen TV.

The packaged Jellyfin Tizen app bundles its own copy of jellyfin-web, so server-side web plugins
(Home Screen Sections, Media Bar, custom themes) don't show up in it. Loading the web client from the
server makes them work exactly as in a desktop browser.

## Install
In TizenBrew: **Module Manager → Add GitHub module** → `Vishkky/jellyfin-tizenbrew`

## Use a different server
Fork this repo, change `websiteURL` in `package.json` to `http://<your-server>:8096/web/`, and add your fork instead.

## Remote keys
The media keys and the four colour keys are registered for the page; jellyfin-web handles Back and the media keys itself.
