const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Replace .projects
css = css.replace(
/\.projects \{[\s\S]*?padding: 100px 2\.1% 120px;\n\}/m,
`.projects {
    position: relative;
    background-color: var(--bg-white);
    color: var(--text-dark);
    border-radius: 24px;
    padding: 100px 2.1% 120px;
    margin: 0 auto;
    width: calc(100% - 40px);
    max-width: 1160px;
    border: 1px solid var(--border-color);
}`
);

// Replace .thumbnails-row
css = css.replace(
/\.thumbnails-row \{[\s\S]*?margin-left: calc\(-50vw \+ 50%\);\n\}/m,
`.thumbnails-row {
    position: relative;
    overflow: hidden;
    padding-bottom: 20px;
    margin-bottom: 120px;
    width: 100%;
    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}`
);

fs.writeFileSync('style.css', css);
