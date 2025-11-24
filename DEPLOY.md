# Guía de Deployment en Vercel

Este monorepo contiene 3 aplicaciones que deben desplegarse en proyectos separados de Vercel.

## CONFIGURACIÓN RÁPIDA (Recomendada)

Para cada proyecto en Vercel, configura lo siguiente:

### doblandoelviento-web
1. Settings → Environment Variables → Add Variable
   - Name: `VERCEL_APP_NAME`
   - Value: `web-doblado`
   - Environment: Production, Preview, Development
2. Settings → Build & Development Settings
   - Build Command (Override): `./build.sh`
   - Output Directory: `.next`
3. Deployments → Latest → Redeploy

### taviti-web
1. Settings → Environment Variables → Add Variable
   - Name: `VERCEL_APP_NAME`
   - Value: `web-taviti`
   - Environment: Production, Preview, Development
2. Settings → Build & Development Settings
   - Build Command (Override): `./build.sh`
   - Output Directory: `.next`
3. Deployments → Latest → Redeploy

### ilaia-web
1. Settings → Environment Variables → Add Variable
   - Name: `VERCEL_APP_NAME`
   - Value: `web-ilaia`
   - Environment: Production, Preview, Development
2. Settings → Build & Development Settings
   - Build Command (Override): `./build.sh`
   - Output Directory: `.next`
3. Deployments → Latest → Redeploy

---

## Configuración desde Vercel Dashboard

### 1. Doblando el Viento (Proyecto Principal)
1. Ve a https://vercel.com/new
2. Importa: `Curlias/doblandoelviento-web`
3. Nombre del proyecto: `doblandoelviento-web`
4. Framework Preset: Next.js
5. Root Directory: (dejar vacío)
6. Build Command: (usa el de vercel.json automáticamente)
7. Deploy
8. En Settings → Domains, agregar: `doblandoelviento.com` y `www.doblandoelviento.com`

### 2. TAVITI
1. Ve a https://vercel.com/new
2. Importa: `Curlias/doblandoelviento-web` (mismo repositorio)
3. Nombre del proyecto: `taviti-web`
4. Framework Preset: Next.js
5. Root Directory: (dejar vacío)
6. **IMPORTANTE**: En "Build & Development Settings":
   - Override Build Command: `npx turbo run build --filter=web-taviti...`
   - Override Install Command: `npm install`
   - Output Directory: `apps/web-taviti/.next`
7. Deploy
8. En Settings → Domains, agregar: `taviti.doblandoelviento.com`

### 3. ILAIA
1. Ve a https://vercel.com/new
2. Importa: `Curlias/doblandoelviento-web` (mismo repositorio)
3. Nombre del proyecto: `ilaia-web`
4. Framework Preset: Next.js
5. Root Directory: (dejar vacío)
6. **IMPORTANTE**: En "Build & Development Settings":
   - Override Build Command: `npx turbo run build --filter=web-ilaia...`
   - Override Install Command: `npm install`
   - Output Directory: `apps/web-ilaia/.next`
7. Deploy
8. En Settings → Domains, agregar: `ilaia.doblandoelviento.com`

## DNS Configuration

Asegúrate de tener estos registros DNS en tu proveedor:

```
A       @                   76.76.21.21
CNAME   www                 cname.vercel-dns.com.
CNAME   taviti              cname.vercel-dns.com.
CNAME   ilaia               cname.vercel-dns.com.
```

## Notas Importantes

- Cada proyecto debe tener su propio deployment en Vercel
- Los 3 proyectos apuntan al mismo repositorio de GitHub
- Cada uno usa un filtro diferente de Turborepo (`--filter=web-X...`)
- El archivo `vercel.json` en la raíz se usa para el proyecto principal (Doblando)
- Los archivos `vercel-taviti.json` y `vercel-ilaia.json` son de referencia para las configuraciones
