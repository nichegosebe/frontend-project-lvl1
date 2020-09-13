install:
	npm install

brain-games:
	node ./bin/brain-games

publish:
	npm publish --dry-run
	
make lint: 
	eslint ./bin/brain-games.js
