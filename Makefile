SHELL := /bin/bash

.PHONY: install dev build start lint help

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

start: build
	npm run start

lint:
	npm run lint

help:
	@echo "Available targets:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build production bundle"
	@echo "  make start    - Start production server"
	@echo "  make lint     - Run linter"
