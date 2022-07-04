install:
npm ci

brain-games:
node bin/brain-games.js

publish:
npm publish --dry-run

lint:
	npx eslint .

fixLint:
	npx eslint --fix .

pret:
	npx prettier --write .