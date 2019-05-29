#!/usr/bin/bash
docker run -i -t --name store \
	-w /app \
	-p 4200:4200 \
	-v $(pwd):/app \
	-d node:10.15.3-stretch
	
