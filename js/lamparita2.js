// Encender a los segundos pares
function estadoL2(segundos) {
  return segundos % 2 != 0 && segundos % 3 == 0;
}