let dados = [
    {
        titulo: "Quem sou eu",
        descricao: "Me chamo Fernanda Santana...",
        link: "https://www.instagram.com/@santana_ferr",
        tags:"fernanda correr treino"
    },
    {
        titulo: "Plano de treino",
        descricao: "Olá a todos! Aqui está o meu plano de treino para a primeira corrida de 5km...",
        link: "https://www.instagram.com/@santana_ferr",
        tags:"plano de treino corrida 5km"
    },
    {
        titulo: "Minha Dieta",
        descricao: "Uma alimentação equilibrada é fundamental para otimizar o desempenho durante os treinos e garantir uma boa recuperação...",
        link: "https://www.instagram.com/@santana_ferr",
        tags: "dieta treinos recuperação"
    },
    {
        titulo: "Dicas para Iniciante",
        descricao: "Está começando a correr? Parabéns pela decisão! Para te ajudar nessa jornada, separei algumas dicas importantes:...",
        link: "https://www.instagram.com/@santana_ferr",
        tags: "jornada dicas"
    },
];

// Exibindo o conteúdo do array de forma mais organizada
dados.forEach(item => {
    console.log("Título:", item.titulo);
    console.log("Descrição:", item.descricao);
    console.log("Link:", item.link);
    console.log("--------------------");
});