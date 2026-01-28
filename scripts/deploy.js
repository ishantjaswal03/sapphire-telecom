const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

console.log('Starting deployment...');

try {
    // 1. Build
    console.log('Running next build...');
    execSync('next build', { stdio: 'inherit' });

    // 2. Create .nojekyll
    console.log('Creating .nojekyll...');
    fs.writeFileSync(path.join('out', '.nojekyll'), '');

    // 3. Deploy
    console.log('Pushing to gh-pages...');
    ghpages.publish('out', {
        dotfiles: true, // Explicitly include dotfiles
        message: 'Deploy: Auto-generated commit'
    }, (err) => {
        if (err) {
            console.error('Deployment Failed:', err);
            process.exit(1);
        } else {
            console.log('Deployment Complete!');
        }
    });

} catch (error) {
    console.error('Build Failed:', error);
    process.exit(1);
}
