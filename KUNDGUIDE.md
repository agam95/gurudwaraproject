# Kundguide

Den har hemsidan ar forberedd for att kunden ska kunna uppdatera innehall via en adminpanel i stallet for att andra kod.

## Vad kunden kan andra

- Program och aktiviteter
- Protokoll och andra dokument
- Svenska, engelska och punjabi for varje programkort och dokumentkort
- Uppladdade filer till protokollsektionen

## Var adminpanelen finns

- Admin-sidan ligger pa `/admin`
- Exempel: `https://din-doman.se/admin`

## Hur kunden anvander adminpanelen

1. Ga till `/admin`
2. Logga in
3. Valj `Program och aktiviteter` eller `Protokoll`
4. Lagg till, andra eller ta bort poster
5. Spara andringen
6. Publicera andringen

## Hur innehallet ar kopplat

- [data/programs.json](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/data/programs.json) styr sektionen `Program och aktiviteter`
- [data/documents.json](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/data/documents.json) styr sidan `Protokoll`
- [admin/config.yml](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/admin/config.yml) styr falten i adminpanelen
- Uppladdade filer sparas i `uploads/`

## Nuvarande setup

Projektet ar nu forberett for `Netlify + Git Gateway`.

- Adminpanelen laddar Netlify Identity-widgeten i [admin/index.html](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/admin/index.html)
- CMS-backend ar satt till `git-gateway` i [admin/config.yml](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/admin/config.yml)
- Innehall som kunden sparar fortsatter att uppdatera projektets JSON-filer

## Viktigt innan kunden kan logga in pa riktigt

Adminpanelen finns i projektet, men inloggningen maste kopplas till den publicerade hemsidan.

Gor sa har i Netlify:

1. Publicera sidan via Netlify
2. Aktivera `Identity`
3. Aktivera `Git Gateway`
4. Bjud in kunden som adminanvandare
5. Ge kunden lank till `/admin`

## Om felet "You don't have sufficient permissions to access Decap CMS"

`Git Gateway` pa den har sajten ar begransad till rollen `admin`. Meddelandet
betyder att inloggningen fungerade, men att Identity-kontot saknar den rollen.

Projektet loser det automatiskt via [netlify/functions/identity.mjs](netlify/functions/identity.mjs).
Funktionen ger varje inbjuden anvandare rollen `admin`, bade nar inbjudan
accepteras och vid inloggning. Ser du felet redan i dag: logga ut och logga in
igen efter nasta publicering, sa foljer rollen med i inloggningen.

Du kan ocksa satta rollen manuellt i Netlify under `Identity` > `Users` >
valj anvandare > `Roles` > lagg till `admin`.

Notera att registrering ar stangd (`invite only`), sa bara personer som du
bjuder in kan fa ett konto och darmed tillgang till adminpanelen.

## Viktig notering om Netlify i dag

Netlify Docs markerar `Git Gateway` som `deprecated`.

Det betyder:

- det kan fortfarande fungera som en enkel kundinloggning
- det ar inte den mest framtidssakra losningen for ett nytt projekt
- om ni vill ha en mer langsiktig setup bor vi senare planera en annan auth-losning

## Om du vill behalla GitHub-losningen

Den tidigare adminlosningen var konfigurerad for GitHub-repot:

- `agam95/gurudwaraproject`

Om du anvander GitHub-losningen behover du ocksa en fungerande OAuth-losning for Decap CMS pa den publicerade sidan.

## Viktigt for innehall pa flera sprak

Varje programkort och dokumentkort har falt for:

- `Svenska`
- `English`
- `Punjabi`

Om kunden lamnar ett sprak tomt forsoker sidan visa svensk text som reserv.

## Kort sammanfattning

Det tekniska adminstodet ar nu inbyggt i projektet.

Det som aterstar ar att koppla admininloggningen till din publicerade Netlify-sajt och bjuda in kunden.
