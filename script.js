var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg","https://m.media-amazon.com/images/I/91UusfCtQaL._AC_UF894,1000_QL80_.jpg","https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080","https://play-lh.googleusercontent.com/vJ-9LE6gkG6kq-4zQhPpi5lAODso7EOsOYYmrKY1hpWLCqnXkEluga1P7t1VUaTL-Ww","https://de.web.img3.acsta.net/medias/nmedia/18/63/49/05/19393963.jpg"]

for(var i=0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>')
}