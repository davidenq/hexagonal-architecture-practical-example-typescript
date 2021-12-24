.PHONY: build deploy

dev:
	npm run dev

mongo-migrate:
	npm run migrate:mongo

start-mongo-on-docker:
	docker-compose -f ./deployments/docker-compose/docker-compose.yml up -d mongo

unit-test:
	npm run test:unit