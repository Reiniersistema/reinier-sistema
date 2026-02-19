// CONFIGURACIÓN CENTRAL CONGO MUSUNDI
const URL_PROYECTO = 'https://rkcqrnqlmuzcvwlgkmyb.supabase.co'; 
const CLAVE_API = 'sb_publishable_rCrNB27M4ypZk7j0a10p_Q_3iNO7qRO';

// Inicialización global del cliente Supabase
// Esto permite que todos los archivos usen la variable 'supabaseClient' automáticamente
const supabaseClient = supabase.createClient(URL_PROYECTO, CLAVE_API);

console.log("Configuración de Supabase cargada correctamente.");
