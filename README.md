# Enterprise AI Governance App for Splunk

The Enterprise AI Governance App for Splunk provides dashboards, alerts, and search macros for data collected by the [Enterprise AI Governance Add-on for Splunk](https://github.com/splunk-platform-apps/enterprise_ai_governance_add-on_for_splunk). Install and configure the add-on to ingest provider data before using the App to explore it.

## Features

**Five dashboards** provide views across supported AI platforms:

- **AI Governance Overview** (default view) — Review activity, adoption, and data availability across providers.
- **AI Security Audit** — Investigate sign-ins, administrative changes, API key events, and data movement.
- **AI Usage & Cost Monitoring** — Explore token usage, spend, and adoption where providers supply that data.
- **Self-Hosted & Open-Source Models** — Monitor server availability, model inventory, and runtime metrics.
- **AI Compliance & Directory** — Review user lifecycle, directory data, and compliance-relevant activity.

**Eight alerts** cover API key changes, admin or SSO configuration changes, data exports, new AI users, off-hours activity spikes, daily spend thresholds, new self-hosted models, and self-hosted servers going down.

**Eleven search macros** support the dashboards, alerts, and your own searches:

- **Index:** `aigov_index` — configure this macro to point to the index containing your AI governance data.
- **Categories:** `aigov_all`, `aigov_audit`, `aigov_directory`, `aigov_usage`, `aigov_cost`, and `aigov_selfhosted`.
- **Cross-provider actions:** `aigov_signin_actions`, `aigov_admin_actions`, `aigov_key_actions`, and `aigov_export_actions`.

## Getting Started

To install and run this app, download the latest compiled application directly from the releases page.

:package: [Download the latest release here](https://github.com/splunk-platform-apps/enterprise_ai_governance_app_for_splunk/releases)

Once downloaded, installation instructions can be found in the provided [documentation](https://splunk-platform-apps.github.io/enterprise_ai_governance_app_for_splunk/).

## Useful Links

:books: [Documentation](https://splunk-platform-apps.github.io/enterprise_ai_governance_app_for_splunk/)<br/>
:writing_hand: [Release Notes](./CHANGELOG.md)<br/>
:balance_scale: [License](./LICENSE)

:gear: [Development Guidelines](https://github.com/splunk-platform-apps/.github/blob/main/documentation/DEV_GUIDELINES.md#getting-started)<br/>
:heart_on_fire: [Contributing Guidelines](https://github.com/splunk-platform-apps/.github/blob/main/.github/CONTRIBUTING.md)
