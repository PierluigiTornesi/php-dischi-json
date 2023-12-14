const { createApp } = Vue;

createApp({
  data() {
    return {
        apiUrl: "index.php",
        elencoDischi: [],
    };
  },
  created() {
    axios.get(this.apiUrl).then((resp) => {
        this.elencoDischi = resp.data;
        console.log(this.elencoDischi);
    })
  },
  methods: {
    getImageLink(disco){
        return disco.poster;
    }
    
  },
}).mount("#app");