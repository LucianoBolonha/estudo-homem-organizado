# Landing Page Estudo Homens

Landing page estatica para o estudo **Como Ser Um Homem Organizado**, ministrado pelo Pastor Fernando para Homens & Plena.

## Rodar localmente

Na pasta do projeto, execute um servidor estatico:

```powershell
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

Se preferir usar Node:

```powershell
npx serve .
```

## Publicar com link publico

Opcoes simples:

- Vercel: importe este repositorio/projeto e publique como site estatico.
- Netlify: arraste a pasta do projeto no painel ou conecte o repositorio.

Nao ha backend nem processo de build. A raiz do site e o arquivo `index.html`.

## Link publicado

Producao na Vercel:

```text
https://landing-estudo-homens.vercel.app
```
