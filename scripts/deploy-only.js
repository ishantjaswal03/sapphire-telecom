const ghpages = require('gh-pages');

console.log('Pushing to gh-pages...');
ghpages.publish('out', {
    dotfiles: true,
    message: 'Deploy: Manual publish of existing build'
}, (err) => {
    if (err) {
        console.error('Deployment Failed:', err);
        process.exit(1);
    } else {
        console.log('Deployment Complete!');
    }
});
