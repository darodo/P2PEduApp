function exportUser() {
    fetch('/exportar_usuario/')
      .then(response => response.json())
      .then(data => downloadJSON(data))
      .catch(error => console.error(error));
  }