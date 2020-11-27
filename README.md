Backend starten:

cd backend && npm run start

API:

GET http://localhost:3333/list -> User[] (backend/src/app/user.entity.ts)

Frontend starten:

cd frontend && npm run start

Aufgaben:

- Füge dem Projekt Angular Material hinzu -> https://material.angular.io/
- Erstelle einen Service der eine User Liste laden kann (GET /list)
- Erstelle eine Lazy geladene Component die 2 per Drag and Drop verbundene Listen enthält (https://material.angular.io/cdk/drag-drop/overview)
- Benutze den Service und befülle eine der Listen mit den geladenen Usern
