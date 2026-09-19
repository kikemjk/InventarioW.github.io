// Esta función escucha la nube. Si ALGUIEN cambia un dato en OTRO teléfono,
// esta función se ejecuta automáticamente en TODOS los dispositivos conectados.
function escucharInventarioEnTiempoReal() {
  const productosRef = collection(db, "inventario");
  
  onSnapshot(productosRef, (snapshot) => {
    let inventarioActualizado = [];
    snapshot.forEach((doc) => {
      inventarioActualizado.push({ id: doc.id, ...doc.data() });
    });
    
    // Actualizamos la pantalla de todos los celulares al instante
    renderProducts(inventarioActualizado);
  });
}