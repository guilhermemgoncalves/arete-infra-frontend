const fs = require('fs');

const envConfig = `export const environment = {
  production: true,
  apiUrl: '${process.env.NG_APP_API_URL}'
};`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfig);
console.log('✅ Arquivo de ambiente gerado com sucesso!');
