# github-api-test
This is a test to fetch data from the github API.
It looks for the username in the search input and lists all the repositories from the selected user.
It uses webpack for dependency management, karma and jasmine for testing.

## Structure
I created two modules, one for the app itself and one for the main view.
Of course, this would not be necessary in a project this small with only one view. But I like to use a component approach, so that each part of the app is it's own module and lives inside a folder with all its dependencies.

### Start project
```bash
npm install
npm start
```

### Build project to dist folder
```bash
npm run build
```
### Start tests
```bash
npm run test
```
