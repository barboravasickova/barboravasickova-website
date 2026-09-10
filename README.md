# barboravasickova-website

Portfolio UX / product design – stejná struktura jako `baia.cz/product-design`.

## Routes

- `/` → přesměrování na `/product-design`
- `/product-design` – homepage portfolia
- `/product-design/projekty`, `/proces`, `/o-mne`, `/kontakt`
- `/product-design/projects/[id]` – detail projektu

Ilustrace BAIA: [https://www.baia.cz/](https://www.baia.cz/)

## Lokální vývoj

```bash
npm install
npm run dev
```

## Nasazení (Vercel)

1. Push tohoto repozitáře na GitHub: [barboravasickova/barboravasickova-website](https://github.com/barboravasickova/barboravasickova-website)
2. V [Vercel](https://vercel.com) vytvoř nový projekt z repozitáře.
3. Doménu `barboravasickova.cz` (a případně `www`) nastav v DNS u registrátora podle instrukcí Vercelu.

Soubor `public/CNAME` slouží jen jako reference cílové domény; u Vercelu se doména přidává v dashboardu.
