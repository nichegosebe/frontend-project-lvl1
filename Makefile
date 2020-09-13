install:
	npm install

brain-games:
	node ./bin/brain-games

publish:
	npm publish --dry-run
	
lint: 
	./node_modules/eslint/bin/eslint.js ./src/cli.js
	./node_modules/eslint/bin/eslint.js ./bin/brain-games.js