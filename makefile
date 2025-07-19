.PHONY: help

help: ## show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## watch
	NODE_ENV=development node build.js --watch

build: ## build
	NODE_ENV=production node build.js

serve: ## serve
	cd public && python3 -m http.server 3000

clean: ## clean
	rm -f public/dist/*.*
