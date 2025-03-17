# allowlist reader

This is a quick little GitHub Action designed to read `allowlist.json` and report its contents as an action output.
The content in `allowlist.json` is expected to be arranged as an array of usernames. The output format is a
comma-separated string suitable for the [CLA Assistant
Lite](https://github.com/marketplace/actions/cla-assistant-lite) action.

We've had trouble sharing our `signature-assistant.yml` workflow across repositories, so it's copied to each
repository that needs it. That's not ideal, but wasn't _that_ bad when the settings were pretty basic and unlikely to
change over time. Recently, we encountered the need to add usernames to the allow-list, and now the duplication is a
real problem: the list is likely to diverge in various repositories, and inconsistency is... _not great_... when it
comes to legal records.

Enter this slightly-silly solution: this action just keeps track of the allow-list in a central location with the goal
that we can access this central location without any extra secrets or tokens or anything. That should let us use it
from a copy of the `signature-assistant.yml` workflow running in just about any repository. Fingers crossed.
