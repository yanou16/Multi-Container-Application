# Utilise Node.js officiel
FROM node:18

# Définir le dossier de travail
WORKDIR /app

# Copier package.json et installer dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer le serveur
CMD ["npm", "run", "dev"]
