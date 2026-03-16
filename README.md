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

Claude Code stores credentials in `~/.claude/.credentials.json`. This tool copies that file into named profiles under `~/.claude/profiles/` and swaps them back when you switch.

- Credentials are stored with `600` permissions (owner-only read/write)
- Unsaved credentials are automatically backed up before switching
- Account email and subscription info are displayed when available

## Requirements

- `bash`, `jq`, `md5sum` (standard on Linux/macOS)

## License

MIT
