# Kundguide

Sidan är förberedd för enkel redigering via en admin-sida.

## Det kunden ska kunna ändra

- Veckoprogram
- Protokoll och andra filer

## Så fungerar det

- Admin-sidan ligger på `/admin`
- Veckoprogram hämtas från `data/programs.json`
- Dokument/protokoll hämtas från `data/documents.json`
- Uppladdade filer sparas i `uploads/`

## Viktigt innan kunden kan använda admin

För att inloggning ska fungera på den publicerade sidan behöver webbplatsen kopplas till en CMS-inloggning.

Vanligast är något av dessa:

- Netlify + Git Gateway
- GitHub backend med OAuth

Just nu är projektet förberett för `GitHub`-backend med repot `agam95/gurudwaraproject`.

## Om du vill hålla det enklast för kunden

Det smidigaste nästa steget är att publicera sidan med en CMS-kompatibel hostinglösning och ge kunden en länk till:

`din-domän/admin`
