import * as fs from 'fs/promises';
import * as actionsCore from '@actions/core';

try {
    const allowListFileContents = await fs.readFile('allowlist.txt', 'utf8');
    const allowList = allowListFileContents
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join(',');
    actionsCore.setOutput('allow', allowList);
} catch (error) {
    actionsCore.setFailed(error.message);
}
