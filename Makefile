all:	help

help:
	@echo "Makefile for microTags.js"
	@echo "~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo ""
	@echo "Available commands:"
	@echo "    make help                    Show this help"
	@echo "    make min                     Minify the code"
	@echo "    make ghp                     Update the GitHub page"
	@echo "    make test                    Open the test page in you Web browser"
	@echo ""

min:	microTags.js
	jsmin microTags.js > microTags.min.js

doc:	microTags.js
	yuidoc -Cc yuidoc-config.json -o doc -T simple .

ghp:	index.html
	mkdir -p www
	cp index.html www/
	ghp-import -m 'Test page update' www

test:	index.html
	x-www-browser index.html\
		|| sensible-browser index.html\
		|| xdg-open index.html\
		|| open index.html\
		|| firefox index.html\
		|| opera index.html\
		|| echo -e "\nKERNEL PANIC"

.PHONY:	all help min ghp test
