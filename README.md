# Kitano

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Weak Git Workflow

+ Make changes to the code
+ Commit (give compliant names, such as feat: fix: docs: chore:)
+ Touch base in group chat what are current package version on other working branches
+ Run *npm run release:develop* to push your changes with updated version
+ Go to github , create pull request to develop branch
+ Assign reviewers
+ Squash and merge after code review approved

## Proper Git Workflow

+ Make changes to the code
+ Commit (give compliant names, such as feat: fix: docs: chore:)
+ Run version bump on github

## Additional cases
+ in case code review changes - commits has to be tagged with proper version v.0.0.0 - and pushed normally , not through npm run release:develop


## Changelog
[Conventional Commits Specs](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification)

+ **fix**: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).

+ **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).

+ **BREAKING CHANGE**: a commit that has the text BREAKING CHANGE: at the beginning of its optional body or footer section introduces a breaking API change (correlating with MAJOR in semantic versioning). A breaking change can be part of commits of any type. e.g., a fix:, feat: & chore: types would all be valid, in addition to any other type.

+ **chore:, docs:, style:, refactor:, perf:, test:, improvement:**

> + feat(parser): add ability to parse arrays
> + docs: correct spelling of CHANGELOG
> + feat(lang): added polish language
> + fixes issue #1

### Why Use Conventional Commits

+ Automatically generating CHANGELOGs.
+ Automatically determining a semantic version bump (based on the types of commits landed).
+ Communicating the nature of changes to teammates, the public, and other stakeholders.
+ Triggering build and publish processes.
+ Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

## Additional information
[The Complete Guide to Versioning Angular Apps](https://christianlydemann.com/versioning-your-angular-app-automatically-with-standard-version/)
+ [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
+ [standard-version](https://github.com/conventional-changelog/standard-version)  automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
