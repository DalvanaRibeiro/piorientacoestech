# Portal de Orientações — PI 1 e PI 2

Projeto simples em React + Vite, sem banco de dados e sem Firebase.

## Como executar

```powershell
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Se o npm usar um endereço incorreto

```powershell
npm config set registry https://registry.npmjs.org/
npm config delete proxy
npm config delete https-proxy
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force
npm install
npm run dev
```
