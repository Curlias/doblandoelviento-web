# Doblando el Viento - Monorepo Multi-Marca

Este es un monorepo construido con **Turborepo** que contiene tres aplicaciones Next.js independientes para las marcas: **Doblando el Viento**, **TAVITI** e **ILAIA**.

## 📋 Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración Local](#instalación-y-configuración-local)
- [Desarrollo](#desarrollo)
- [Deployment a Vercel](#deployment-a-vercel)
- [Configuración de Dominios](#configuración-de-dominios)
- [Migración a Dominios Independientes](#migración-a-dominios-independientes)
- [Variables de Entorno](#variables-de-entorno)
- [Páginas Legales](#páginas-legales)

## 🗂️ Estructura del Proyecto

```
doblandoelviento-web/
├── apps/
│   ├── web-doblado/          # Doblando el Viento - Eventos
│   ├── web-taviti/           # TAVITI - Papelería Boutique
│   └── web-ilaia/            # ILAIA - Educación STEAM
├── packages/
│   ├── ui/                   # Componentes compartidos
│   └── config/               # Configuración TypeScript/ESLint
├── package.json
├── turbo.json
└── README.md
```

### Aplicaciones

#### 1. **Doblando el Viento** (`web-doblado`)
- **Puerto de desarrollo**: 3000
- **Dominio**: `doblandoelviento.com`
- **Descripción**: Curaduría y decoración de eventos
- **Páginas**: Home, Servicios, Galería, Testimonios, Cotización, Contacto

#### 2. **TAVITI** (`web-taviti`)
- **Puerto de desarrollo**: 3001
- **Dominio**: `taviti.doblandoelviento.com`
- **Descripción**: Papelería boutique
- **Páginas**: Home, Catálogo, Blog, Contacto

#### 3. **ILAIA** (`web-ilaia`)
- **Puerto de desarrollo**: 3002
- **Dominio**: `ilaia.doblandoelviento.com`
- **Descripción**: Educación STEAM para niños
- **Páginas**: Home, Cursos, Recursos, Blog, Calendario, Inscripción, Contacto

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Monorepo**: Turborepo
- **Styling**: Tailwind CSS
- **Lenguaje**: TypeScript
- **UI Components**: Componentes compartidos personalizados
- **Hosting**: Vercel (recomendado)

## 🚀 Instalación y Configuración Local

### Prerequisitos

- Node.js >= 18.0.0
- npm >= 10.0.0

### Pasos de Instalación

1. **Clonar el repositorio**:
```bash
git clone <repository-url>
cd doblandoelviento-web
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Crear archivos de variables de entorno**:

Para cada aplicación, crea un archivo `.env.local`:

```bash
# apps/web-doblado/.env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=5212345678901
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# apps/web-taviti/.env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=5212345678901

# apps/web-ilaia/.env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=5212345678901
```

## 💻 Desarrollo

### Ejecutar todas las aplicaciones

```bash
npm run dev
```

Esto iniciará:
- Doblando el Viento en `http://localhost:3000`
- TAVITI en `http://localhost:3001`
- ILAIA en `http://localhost:3002`

### Ejecutar una aplicación específica

```bash
# Doblando el Viento
cd apps/web-doblado
npm run dev

# TAVITI
cd apps/web-taviti
npm run dev

# ILAIA
cd apps/web-ilaia
npm run dev
```

### Otros comandos útiles

```bash
# Build todas las apps
npm run build

# Lint
npm run lint

# Type check
npm run type-check

# Limpiar
npm run clean
```

## 🌐 Deployment a Vercel

### Método 1: Deployment desde GitHub

1. **Conecta tu repositorio a Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub

2. **Configura el proyecto como Monorepo**:
   - Vercel detectará automáticamente que es un Turborepo
   - Configura cada app por separado

3. **Para cada aplicación, crea un nuevo proyecto**:

#### Doblando el Viento (Principal)
```
Framework Preset: Next.js
Root Directory: apps/web-doblado
Build Command: cd ../.. && npx turbo run build --filter=web-doblado
Output Directory: .next
Install Command: npm install
```

#### TAVITI
```
Framework Preset: Next.js
Root Directory: apps/web-taviti
Build Command: cd ../.. && npx turbo run build --filter=web-taviti
Output Directory: .next
Install Command: npm install
```

#### ILAIA
```
Framework Preset: Next.js
Root Directory: apps/web-ilaia
Build Command: cd ../.. && npx turbo run build --filter=web-ilaia
Output Directory: .next
Install Command: npm install
```

### Método 2: Deployment con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy Doblando el Viento
cd apps/web-doblado
vercel --prod

# Deploy TAVITI
cd apps/web-taviti
vercel --prod

# Deploy ILAIA
cd apps/web-ilaia
vercel --prod
```

## 🔗 Configuración de Dominios

### Configurar Subdominios en Vercel

1. **Doblando el Viento (Dominio Principal)**:
   - Ve al proyecto en Vercel
   - Settings → Domains
   - Agrega: `doblandoelviento.com` y `www.doblandoelviento.com`

2. **TAVITI (Subdominio)**:
   - Ve al proyecto de TAVITI en Vercel
   - Settings → Domains
   - Agrega: `taviti.doblandoelviento.com`

3. **ILAIA (Subdominio)**:
   - Ve al proyecto de ILAIA en Vercel
   - Settings → Domains
   - Agrega: `ilaia.doblandoelviento.com`

### Configurar DNS

En tu proveedor de dominios (GoDaddy, Namecheap, etc.), configura los siguientes registros:

```
Tipo    Nombre    Valor
----    ------    -----
A       @         76.76.21.21
CNAME   www       cname.vercel-dns.com
CNAME   taviti    cname.vercel-dns.com
CNAME   ilaia     cname.vercel-dns.com
```

> **Nota**: Los valores de IP y CNAME específicos los proporciona Vercel cuando agregas el dominio.

## 🔄 Migración a Dominios Independientes

Si en el futuro deseas migrar TAVITI o ILAIA a dominios propios (ej: `taviti.com`, `ilaia.com`):

### Pasos para la Migración

1. **Sin cambios en el código**:
   - Las apps ya están completamente independientes
   - No requieren modificaciones al código

2. **Configurar el nuevo dominio en Vercel**:
   - Ve al proyecto en Vercel
   - Settings → Domains
   - Agrega el nuevo dominio (ej: `taviti.com`)
   - Remueve el subdominio anterior si lo deseas

3. **Actualizar DNS**:
   ```
   # Para taviti.com
   A       @         76.76.21.21
   CNAME   www       cname.vercel-dns.com
   ```

4. **Opcional - Redirecciones**:
   - Configura redirects en Vercel para redirigir del subdominio al nuevo dominio
   - En `vercel.json` (en la raíz de la app):
   ```json
   {
     "redirects": [
       {
         "source": "/:path*",
         "has": [
           {
             "type": "host",
             "value": "taviti.doblandoelviento.com"
           }
         ],
         "destination": "https://taviti.com/:path*",
         "permanent": true
       }
     ]
   }
   ```

## 🔐 Variables de Entorno

### Variables Comunes

Configura estas variables en Vercel (Settings → Environment Variables) para cada proyecto:

```bash
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5212345678901

# Google Maps (solo para Doblando el Viento)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key

# Email (opcional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASSWORD=tu_password
```

### Configurar en Vercel

1. Ve al proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable
4. Selecciona los entornos: Production, Preview, Development

## 📄 Páginas Legales

Cada aplicación incluye las siguientes páginas legales:

- **Política de Privacidad**: `/privacy`
- **Política de Cookies**: `/cookies`
- **Términos de Servicio**: `/terms`

### Actualizar Políticas Legales

Las páginas legales están en:
- `apps/web-doblado/src/app/privacy/page.tsx`
- `apps/web-doblado/src/app/cookies/page.tsx`
- `apps/web-doblado/src/app/terms/page.tsx`

(Y similarmente para web-taviti y web-ilaia)

**Importante**: Actualiza la información de contacto, direcciones y datos específicos de tu negocio en estas páginas.

## 🎨 Personalización

### Colores por Marca

Cada aplicación tiene su propia paleta de colores en `tailwind.config.js`:

- **Doblando el Viento**: Tonos amber/naranja
- **TAVITI**: Tonos rosa/purple
- **ILAIA**: Tonos azul

### Componentes Compartidos

Los componentes en `packages/ui` son compartidos entre todas las apps:
- `Button`
- `Card`
- `Header`
- `Footer`

Para modificarlos, edita los archivos en `packages/ui/src/`.

## 📱 Footer - Veldrion Credit

Cada sitio incluye en el footer el texto:
> "Potenciado con la tecnología de [Veldrion](https://veldrion.com)"

Este texto está en `packages/ui/src/footer.tsx`.

## 🤝 Soporte

Para preguntas o problemas:
- **Email**: contacto@doblandoelviento.com
- **WhatsApp**: +52 (442) 123-4567

## 📝 Licencia

© 2024 Doblando el Viento. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando la tecnología de [Veldrion](https://veldrion.com)**
