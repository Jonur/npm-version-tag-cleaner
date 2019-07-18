This script helps clean tags from published versions on NPM.

## Instructions

1. Clone this repository

```
git clone https://github.com/Jonur/npm-version-tag-cleaner.git
```

2. Navigate into the project's directory and edit the file `removeTags.js`, as follows:

    a. `npmPackage`: the desired released NPM package name

    b. `featureBranchIdentifier`: the key word to target the tags

    c. `testScriptOutput`: set this to `false`, when you're about to really do it

3. Run `node removeTags.js`