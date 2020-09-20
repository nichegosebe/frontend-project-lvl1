install:
	npm install

brain-games:
	node ./bin/brain-games.js

publish:
	npm publish --dry-run
	
lint: 
	./node_modules/eslint/bin/eslint.js ./bin/brain-games.js
	./node_modules/eslint/bin/eslint.js ./bin/brain-even.js
	./node_modules/eslint/bin/eslint.js ./src/cli.js
	./node_modules/eslint/bin/eslint.js ./src/brain-even-logic.js