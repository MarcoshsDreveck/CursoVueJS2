new Vue({
    el: '#desafio',
    data:{
        nome: "Marcos",
        idade: 25,
        imgGoogle: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png"
    },
    methods:{
        triploIdade(){
           return this.idade * 3;
        },
        randomico(){
            return Math.random();
        }
    }
});