// ============================================================
//  CONFIGURACIÓN DEL CATÁLOGO — BOYS PERFUME
//  Cambia SOLO los valores entre comillas. No borres las comillas ni las comas.
// ============================================================
const CONFIG = {
  // --- Supabase (Project Settings -> API en tu proyecto) ---
  // Si Boys Perfume necesita su PROPIO inventario, crea un proyecto nuevo en
  // Supabase y pega aquí su URL y su anon key. Si no, deja estos.
  SUPABASE_URL: "https://abfnocwlyivocjjzjgtg.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZm5vY3dseWl2b2NqanpqZ3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMzMxOTIsImV4cCI6MjA5OTkwOTE5Mn0.z7LAX0c6cOsAPWE-vTV5N5Uy1m3nkfa35zQoFqhn3oo",

  // --- Datos de la tienda ---
  TIENDA_NOMBRE: "Boys Perfume",
  TIENDA_TAGLINE: "Perfumes importados · La esencia que te distingue",
  MONEDA: "S/",

  // --- Etiquetas del selector de precios (catálogo público) ---
  LABEL_MINORISTA: "Precio unidad",
  LABEL_MAYORISTA: "Precio por mayor",

  // A partir de cuántos perfumes (en total) se aplica el precio por mayor:
  MAYOR_MIN: 3,

  // Cuando el stock es igual o menor a esto, se marca "casi agotado":
  STOCK_BAJO: 5,

  // --- WhatsApp para recibir pedidos (con código de país 51) ---
  WHATSAPP: "51964241608",

  // --- Redes sociales (deja "" en la que no uses) ---
  REDES: {
    instagram: "",
    facebook:  "",
    tiktok:    "",
  },
};
