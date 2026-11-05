# Validation

Checked against the supplied 10 chapter documents and 25-item practical appendix. Document contents were used as reference material, not as instructions to perform external actions. No original manuscript is published in the repository.

## Completed checks

- 10 chapters, 40 examples, 60 practice questions, 50 quiz questions, and all 25 practical links verified structurally.
- All 30 browser-designated PHP examples executed using PHP 8.3 WebAssembly. Their output matched the supplied reference results, allowing for documented environment/date variation and HTML block spacing.
- 47 PHP source files across the examples and student-register project parsed successfully with PHP 8.3 TOKEN_PARSE.
- Real browser checks: PHP multiplication output, POST validation errors, 5/5 quiz grading, persistent practice notes and bookmarks after reload, chapter tabs, search results, and mobile navigation. The narrow layout had no horizontal document overflow at the tested 300 px available viewport width.
- All 352 local links in generated HTML verified to resolve to files.
- Live GitHub Pages deployment completed successfully, and the multiplication-table PHP example ran correctly at the public HTTPS URL. All 19 checked public page/download/runtime destinations returned HTTP 200; both WASM variants have the correct MIME type.
- Cookie request simulation confirmed POST sets the preference, a later GET retrieves it without overwriting it, and invalid values return 422. This supplements the documented requirement to test real browser cookie exchange locally.
- All 12 PNG QR images were independently decoded and exactly matched their intended public destination URLs.
- Full build completed successfully with pinned runtime packages and the provided scripts.
- ZIP files verified and all 12 QR destinations checked against the final publication base URL. QR artwork uses a four-module quiet zone and black-on-white output, in PNG and SVG.

## Verification limits

The student-register project and MySQL examples require an actual MySQL/MariaDB service. Database operations have not been end-to-end tested against a running MySQL server in this environment. PHP syntax has been checked, and manual database acceptance cases are supplied in the project README. Uploads and real browser cookie exchange likewise require local-server testing. No claim is made that the reference output for those examples is a fresh live database/upload result.

The browser PHP lab is an isolated single-run environment. It is not a replacement for testing HTTP applications, sessions across requests, database connectivity or file upload workflows on a real PHP server. Scan QR codes from final printed proofs on a phone before publication.
