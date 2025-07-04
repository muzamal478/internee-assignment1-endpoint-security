# Assignment 1: Endpoint Security & Monitoring

## Overview
This repository implements an endpoint security and monitoring system for Internee.pk using Wazuh Cloud, Sysmon logs, and MalwareBazaar threat intelligence. It includes a Python script for log analysis, a dashboard for visualization, and automated alerts.

## File Structure
- `main.py`: Analyzes Sysmon logs and fetches MalwareBazaar data.
- `wazuh_config.json`: Wazuh Cloud configuration.
- `sysmon_sample.log`: Sample Sysmon logs for testing.
- `dashboard/`: Contains HTML, CSS, and JavaScript for the monitoring dashboard.
- `docs/`: Setup guide and monitoring report.

## Setup Instructions
1. Clone this repository.
2. Sign up for Wazuh Cloud and configure agents.
3. Run `main.py` on Replit (https://replit.com/) to analyze logs.
4. Deploy the `dashboard/` folder to Netlify for visualization.

## Live Deployment
[https://endpoint-security-dashboard.netlify.app/]

## LinkedIn Post
[https://shorturl.at/3yJc4]