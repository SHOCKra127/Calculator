install:
	npm ci
lint:
	npx eslint .
tests:
	npx jest
tests-coverage:
	npx jest --coverage
lint-fix:
	npx eslint . --fix