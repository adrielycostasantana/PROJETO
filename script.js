function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver em light mode, adicoonar imagem ligh
    img.setAttribute("src", "./assets/foto-adriely-light.jpg.jpg")
    img.setAttribute("alt", "Imagem de Adriely light")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto-adriely-jpg.jpg")
  }

}