# Monsieur Dossier — French rental file, ready and protected, on Mac

> Monsieur Dossier is a Mac app that prepares and protects your French rental file (dossier de location): allowed documents, unneeded data hidden, each copy in the recipient’s name. In English and French, offline.

Language: English · [Version française](https://monsieurdossier.com/index.html.md) · [Web page](https://monsieurdossier.com/en/) · Updated: 23 November 2026

Drop in your documents. Monsieur Dossier sorts them, finds what to hide and prepares every copy in the recipient’s name, in one go. On your Mac, no account, nothing uploaded.

- No account
- 100% offline
- English and French
- Free beta
- Version 1.2.0, 23 November 2026
- [Download for Mac](https://github.com/doudandyx/monsieur-dossier-site/releases/latest/download/MonsieurDossier.dmg)

## Four steps, and the whole file is ready.

Allow about a minute per document.

1. **Drop everything in.** PDFs, scans, iPhone photos, or a whole folder. Each document is filed under its category. One a landlord isn’t allowed to ask for gets flagged. Paste the agency’s list: you see what’s missing.
2. **The masks are already placed.** IBAN, bank codes, social security numbers and passport MRZ lines are found in their common formats, on scans and photos too. You review and add your own. Masked text is destroyed on saving, not just covered.
3. **One watermark for every document.** Enter the agency and the property address: the wording is written for you and stays off verification QR codes. Change the recipient: every copy is redone.
4. **Everything saves in one go.** Every file is reopened and checked. If a check fails, it isn’t saved. One folder per send, and several documents can be combined into one file.

[See all the features](https://monsieurdossier.com/en/features.html)

## A rental file is a ready-made identity-theft kit.

ID, tax notice, payslips, address: it’s all there. Fake listings exist to collect it.

- **Fake listings.** A “landlord” asks for the full file before any viewing, then vanishes. Your documents are used to open credit lines or accounts.
- **Unprotected attachments.** A PDF sent by email gets forwarded, copied, and sits in inboxes for years.
- **Fake redaction.** A black box drawn in a PDF editor often leaves the text underneath, ready to copy. Blur can be reversed.

## The rental file, in plain terms.

In France, landlords pick tenants from a file of documents, the “dossier de location”. Here is what to know before you send it.

- **Four kinds of documents.** Identity, current address, occupation (contract, student status) and income (payslips, tax notice). The list is set by law.
- **Passport or residence permit.** Both count as ID. Monsieur Dossier finds the line of codes at the bottom of a passport (MRZ) so you can hide it. Your photo and name stay visible.
- **The guarantor.** Many landlords ask for one. Visale, a free guarantee from Action Logement, can stand in for it under conditions: check whether you qualify on [visale.fr](https://www.visale.fr/).
- **All in English.** The app and the watermark are available in English. Your documents are not translated: a landlord may ask for a translation.

## Nothing leaves your Mac. You can check.

Monsieur Dossier has no account, no server and no analytics. Turn off Wi-Fi: everything works the same.

- **100% local processing.** The app only talks to itself, on 127.0.0.1. No connection to the internet.
- **Hidden text is destroyed.** Each page is flattened into an image: what’s under a mask no longer exists in the file.
- **Metadata removed.** Author, software, creation dates: nothing from the original is copied over.
- **Your originals untouched.** New files are created. Yours are never changed.

**How it works without the internet.** Monsieur Dossier is a Python program installed on your Mac, with everything it needs inside. Your documents are recognised and the numbers to hide are found by fixed rules. Scans and photos are read by the text recognition built into macOS, also on your Mac. No online AI, no model to download.

## A landlord can’t ask for everything.

In France, [décret n° 2015-1437](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493) sets a limited list of documents for a main residence. Anything else is forbidden, and you can refuse it. When Monsieur Dossier recognises a document that isn’t on the list, it warns you.

**Allowed. Examples of documents they can ask for**

- One ID document (ID card, passport, residence permit)
- Proof of address (last 3 rent receipts, host certificate…)
- Employment contract or employer certificate
- Last 3 payslips
- Latest tax notice

**Forbidden. Examples of documents to refuse**

- Bank statements
- Carte Vitale (health card)
- Criminal record
- Medical records
- Signed direct-debit authorisation
- Any payment before the lease is signed

Indicative, non-exhaustive list. Reference: French décret n° 2015-1437 of 5 November 2015 (amended in 2019 and 2022), annexes I and II. Check the current text on [legifrance.gouv.fr](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493).

## Monsieur Dossier for Mac

Free beta. Free during the beta. For Intel and Apple Silicon Macs. Your documents stay on your Mac. Version 1.2.0, 23 November 2026.

[Download for Mac](https://github.com/doudandyx/monsieur-dossier-site/releases/latest/download/MonsieurDossier.dmg)

### On first launch

This beta is not yet validated by Apple. On first launch, macOS shows a warning: it means Apple has not checked the app, not that a problem was found. Four steps, once only.

1. **Install.** Open the downloaded file and drag Monsieur Dossier into the Applications folder.
2. **Open the app.** macOS shows the warning. Close it with “Done”: do not move the app to the Trash.
3. **Allow it.** In System Settings, open “Privacy & Security”, scroll down to “Security” and click “Open Anyway”. The button stays there for about an hour.
4. **Confirm.** Confirm with “Open Anyway”, then enter your Mac’s password. After that, the app opens normally.

Steps for macOS 15 and later. On an older version: right-click the app, then “Open”. A version validated by Apple is being prepared. It will open without these steps.

## Frequently asked questions

### What is Monsieur Dossier?

Monsieur Dossier is a Mac app that prepares the documents of a French rental file, the “dossier de location”. It sorts your documents, finds the numbers a landlord does not need in their common formats (IBAN, social security number, the passport’s line of codes) and places the masks, which you review. It then adds a watermark naming the recipient. Everything happens on your Mac, with no account and no internet connection.

### How is this different from DossierFacile?

DossierFacile is the government service: it verifies your file and shares it by link, without hiding anything. Monsieur Dossier verifies nothing: it protects the files you send yourself, by hiding what isn’t needed and naming the recipient. They work together. [See the detailed comparison](https://monsieurdossier.com/en/dossierfacile.html)

### Is Monsieur Dossier an official service?

No. It is an independent app, with no link to the French government or to DossierFacile. It does not certify your documents.

### Is the app available?

Yes, for Mac, as a free beta: download it from this page.

### Is there a version for Windows, iPhone or Android?

No. Monsieur Dossier runs only on Mac, with an Intel or Apple Silicon processor.

### Why does macOS show a warning on first launch?

Because this beta is not yet validated by Apple. The warning means Apple has not checked the app, not that a problem was found. One confirmation in System Settings is enough, once only.

### Are my documents sent anywhere?

No. Processing happens entirely on your Mac. The app has no server, creates no account and collects no analytics. It works without an internet connection.

### Can a landlord refuse a redacted copy?

No law settles it. Hide only what serves neither to assess your income nor to verify the document, and keep your originals: a landlord may ask to see them.

### Why not just blur?

Because blur and pixelation can be reversed. Only opaque masks are offered: a black bar, or a “frosted” look generated from random noise, never from what’s hidden.

### How do I know the file is safe?

After every export, the PDF is reopened and checked: no text, font, metadata or attachment left, and each masked area no longer resembles the original. If a check fails, the file isn’t saved.

### What should the watermark say?

The recipient, purpose and date, for example: “Copy – Rental application 12 rue des Lilas – For Agence Saône only – 11/2026”. A stolen copy becomes hard to reuse elsewhere.

### Should I hide the QR code on my tax notice?

No. The landlord uses it to check the document is genuine. QR codes and 2D-Doc are detected and kept free of watermark. You’re warned if a mask covers one, and the export checks they are still detected.

---

Monsieur Dossier — your French rental file, ready and protected. Independent app, not affiliated with the French government. No data collected.
