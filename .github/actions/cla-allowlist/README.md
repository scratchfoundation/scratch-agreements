# allowlist reader

This is a quick little GitHub Action designed to read `allowlist.txt` and report its contents as an action output. The
format of `allowlist.txt` is expected to be one username per line. The output format is a comma-separated string
suitable for the [CLA Assistant Lite](https://github.com/marketplace/actions/cla-assistant-lite) action.

We've had trouble sharing our `signature-assistant.yml` workflow across repositories, so it's copied to each
repository that needs it. That's not ideal, but wasn't _that_ bad when the settings were pretty basic and unlikely to
change over time. Recently, we encountered the need to add usernames to the allow-list, and now the duplication is a
real problem: the list is likely to diverge in various repositories, and inconsistency is... _not great_... when it
comes to legal scenarios.

Enter this slightly-silly solution: this action just keeps track of the allow-list in a central location with the goal
that we can access this central location without any extra secrets or tokens or anything. That should let us use it
from a copy of the `signature-assistant.yml` workflow running in just about any repository. Fingers crossed.

## Why a JavaScript action?

The signature assistant expects a comma-separated list stored in a single string. Spreading that across multiple lines
in YAML is a little awkward, especially when you allow for names that include an apostrophe. Funneling that through a
shell script, which is the other way I thought about doing this, seemed like it could be error-prone as well. Building
the action using JS and storing the usernames in a text file just seemed like the best compromise between reliable
string processing and ease of development.
