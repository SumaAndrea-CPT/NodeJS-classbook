# ClassBook - Sistema di Prenotazione Aule

<div align="center">

![ClassBook Logo](https://img.shields.io/badge/ClassBook-Sistema%20Prenotazioni-6366f1?style=for-the-badge&logo=bookstack&logoColor=white)

**Un sistema moderno e intuitivo per la gestione delle prenotazioni delle aule scolastiche**

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.2-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Caratteristiche](#-caratteristiche) •
[Demo](#-demo) •
[Installazione](#-installazione) •
[Utilizzo](#-utilizzo) •
[Tecnologie](#-tecnologie-utilizzate) •
[Contribuire](#-contribuire)

</div>

---

## 📋 Indice

- [Panoramica](#-panoramica)
- [Caratteristiche](#-caratteristiche)
- [Demo](#-demo)
- [Prerequisiti](#-prerequisiti)
- [Installazione](#-installazione)
- [Configurazione Database](#-configurazione-database)
- [Utilizzo](#-utilizzo)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Flusso Applicativo](#-flusso-applicativo)
- [Tecnologie Utilizzate](#-tecnologie-utilizzate)
- [Sicurezza](#-sicurezza)
- [Roadmap](#-roadmap)
- [Contribuire](#-contribuire)
- [Licenza](#-licenza)
- [Contatti](#-contatti)

---

## 🌟 Panoramica

**ClassBook** è un'applicazione web full-stack progettata per semplificare la gestione delle prenotazioni delle aule in ambiente scolastico o universitario. Con un'interfaccia moderna e intuitiva, gli utenti possono facilmente visualizzare le aule disponibili, effettuare prenotazioni e gestire i propri impegni.

### Perché ClassBook?

- **Semplice da usare**: Interfaccia pulita e intuitiva
- **Sicuro**: Autenticazione robusta con bcrypt
- **Responsive**: Funziona perfettamente su tutti i dispositivi
- **Moderno**: Design professionale con animazioni fluide
- **Efficiente**: Gestione ottimizzata delle prenotazioni

---

## Caratteristiche

### Autenticazione
- **Registrazione utenti** con validazione password
- **Login sicuro** con hashing bcrypt
- **Gestione sessioni** server-side
- **Logout protetto**

### Gestione Aule
- Visualizzazione di tutte le aule disponibili
- Informazioni dettagliate sulla capienza
- Layout a griglia responsive
- Interfaccia visivamente accattivante con icone

### Prenotazioni
- **Crea nuove prenotazioni** selezionando aula e data
- **Visualizza prenotazioni** personali in tempo reale
- **Elimina prenotazioni** con conferma di sicurezza
- **Stati vuoti** informativi quando non ci sono prenotazioni

### Design Moderno
- Palette colori professionale (indigo/purple gradient)
- Animazioni fluide e transizioni smooth
- Hover effects interattivi
- Font moderno (Inter)
- Completamente responsive

---

## Prerequisiti

Prima di iniziare, assicurarsi di avere installato:

- **Node.js** (v14 o superiore)
- **npm** (v6 o superiore)
- **MySQL** (v8.0 o superiore)
- Un editor di codice (consigliato: VS Code)

---

## 🚀 Installazione

### 1. Clona il Repository

```bash
git clone https://github.com/tuousername/classbook.git
cd classbook
```

### 2. Installa le Dipendenze

```bash
npm install
```

### 3. Configura il Database
Importare il file .sql (presente nel repo) su Workbench

### 4. Avvia l'Applicazione

```bash
node app.js
```

oppure con nodemon:

```bash
npx nodemon app.js
```

L'applicazione sarà disponibile su: **http://localhost:3000**

---

## Utilizzo

### Registrazione

1. Naviga su **http://localhost:3000**
2. Clicca su **"Registrati qui"**
3. Compila il form con:
   - Username (univoco)
   - Password (sicura)
   - Conferma password
4. Clicca su **"Registrati"**

### Login

1. Inserisci le tue credenziali
2. Clicca su **"Accedi"**
3. Verrai reindirizzato alla Dashboard

### Visualizzare le Aule

1. Dalla Dashboard, clicca su **"Aule Disponibili"**
2. Visualizza tutte le aule con le rispettive capienze
3. Torna alla Dashboard quando vuoi

### Creare una Prenotazione

1. Dalla Dashboard, clicca su **"Le Mie Prenotazioni"**
2. Scorri fino alla sezione **"Nuova Prenotazione"**
3. Seleziona un'aula dal menu a tendina
4. Scegli una data dal calendario
5. Clicca su **"Prenota Ora"**

### Gestire le Prenotazioni

1. Visualizza tutte le tue prenotazioni nella pagina **"Le Mie Prenotazioni"**
2. Per eliminare una prenotazione:
   - Clicca sul pulsante **"Elimina"**
   - Conferma l'eliminazione nella finestra di dialogo

### Logout

1. Clicca su **"Logout"** nella navbar
2. Verrai reindirizzato alla pagina di login

---

## Struttura del Progetto

```
classbook/
├── 📄 app.js                    # Entry point dell'applicazione
├── 📄 db.js                     # Configurazione database MySQL
├── 📄 package.json              # Dipendenze e scripts
├── 📄 package-lock.json         # Lock delle dipendenze
├── 📄 README.md                 # Documentazione (questo file)
│
├── 📁 public/                   # File statici pubblici
│   └── 📁 css/
│       └── 📄 style.css         # Stili CSS globali
│
├── 📁 routes/                   # Route dell'applicazione
│   ├── 📄 auth.js               # Route autenticazione (login, register, logout)
│   ├── 📄 rooms.js              # Route per visualizzare le aule
│   └── 📄 bookings.js           # Route per gestire le prenotazioni
│
└── 📁 views/                    # Template Handlebars
    ├── 📁 layouts/
    │   └── 📄 main.hbs          # Layout principale
    ├── 📄 login.hbs             # Pagina di login
    ├── 📄 register.hbs          # Pagina di registrazione
    ├── 📄 dashboard.hbs         # Dashboard principale
    ├── 📄 rooms.hbs             # Pagina elenco aule
    └── 📄 bookings.hbs          # Pagina gestione prenotazioni
```

---

### Descrizione del Flusso

1. **Accesso Iniziale**: L'utente non autenticato arriva alla pagina di login
2. **Registrazione**: Se non ha un account, completa la registrazione
3. **Autenticazione**: Effettua il login con username e password
4. **Dashboard**: Hub centrale per accedere a tutte le funzionalità
5. **Visualizzazione Aule**: Consultazione delle aule disponibili con dettagli
6. **Gestione Prenotazioni**: Creazione ed eliminazione delle prenotazioni
7. **Logout**: Terminazione sicura della sessione

---

## Tecnologie Utilizzate

### Backend
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Express.js](https://expressjs.com/)** (v5.2.1) - Framework web
- **[MySQL2](https://www.npmjs.com/package/mysql2)** (v3.16.1) - Driver MySQL con Promise
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** (v6.0.0) - Hashing password sicuro
- **[express-session](https://www.npmjs.com/package/express-session)** (v1.18.2) - Gestione sessioni

### Frontend
- **[Handlebars](https://handlebarsjs.com/)** (v8.0.4) - Template engine
- **CSS3** - Styling con variabili CSS e animazioni
- **[Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)** - Typography moderna

### Development
- **[nodemon](https://nodemon.io/)** (v3.1.11) - Auto-reload durante lo sviluppo

---

## 👨‍💻 Autore

**Andrea Suma**

- GitHub: [@SumaAndrea-CPT](https://github.com/SumaAndrea-CPT)
- Email: andrea.suma@student.edu.ti.ch

---
<div align="center">

Made with ❤️ and ☕

[⬆ Torna su](#-classbook---sistema-di-prenotazione-aule)

</div>
