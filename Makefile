install:
	npm install

brain-games:
	node ./bin/brain-games

publish:
	npm publish --dry-run
	
lint: 
	eslint ./bin/brain-games.js
