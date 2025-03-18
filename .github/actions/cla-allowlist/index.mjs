import * as fs from 'fs/promises';
import * as path from 'path';
import * as actionsCore from '@actions/core';

try {
    // Warning: `import.meta.dirname` requires Node.js 20+
    const allowListFilePath = path.resolve(import.meta.dirname, 'allowlist.txt');
    const allowListFileContents = await fs.readFile(allowListFilePath, 'utf8');
    const allowList = allowListFileContents
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join(',');
    actionsCore.setOutput('allowlist', allowList);
} catch (error) {
    actionsCore.setFailed(error.message);
}
