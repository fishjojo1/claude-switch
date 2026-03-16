# claude-switch

Switch between Claude Code accounts. Save, restore, and manage multiple credential profiles.

## Install

```bash
npm install -g claude-code-switch
```

## Usage

```bash
# Save your current logged-in account as a profile
claude-switch save work

# Log in to another account in Claude Code, then save it too
claude-switch save personal

# Switch between them
claude-switch use work
claude-switch use personal

# See all profiles
claude-switch list

# Show which profile is active
claude-switch show

# Rename or delete profiles
claude-switch rename work work-main
claude-switch delete old-profile
```

## How it works

Claude Code stores credentials in `~/.claude/.credentials.json`, but it also caches account state (email, subscription status) in `~/.claude.json`. Simply swapping the credentials file isn't enough — if `~/.claude.json` still references the old account, Claude Code will behave as if you never switched.

`claude-switch` handles both files. When you save a profile, it captures the relevant account state alongside the credentials. When you switch, it restores both, so Claude Code picks up the correct account immediately.

- Credentials are stored with `600` permissions (owner-only read/write)
- Unsaved credentials are automatically backed up before switching
- Account email and subscription info are displayed when available

## Requirements

- `bash`, `jq`, `md5sum` (standard on Linux/macOS)

## License

Written by claude code, 0 work on my end. Do whatever you want with it.
