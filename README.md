# PHP Companion

[Open the live companion](https://aayush3344beaiml26-sys.github.io/php-bca6-companion/) · [GitHub repository](https://github.com/aayush3344beaiml26-sys/php-bca6-companion)

A chapter-wise learning website for the supplied **Website Development Using PHP**, BCA Semester VI, Panjab University edition.

## What is included

- All 10 chapters in the same order as the book.
- 40 worked examples with source code, explanations, reference results and suggested experiments.
- Real browser-based PHP 8.3 execution for 30 PHP examples; 2 additional HTML examples have isolated previews. The remaining 8 examples require a local PHP server, MySQL or real cookie/upload exchange and are labelled accordingly.
- 60 extra practice questions with hints and suggested answers.
- 50 automatically graded quiz questions with explanations and best-score tracking.
- All 25 book practicals mapped to material or the included student-register project.
- Local answer drafts, editable code, bookmarks, a practical checklist, and study-record export/import.
- Downloadable source files, chapter archives, a printable question bank, and a MySQLi student register.
- 12 QR destinations: the home page, ten chapters and the practical checklist. Each has 1200 × 1200 PNG and scalable SVG artwork.
- Responsive layouts, keyboard-accessible chapter tabs, labelled controls, reduced-motion support and print styles.

The full book is not included. This is newly written companion practice material aligned to its chapter headings and appendix.

## Open the prepared website

The complete deployable website is in `site/`. No Node installation or build is needed to publish it. For a local preview, serve that folder over HTTP:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory site
```

Open http://localhost:8765/ . Do not double-click index.html: browser workers need an HTTP(S) origin. A static preview server displays the companion; it does not execute the downloaded local-server PHP projects.

## Publish on GitHub Pages

This project uses a `gh-pages` branch containing only the contents of `site/`. The full editable source remains on `main`. In the repository's Settings → Pages, select Deploy from a branch → gh-pages → / (root).

After a source update:

```sh
git add .
git commit -m "Update companion material"
git push origin main
git subtree push --prefix site origin gh-pages
```

GitHub may need a short time to rebuild the Pages deployment. Do not remove the `.nojekyll` file. All navigation and runtime paths are relative, so a project URL such as `/php-bca6-companion/` works correctly.

An optional GitHub Actions deployment template is in `publishing/github-actions.yml`. To use it instead of branch publishing, copy it to `.github/workflows/pages.yml`, select GitHub Actions in Pages settings, and ensure your GitHub credentials allow workflow-file updates. The template publishes the already built `site/` directory.

The intended repository and public address are recorded in `publication.json`. Change those values when moving the website to another account or repository, then regenerate the QR files.

## Change the material

- `source/content.json`: chapter text, examples, practice answers, quizzes and practical mapping.
- `site/assets/app.js`: study interactions, code editor and lab controls.
- `site/assets/style.css`: layout and visual styling.
- `scripts/build-pages.mjs`: page shell and navigation generation.
- `source/student-register/`: complete local PHP/MySQL application.
- `source/php-worker.mjs`: isolated browser execution of PHP.
- `source/runtime-loader.mjs`: PHP 8.3 runtime selection, with JSPI and Asyncify support.

Rebuild with Node 24.18+ and Python 3:

```sh
npm ci
npm run build
```

The PHP dependencies are pinned at 3.1.62. The runtime builder preserves their version-specific asset paths. Revisit the builder's copied asset directory if you upgrade those dependencies. Production has no CDN dependency or package installation step.

To regenerate the QR pack for a different live URL:

```sh
npm run qr -- https://USERNAME.github.io/REPOSITORY/
```

Use the final published URL. Verify scanning on a phone and inspect the target before printing. The site also has a QR generator under Downloads & QR codes.

## PHP execution limits

GitHub Pages serves static files; it does not provide a PHP server or MySQL database. The lab executes actual PHP 8.3 inside a browser worker, using WordPress Playground PHP.wasm. It loads the bundled runtime only when requested, starts fresh for each run, and stops a program after ten seconds of execution. Displayed output is capped at 200,000 characters. Request JSON populates GET and POST test values; it is an explicit test fixture rather than a full HTTP application server. HTML output is sandboxed with scripts, remote assets and form submission disabled.

MySQL, real image upload processing and browser cookie exchange run locally. Those examples include source, a reference result and setup instructions. A reference result is labelled as such; it is not claimed to be a fresh server execution.

The student-register download supports add/list/search/edit with validation, HTML escaping, prepared statements and CSRF tokens. It is a local teaching project without login or per-user permissions. Its README explains setup and manual checks.

## Privacy and backups

Study data stays in localStorage on the current origin and browser profile. There are no accounts, analytics or cloud backups. Users can export/import a JSON record. Moving the site to a different origin changes the storage location; export first. Clearing browser data removes the record. Others using the same profile can read it.

## Attribution and third-party software

The title and chapter alignment identify the supplied textbook; this companion does not imply university or publisher endorsement. Examples and question content are newly authored for this project. Third-party runtime and QR libraries retain their licences. See `site/THIRD_PARTY_NOTICES.txt` and `site/licenses/`. The pinned WordPress Playground commit and corresponding source links are included there.

See `VALIDATION.md` for checks performed and the limits of verification.
