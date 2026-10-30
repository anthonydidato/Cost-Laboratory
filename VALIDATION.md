# Validation record

## Automated checks

All 10 Node test groups pass. Independent cases cover single and multiple products, positive/zero/negative contribution, zero volume, period conversions, percentage and transaction fees, shared allocation, startup separation, depreciation, stress calculations, malformed imports, current-review gating, justification/acknowledgment requirements, and genuine DOCX/JSON output from one snapshot. Production build succeeds.

## Actual browser checks

Completed in isolated `?test=1` mode, not the user's decision storage:

- Cost slider increment, exact amount editing, enable/disable, custom expense creation and deletion, fixed-to-variable classification and frequency change, description and assumption editing.
- Product creation/removal, monthly subscription price/quantity/additional cost, calculated annual unit amounts, price persistence across reload.
- Lean/Typical scenario switching, custom scenario save, displayed scenario results.
- Evaluation, written QA justification, warning acknowledgment, synthetic confirmation, DOCX and JSON button downloads.
- Price revision marks evaluation outdated and disables confirmation and final downloads.
- Working-configuration export and paste-JSON import restores $3,500 and clears evaluation/confirmation. The browser's native file-picker automation was interrupted; the same import validation path was tested using the paste fallback.
- Downloaded browser DOCX is a valid OOXML ZIP and contains all 10 report sections, the same decision ID, justification, classification and financial results as the downloaded JSON. QA exports are marked as tests and remain outside published assets.

Further final visual and deployment checks are recorded below.
