.PHONY: build deploy

build-project:


api-dev:
	npm run api:dev

ui-dev:
	npm run ui:dev

mongo-migrate:
	npm run migrate:mongo

start-mongo-on-docker:
	docker-compose -f ./deployments/docker-compose/docker-compose.yml up -d mongo

start-ui-on-docker:
	docker-compose -f ./deployments/docker-compose/docker-compose.yml up -d --build ui

start-api-on-docker:
	docker-compose -f ./deployments/docker-compose/docker-compose.yml up -d --build api

unit-test:
	npm run test:unit