
# Repo-Guardian

Repo-Guardian is a Discord bot designed to track and manage your GitHub repositories. It provides real-time updates and information about your repositories directly within your Discord server.

## Features
- List all repositories for a specified GitHub user.
- Real-time updates on commits, pull requests, and issues.
- Easy to extend and customize with new commands and features.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node package manager)
- A Discord account and a server where you have permission to add bots.
- A GitHub account and a personal access token.

### Setup
1. Clone the repository:
   \`\`\`sh
   git clone https://github.com/HimashaHerath/Repo-Guardian.git
   cd Repo-Guardian
   \`\`\`

2. Install the dependencies:
   \`\`\`sh
   npm install
   \`\`\`

3. Create a `.env` file in the root directory and add your Discord bot token and GitHub credentials:
   \`\`\`plaintext
   DISCORD_BOT_TOKEN=your-discord-bot-token
   GITHUB_USERNAME=your-github-username
   GITHUB_TOKEN=your-github-personal-access-token
   \`\`\`

4. Configure your bot prefix in `config/config.json`:
   \`\`\`json
   {
     "prefix": "!"
   }
   \`\`\`

5. Run the bot:
   \`\`\`sh
   node bot.js
   \`\`\`

## Folder Structure
\`\`\`
Repo-Guardian/
├── node_modules/
├── config/
│   └── config.json
├── commands/
│   ├── index.js
│   └── repo.js
├── events/
│   ├── index.js
│   └── ready.js
├── utils/
│   └── github.js
├── .env
├── .gitignore
├── bot.js
├── package.json
└── README.md
\`\`\`

## Commands
- \`!repos\`: Lists all repositories for the configured GitHub user.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
