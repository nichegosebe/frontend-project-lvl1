install:
	npm install

brain-games:
	node ./bin/brain-games

publish:
	npm publish --dry-run
	
make lint: 
	npx ./node_modules/.bin/eslint ./bin/brain-games.js
