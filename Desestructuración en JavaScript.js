// Definimos el objeto usuario con propiedades y anidaciones
const usuario = {
    nombre: "Juan",
    apellido: "Pérez",
    ciudad: "Madrid",
    intereses: ["programación", "fotografía", "viajes"],
    contactos: {
        email: "juan.perez@example.com",
        linkedin: "https://linkedin.com/in/juanperez"
    },
    direccion: {
        calle: "Gran Vía",
        numero: 123
    }
};

// 1. Desestructuración para extraer nombre, apellido y ciudad
const { nombre, apellido, ciudad } = usuario;
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Ciudad:", ciudad);

// 2. Extraer el primer interés
const { intereses } = usuario;
const primerInteres = intereses[0];
console.log("Primer Interés:", primerInteres);

// 3. Extraer email y linkedin de contactos
const { email, linkedin } = usuario.contactos;
console.log("Email:", email);
console.log("LinkedIn:", linkedin);

// 4. Extraer calle y numero, renombrando a calleUsuario y numeroUsuario
const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;
console.log("Calle del usuario:", calleUsuario);
console.log("Número del usuario:", numeroUsuario);
