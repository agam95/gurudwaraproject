# Kundguide

Den här hemsidan är nu förberedd för att kunden ska kunna uppdatera innehåll via en adminpanel i stället för att ändra kod.

## Vad kunden kan ändra

- Program och aktiviteter
- Protokoll och andra dokument
- Svenska, engelska och punjabi för varje programkort och dokumentkort
- Uppladdade filer till protokollsektionen

## Var adminpanelen finns

- Admin-sidan ligger på `/admin`
- Exempel: `https://din-domän.se/admin`

## Hur kunden använder adminpanelen

1. Gå till `/admin`
2. Logga in
3. Välj `Program och aktiviteter` eller `Protokoll`
4. Lägg till, ändra eller ta bort poster
5. Spara ändringen
6. Publicera ändringen

## Hur innehållet är kopplat

- [data/programs.json](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/data/programs.json) styr sektionen `Program och aktiviteter`
- [data/documents.json](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/data/documents.json) styr sidan `Protokoll`
- [admin/config.yml](C:/Users/agams/OneDrive/Skrivbord/gurdwara-site/admin/config.yml) styr fälten i adminpanelen
- Uppladdade filer sparas i `uploads/`

## Viktigt innan kunden kan logga in på riktigt

Adminpanelen finns i projektet, men inloggningen måste kopplas till den publicerade hemsidan.

Det finns två vanliga sätt:

- `GitHub backend`
  Då loggar admin in via GitHub/OAuth och sparar ändringar direkt till repot.

- `Netlify + Git Gateway`
  Det här är oftast enklast för en kund, eftersom kunden kan få en enklare inloggning via Netlify Identity.

## Min rekommendation

Det enklaste för kundöverlämning är:

1. Publicera sidan via Netlify
2. Aktivera `Identity`
3. Aktivera `Git Gateway`
4. Ge kunden länken till `/admin`
5. Bjud in kunden som adminanvändare

## Om du vill behålla GitHub-lösningen

Nuvarande admin är konfigurerad för GitHub-repot:

- `agam95/gurudwaraproject`

Om du använder GitHub-lösningen behöver du också en fungerande OAuth-lösning för Decap CMS på den publicerade sidan.

## Viktigt för innehåll på flera språk

Varje programkort och dokumentkort har fält för:

- `Svenska`
- `English`
- `Punjabi`

Om kunden lämnar ett språk tomt försöker sidan visa svensk text som reserv.

## Kort sammanfattning

Det tekniska adminstödet är nu inbyggt i projektet.

Det enda som återstår innan kunden kan använda det live är att koppla admininloggningen till den hosting du väljer för den publicerade webbplatsen.
