import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';

const MESSAGES_PATTERN = 'src/translations/lib/i18n/messages/**/*.json';
const LANG_DIR = 'src/translations/lib/i18n/lang/';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin.
const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      collection[id] = defaultMessage;
    });
    return collection;
  }, {});
mkdirpSync(LANG_DIR);
fs.writeFileSync(
  `${LANG_DIR}en.json`,
  JSON.stringify(defaultMessages, null, 2),
);
