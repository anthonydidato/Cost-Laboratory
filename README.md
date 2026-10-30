# FreshKeep Pricing & Cost Laboratory

Mission 3: a browser-only pricing, operating-cost, and decision-report laboratory for the FreshKeep Smart Fridge concept. React, Vite, Recharts, Lucide, and browser-generated genuine DOCX. No server, account, database, paid API, or key is required.

## Run

Node 22+ and pnpm 10:

```
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build
```

Production base is `/Cost-Laboratory/`. GitHub Actions builds and deploys `dist`; repository Pages source is GitHub Actions. Navigation is state-based and refresh works at the repository root.

## Business and evidence

The Mission 1 JSON is preserved in `src/data/competitors.json`; its 3 direct competitors, 5 offers and 3 representative prices were cross-checked with the supplied workbook and report during Mission 2. Representative median is $3,499; range $3,199–$3,799. These are October 27, 2026 observations, not live prices. GE retailer observations are partially verified; Samsung uses business terms; stock and historical regular prices are unestablished.

The original website identifies **FreshKeep** as a working brand. It remains unchanged. The setup supplied a live website in the repository field. The repository `https://github.com/anthonydidato/Creative-Website` was derived from that URL and verified through GitHub metadata; both this provenance and the original supplied URL appear in exports.

`src/data/defaults.mjs` holds 29 venture-specific expense assumptions across production, logistics, service, payments, people, technology, facilities, administration, marketing, compliance, startup, capital, and working capital. Two active payment costs use Stripe's published domestic-card rates (2.9% + $0.30). An optional engineering hire uses a BLS national median wage benchmark and starts disabled. Payroll/benefits is an estimate; most manufacturing, fulfillment, warranty and startup allowances are illustrative and need quotes. Sources and scope caveats were checked October 28, 2026 and are bundled in the app. A linked contextual source does not certify an illustrative amount.

## Financial model

Annual steady-state operating horizon. Default one-time appliance price $3,500 and 200 assumed annual units are exploratory. Default arithmetic: $700,000 revenue, $487,360 variable costs, $187,640 fixed costs including $10,000 depreciation, $25,000 operating profit, 176.49 exact / 177 rounded-up break-even units, and $200,000 separate startup cash.

- Monthly / quarterly / weekly fixed costs annualize by 12 / 4 / 52.
- Variable cost bases: annual model unit; unit-month; percentage of revenue; or payment transaction.
- Monthly subscriptions use 12 payments and 12 times monthly price per average active subscriber. Annual subscription quantity is average active annual subscribers. These are hypothetical alternatives, not an established FreshKeep subscription offer.
- Product-specific fixed costs plus shared overhead count once. Revenue, quantity or equal allocation changes product reporting without changing business profit.
- Multi-product break-even holds the current quantity mix constant, using weighted contribution per annual model unit. The exact intersection determines break-even revenue and margin of safety. Displayed units round upward. Zero volume has no defined mix; nonpositive contribution has no finite break-even.
- Startup cash is not deducted from annual operating profit. Capital is straight-line depreciation with editable useful life, zero salvage and full-year use. Opening inventory cash is financing, not an additional unit expense. More working capital and operating-loss funding may be needed.
- Cost stress increases enabled amounts and additional unit costs by 10%; volume stress reduces all quantities by 20%. Sensitivity holds volume constant only as a modeling assumption. No demand, churn, capacity expansion, financing, income tax or success probability is predicted.

## Editing and persistence

Every cost has a slider, numerical input, reference marker, enablement, editable classification/frequency/allocation, description and assumptions. Custom expenses can be deleted; suggestions can be restored. Frequency changes reinterpret the amount and retain the original reference frequency. Student edits are labeled Student-Entered.

Products support names, descriptions, prices, quantities, unit costs, proposed features and add-on descriptions. Add-ons are descriptive until modeled as separate products. New products start as scenarios and do not enter refrigerator comparisons unless the student designates a compatible full-refrigerator unit and pricing model.

Browser local storage saves work. Back up with `FreshKeep_Working_Configuration.json`; restore through the file input or paste-JSON fallback. Imports are validated and invalidate decision records. Switching scenarios autosaves previous work (20 saved scenarios maximum). Lean, Typical and Expansion have identical initial volume: higher spending does not imply higher demand.

## Review and confirmation

Rules distinguish nonpositive product contribution, operating losses, missing cost allowances, unverified evidence, thin margins of safety and stress losses. Risk criteria are visible. The review is fingerprinted to the complete working financial model. Model changes make it outdated. Confirmation requires a current review, a written explanation and acknowledgment of major warnings. An unconventional or high-risk decision remains confirmable.

`Pricing_Decision_Report.docx` and `Pricing_Decision_Data.json` are generated from the same immutable confirmed snapshot. Edits require re-evaluation and confirmation; changed justification also invalidates downloadable confirmation. The JSON's `publicWebsiteData` excludes cost assumptions, profits, sales volumes and private justification. The full JSON and Word report contain private financial details and should not be published as website content.

## QA

`pnpm test` includes independent numerical examples, zero/negative contribution, zero volume, multiple products, allocation, billing normalization, startup/capital, imports, review invalidation and matching DOCX/JSON snapshots. QA files are generated under ignored `qa/`.

`?test=1` uses separate local-storage state and marks reports as test-only. Workflow testing does not confirm the user's decision. See `VALIDATION.md` for browser and export checks.

## Boundaries

This is a teaching and planning model, not supplier quotations, tax advice, a cash-flow forecast or validated product economics. No real pricing decision has been confirmed by the developer. Mission 4 is not started, and the original venture website and Mission 2 repository are unchanged.
