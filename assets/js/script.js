// ? SISTEMA HOTEL
let arrayHotel = [];
let arrayReserva = [];
let idHotel = 0;
let idReserva = 0;

//Criando classe
class Hotel{
    //Parâmetros
    IdHotel;
    Nome;
    Categoria;
    Endereco;
    Telefone;
    constructor(idHotel, nome, categoria, endereco, telefone){
        this.IdHotel = idHotel;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva{
    IdReserva;
    IdHotel;    //Assim associa a reserva a um hotel 
    Responsavel;
    DiaEntr;
    DiaSaid;
    constructor(idReserva,idHotel,responsavel,diaEntr,diaSaid){
        this.IdReserva = idReserva;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntr = diaEntr;
        this.DiaSaid = diaSaid;
    }
}

function criandoHotel(){
    let nome = prompt('Nome do hotel');
    let categoria = parseFloat(prompt(`Nota do hotel ${nome}`));   
    let endereco = prompt('Insira o endereço');
    let telefone = prompt('Insira o telefone');
    idHotel++;
    let objHotel = new Hotel(idHotel,nome,categoria,endereco,telefone);
    arrayHotel.push(objHotel); 
    console.log(`ID: ${idHotel}\nHotel: ${nome}\nCategoria: ${categoria}\nEndereço: ${endereco}\nTelefone: ${telefone}\n\n`);   //A cada interação mostra as informações que foram adiconadas
}

function fazendoReserva(){   
    let responsavel = prompt('Insira seu nome');
    let diaEntr = prompt('Insia a data de entrada: formato dd/mm/aaaa');
    let diaSaid = prompt('Insira a data de saida: formato dd/mm/aaaa');
    let escolha = parseInt(prompt('Insira o ID do hotel desejado:'));
    idReserva++;

    //Verificando se o hotel existe
    let hotelSelecionado = arrayHotel.find(hotel => hotel.IdHotel === escolha);

    if(hotelSelecionado){
        let objReserva = new Reserva(idReserva,hotelSelecionado.IdHotel,responsavel,diaEntr,diaSaid);    
        arrayReserva.push(objReserva);
        console.log(`Reserva criada com sucesso no hotel: ${hotelSelecionado.Nome}.`);
        console.log(`ID da Reserva: ${idReserva}\nResponsável: ${responsavel}\nEntrada: ${diaEntr}\nSaída: ${diaSaid}`);
    }else{
        alert('Hotel não encontrado');
    }
}

function mostrarReservas() {
    // Verifica se há hotéis cadastrados
    if (arrayHotel.length === 0) {
        console.log("Nenhum hotel cadastrado.");
        return;
    }

    // Percorre todos os hotéis
    arrayHotel.forEach(hotel => {
        console.log(`\nHotel: ${hotel.Nome} (ID: ${hotel.IdHotel})`);

        // Filtra as reservas que pertencem a este hotel
        let reservasHotel = arrayReserva.filter(reserva => reserva.IdHotel === hotel.IdHotel);

        // Verifica se o hotel tem reservas
        if (reservasHotel.length > 0) {
            console.log(`Reservas: ${reservasHotel.length}`);
            
            // Percorre todas as reservas do hotel e exibe detalhes
            reservasHotel.forEach(reserva => {
                console.log(`- ID Reserva: ${reserva.IdReserva}`);
                console.log(`  Responsável: ${reserva.Responsavel}`);
                console.log(`  Data de Entrada: ${reserva.DiaEntr}`);
                console.log(`  Data de Saída: ${reserva.DiaSaid}`);
                console.log('');
            });
        } else {
            console.log('Nenhuma reserva registrada para este hotel.');
        }
    });
}


criandoHotel();
fazendoReserva();


/*Tenho que criar um jeito de conectar a pessoa ao hotel desejado, ela deve escolher um Hotel através do ID que foi mostrado na tela
a partir desse momento tem que ser pedido qual ID (hotel) a pessoa gostaria de reservar 

IDEIAS: Acredito que talvez a melhor maneira seja criar um objeto utilizando as informaçoes já coletadas de Reserva e Hotel. 
A partir disso eu varia a associação entre as informações*/




/*Para o "Exibir" pegue como parâmetro o id do hotel, a partir dele exiba todas as reservas nele (leia o tópico 3 do slide 1) */
