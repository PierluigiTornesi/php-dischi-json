const { createApp } = Vue;

createApp({
  data() {
    return {
        //apiUrl
        apiUrl: "index.php",
        //array che conterrá l'elenco dei dischi
        elencoDischi: [],
    };
  },
  created() {
    //prendo i dati della mia api e li inserisco dentro l'array che conterrá i dischi
    axios.get(this.apiUrl).then((resp) => {
        this.elencoDischi = resp.data;
        console.log(this.elencoDischi);
    })
  },
  methods: {
    //funzione per prendere il link del poster del disco
    getImageLink(disco){
        return disco.poster;
    }
    
  },
}).mount("#app");