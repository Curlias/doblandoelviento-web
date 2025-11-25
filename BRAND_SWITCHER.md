# Brand Switcher - Funcionalidad Multi-Marca

## Descripción

Se ha implementado un sistema de cambio de marca que permite navegar entre las tres marcas del negocio desde una sola aplicación:

- **Doblando el Viento** - Diseño y curaduría de eventos (paleta sage green)
- **TAVITI** - Papelería boutique (paleta rosa/pink)
- **ILAIA** - Educación STEAM (paleta azul/blue)

## Características

### 1. Brand Switcher (Pestañas superiores)

Encima del header, encontrarás una barra oscura con tres pestañas discretas:
- **Doblando el Viento** (verde sage)
- **TAVITI** (rosa)
- **ILAIA** (azul)

La pestaña activa se resalta con un ring blanco y el color de la marca correspondiente.

### 2. Header Dinámico

El header cambia automáticamente según la marca:
- **Colores**: Cada marca tiene su paleta de colores
- **Logo**: Solo Doblando el Viento muestra el logo SVG
- **Navegación**: Links específicos para cada marca

### 3. Footer Dinámico

El footer se adapta a cada marca:
- **Colores**: Background y texto cambian según la marca
- **Links legales**: Apuntan a las páginas correctas de cada marca
- **Otras marcas**: Muestra las otras dos marcas en el footer

## Rutas

### Doblando el Viento
- **Base**: `/`
- **Páginas**: `/servicios`, `/galeria`, `/testimonios`, `/cotizacion`, `/contacto`

### TAVITI
- **Base**: `/taviti`
- **Páginas**: `/taviti/productos`, `/taviti/personalizacion`, `/taviti/galeria`, `/taviti/contacto`

### ILAIA
- **Base**: `/ilaia`
- **Páginas**: `/ilaia/programas`, `/ilaia/talleres`, `/ilaia/recursos`, `/ilaia/contacto`

## Tecnología

### Componentes Principales

1. **BrandSwitcher** (`packages/ui/src/brand-switcher.tsx`)
   - Muestra las tres pestañas de marcas
   - Resalta la marca activa
   - Navegación entre marcas

2. **BrandLayoutWrapper** (`apps/web-main/src/components/brand-layout-wrapper.tsx`)
   - Detecta la marca actual basándose en la URL
   - Configura el header y footer según la marca
   - Maneja la navegación específica de cada marca

3. **Header** (`packages/ui/src/header.tsx`)
   - Soporta estilos para tres marcas
   - Logo condicional para Doblando el Viento
   - Navegación adaptable

4. **Footer** (`packages/ui/src/footer.tsx`)
   - Estilos por marca
   - Links a otras marcas
   - Rutas legales específicas

### Configuración de Marcas

Cada marca tiene su configuración en `BrandLayoutWrapper`:

```typescript
{
  brand: "doblado" | "taviti" | "ilaia",
  brandName: string,
  navigation: Array<{ name: string; href: string }>,
  otherBrands: Array<{ name: string; url: string }>
}
```

## Estado Actual

✅ **Doblando el Viento**: Totalmente funcional con todos los servicios, páginas y contenido
⚠️ **TAVITI**: Página de inicio con diseño placeholder (próximamente contenido completo)
⚠️ **ILAIA**: Página de inicio con diseño placeholder (próximamente contenido completo)

## Próximos Pasos

1. Desarrollar contenido completo para TAVITI
2. Desarrollar contenido completo para ILAIA
3. Crear logos específicos para TAVITI e ILAIA
4. Añadir páginas legales específicas para cada marca
5. Implementar páginas de contacto específicas

## Desarrollo Local

El servidor de desarrollo corre en:
- **web-main**: `http://localhost:3000` (todas las marcas desde una app)

```bash
npm run dev
```

## Notas de Diseño

- **Sage Green** (#7a8b62): Doblando el Viento - Elegancia natural
- **Pink** (#EC4899): TAVITI - Creatividad y personalización
- **Blue** (#3B82F6): ILAIA - Innovación y educación

Cada marca mantiene su identidad visual única mientras comparte la misma infraestructura técnica.
