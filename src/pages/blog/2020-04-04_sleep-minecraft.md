---
templateKey: blog-post
title: Sleep for Docker Minecraft
date: 2020-04-01T15:32:17-0500
featuredpost: false
featuredimage: /static/img/blog/featured/minecraft.png
description: My experience trying to run Virtual Machines in an Ubuntu 18.04 host with Docker.
tags:
  - minecraft
  - docker
  - kvm
  - ubuntu 18.04
---
Using [docker-minecraft-server](https://github.com/itzg/docker-minecraft-server)

I realized I could leverage docker's `docker pause CONTAINER`

Based on the guide by [Michiel Bruijn on Mojang bug reports](https://bugs.mojang.com/browse/MC-149018?focusedCommentId=593606&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-593606) If you aren't running a docker minecraft server then their guide will fit you.

make a shell script with the following (remember to modify CONTAINER):

```sh
#!/bin/sh
# Check if there are still connections made to minecraft server, otherwise PAUSE the process so that it won't take any CPU anymore.
# Also check /lib/systemd/system/knockd.service
CONTAINER = <docker container name or id>
if ! netstat -tn | grep 25565 | grep ESTABLISHED ; then /usr/bin/docker pause $CONTAINER ; fi
```

and name it `minecraft-sleep.sh`. This script checks for established connections, if it doesn't find any, it calls docker and pauses the minecraft container

change its permissions

```sh
$ sudo chmod ugo+x minecraft_sleep.sh
```

then add it to crontabs

```sh
$ sudo crontab -e
```

Put this in the cronjob:

```
*/10 * * * * /home/user/minecraft-sleep.sh
```

The path will be where you placed and named the previous script. This cronjob will run the script every 10 minutes.

Then use `Knock` to trigger when a connection is started.

```sh
$ sudo apt-get install knockd
```

edit `/etc/knockd.conf` and replace with:

```
[options]
# UseSyslog
 interface = ens2
 logfile = /var/log/knockd.log
[openMineCraft]
 sequence = 25565
 seq_timeout = 1
 start_command = /usr/bin/docker unpause <CONTAINER>
 tcpflags = ack
```

Change interface to your interface (`$ ip addr`, and check what network interface is used to connect to the network)

Change `<CONTAINER>` to your minecraft container name/id.

Change sequence to the port you use for your minecraft. `25565` is the default minecraft port.

```
$ sudo systemctl daemon-reload
$ sudo systemctl restart knockd
```

I'm running papermc flavor, so I also changed the `timeout-time` in `spigot.yml` to `86400` which is 1 day in seconds. This means that minecraft won't consider the server to have crashed even when it's paused for a full day. You can change this as necessary. Keep in mind that if the server does crash, it may take this long for it to realize it crashed and try to stop and restart the server.

With the `timeout-time` on default `60` seconds, generally it will consider the server to have crashed on resume and stop the server, then restart it. The issue with this for me is that the server restart takes what seems to be 2 to 3 minutes. Thus, if someone tries to connect, they'll time out before the server is ready.

