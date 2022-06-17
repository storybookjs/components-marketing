# Storybook Marketing Component Library

<img src="src/design-system.png" width="100%" />

[![NPM](https://img.shields.io/npm/v/@storybook/design-system.svg)](https://www.npmjs.com/package/@storybook/design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Used by

- [Storybook homepage](https://storybook.js.org/)
- [LearnStorybook.com](https://www.learnstorybook.com/)
- [Storybook Blog](https://storybook.js.org/blog/)
- [Component Encyclopedia](https://storybook.js.org/showcase/)

Note: these components are not used in Storybook's UI.

## Tech stack

Building components

- 📚 [Storybook](https://storybook.js.org) for UI component development and [auto-generated docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
- 👩‍🎤 [Storybook theming |](https://emotion.sh/) for component-scoped styling
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI

Maintaining the system

- 📦 [NPM](https://www.npmjs.com/) for [packaging and distribution](https://blog.hichroma.com/how-packaging-makes-it-dead-simple-to-share-ui-components-29912593539d)
- ✅ [Chromatic](https://www.chromatic.com/) to prevent UI bugs in components (by Storybook maintainers)
- 🚥 [CircleCI](https://circleci.com/) Continuous integration

## Install

```bash
npm install --save @storybook/marketing-components
```

## Development Scripts

#### `yarn release`

> Bump the version

> Push a release to GitHub and npm

> Push a changelog to GitHub

_Notes:_

- Requires authentication with [`npm adduser`](https://docs.npmjs.com/cli/adduser.html)
- [`auto`](https://github.com/intuit/auto) is used to generate a changelog and push it to GitHub. In order for this to work correctly, **environment variables called `GH_TOKEN` and `NPM_TOKEN` are needed** that reference a [GitHub personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) and a [NPM "Publish" token](https://docs.npmjs.com/creating-and-viewing-access-tokens) with the appropriate permissions to update the repo.

## License

MIT © [storybookjs](https://github.com/storybookjs)
