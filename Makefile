install:
	npm install

brain-games:
	node bin/brain-games

publish:
	npm publish --dry-run
	
make lint: 
	npx eslint bin/brain-games
	npx eslint src/cli.js