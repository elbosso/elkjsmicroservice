# elkjsmicroservice

<!---
[![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)
--->
[![GitHub release](https://img.shields.io/github/release/elbosso/elkjsmicroservice/all.svg?maxAge=1)](https://GitHub.com/elbosso/elkjsmicroservice/releases/)
[![GitHub tag](https://img.shields.io/github/tag/elbosso/elkjsmicroservice.svg)](https://GitHub.com/elbosso/elkjsmicroservice/tags/)
[![GitHub license](https://img.shields.io/github/license/elbosso/elkjsmicroservice.svg)](https://github.com/elbosso/elkjsmicroservice/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/elbosso/elkjsmicroservice.svg)](https://GitHub.com/elbosso/elkjsmicroservice/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/elbosso/elkjsmicroservice.svg)](https://GitHub.com/elbosso/elkjsmicroservice/issues?q=is%3Aissue+is%3Aclosed)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/elbosso/elkjsmicroservice/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/elbosso/elkjsmicroservice.svg)](https://GitHub.com/elbosso/elkjsmicroservice/graphs/contributors/)
[![Github All Releases](https://img.shields.io/github/downloads/elbosso/elkjsmicroservice/total.svg)](https://github.com/elbosso/elkjsmicroservice)
[![Website elbosso.github.io](https://img.shields.io/website-up-down-green-red/https/elbosso.github.io.svg)](https://elbosso.github.io/)

## Overview

This project is aimed at providing a microservice for laying out arbitrarily complex graphs. It builds on the project
[elk.js](https://github.com/OpenKieler/elkjs) for the actual layout algorithms implementation. 

This project adds the plumbing for turning it into a service - actually it turns it into a docker container deployable
anywhere docker containers are welcome.

The provided `Dockerfile` builds an image for the service. If your fancy takes you to using it with docker-compose - 
there is already a ready made example `docker-compose.yml` here that has some commented lines prepared for
integrating eith any [traefik-instance](https://containo.us/traefik/) you might already have set up.

After starting the container and provided you know *hostname* and *port* of said container, one can check out the functionality
of it by sending the provided `example.json` - for example using _curl_ by issuing the following command:

```shell
curl -H "Content-Type: application/json" --data-binary '@example.json' http://<hostname>:<port>
```

Many thanks also go out to 
[nodejs](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)
and
[expressjs](http://expressjs.com/).
