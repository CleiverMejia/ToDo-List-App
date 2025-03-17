# ToDo List App

## Descripción

Este es un proyecto de una aplicación To-Do List creada con **Ionic Framework** y **Angular**, utilizando **Firebase** como base de datos para almacenar las tareas. La aplicación permite a los usuarios agregar, eliminar y marcar tareas como completadas.

## Tecnologías

- **Ionic Framework**
- **Angular**
- **Firebase**
- **Firebase Firestore**

## Características

- Crear tareas.
- Eliminar tareas.
- Editar tareas.
- Leer tareas.
- Marcar tareas como completadas.
- Sincronización en tiempo real con Firebase Firestore.

---

## Capturas de Pantalla

![Home](https://imgur.com/6Z9t9Jf)

![Add Task](https://imgur.com/jH7w7m1)

![Edit Task](https://imgur.com/FPetWaH)

---

## Instalación

### Prerrequisitos

Asegúrate de tener los siguientes elementos instalados:

- **Node.js** y **npm**: Puedes descargarlos desde [aquí](https://nodejs.org/).
- **Ionic CLI**: Instala Ionic CLI globalmente en tu máquina.

```bash
npm install -g @ionic/cli
```

- **Firebase**: Crea un proyecto en Firebase y configura Firestore. Para obtener más detalles, visita la documentación oficial de [Firebase](https://firebase.google.com/docs/web/setup).

### Pasos para la instalación

1. **Clonar el repositorio**

   Primero, clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/CleiverMejia/ToDo-List-App.git
   cd todo-list-app
   ```

2. **Instalar dependencias**

   Instala las dependencias del proyecto con npm:

   ```bash
   npm install
   ```

3. **Configurar Firebase**

   - Dirígete a tu [console de Firebase](https://console.firebase.google.com/).
   - Crea un nuevo proyecto o usa uno existente.
   - En la consola de Firebase, ve a la sección de **Firestore** y habilita la base de datos.
   - Ve a la sección de **Configuración del Proyecto** y copia las credenciales de configuración de Firebase (API Key, Auth Domain, etc.).

4. **Configurar Firebase en el proyecto**

   - Crea un archivo `src/environments/firebase-config.ts` y pega la configuración de Firebase dentro:

     ```typescript
     export const firebaseConfig = {
       apiKey: "TU_API_KEY",
       authDomain: "TU_AUTH_DOMAIN",
       projectId: "TU_PROJECT_ID",
       storageBucket: "TU_STORAGE_BUCKET",
       messagingSenderId: "TU_MESSAGING_SENDER_ID",
       appId: "TU_APP_ID"
     };
     ```
---

## Uso

### Ejecutar la aplicación en el navegador

Para ejecutar la aplicación en el navegador, usa el siguiente comando:

```bash
ionic serve
```

Esto abrirá una ventana del navegador con la aplicación funcionando en `http://localhost:8100`.

### Ejecutar la aplicación en un dispositivo móvil

Si deseas probar la aplicación en un dispositivo móvil, puedes usar los siguientes comandos para Android o iOS.

- **Para Android**:

   ```bash
   ionic capacitor run android
   ```

- **Para iOS** (requiere un entorno macOS con Xcode instalado):

   ```bash
   ionic capacitor run ios
   ```