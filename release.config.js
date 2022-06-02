export const branches = [
  'main',
  {
    name: 'beta',
    prerelease: true
  }
];
export const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  [
    '@semantic-release/changelog',
    {
      changelogFile: 'CHANGELOG.md'
    }
  ],
  '@semantic-release/npm',
  '@semantic-release/github',
];