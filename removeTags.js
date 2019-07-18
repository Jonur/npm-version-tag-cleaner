const { execSync } = require('child_process');

const npmPackage = 'package-name';
const featureBranchIdentifier = 'branch';
const testScriptOutput = true;

const getFeatureTags = () => {
  const npmOutput = execSync(`npm dist-tag ls ${npmPackage}`);

  return npmOutput
    .toString()
    .replace(/:.*\n/g, '\n')
    .split('\n')
    .filter(tag => tag.includes(featureBranchIdentifier));
};

const featureTags = getFeatureTags();
let index = 0;

console.log(`Preparing to remove ${featureTags.length} feature version tags. This will take a while.\n`);

featureTags
  .forEach(tag => {
    const removeTagCommand = `npm dist-tag rm ${npmPackage} ${tag}`;

    console.log(`\n[${++index}/${featureTags.length}] Removing the tag \x1b[33m${tag}\x1b[0m...`);
    if (testScriptOutput) {
      console.log(removeTagCommand);
    } else {
      execSync(removeTagCommand);
    }
    console.log(`The tag was \x1b[32mremoved\x1b[0m.`);
  });

if (index === featureTags.length) {
  console.log(`\nAll ${featureTags.length} feature tags have been removed!\n`);
}
