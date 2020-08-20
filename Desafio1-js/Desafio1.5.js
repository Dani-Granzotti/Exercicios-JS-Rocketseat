var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   
   for( i of usuarios ) console.log( `O ${ Object.values( i )[0] } possui as habilidades: ${ Object.values( i )[1].join(', ') }.` )