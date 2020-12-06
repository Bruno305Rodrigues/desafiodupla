import { Card } from './card';
import { Login } from './login';
import { Usuarios } from './user';
import { ListaCarros } from './listaCarros';
//import { Carro} from './carro';
const pos = [];


const logado = [];

class App {
    constructor() {

        this.ListaCarros = ListaCarros;
        this.card = new Card();
        this.login = new Login();
        this.botaoEnviar = document.getElementById("botao");
        this.clicarIcone = document.getElementById("menu");
        this.logout = document.getElementById("logout");
        this.registrarEventos();
        this.dadosDeUsuarios();
        this.armazenarLista();
        this.listarCarros();
        this.registrarBotoes();
        this.encontarClick();




    }

    listarCarros() {
        const novo = document.getElementById("listaDeCarros");
        let cards = "";
        this.ListaCarros.forEach(carro => {
            const c = new Card(carro);
            cards += c.resumido();


        })
        novo.innerHTML = cards;
    }




    armazenarLista() {
        // console.log(ListaCarros);

    }

    dadosDeUsuarios() {
        Usuarios.forEach(f => {
            // console.log(Usuarios);

        });

    }



    registrarEventos() {
        this.botaoEnviar.onclick = () => {
            this.validarUsuario();
        }

        this.clicarIcone.onclick = () => {
            this.icone();
        }

        this.logout.onclick = () => {
            this.sair();
        }

      










    }




    validarUsuario() {
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        let formulario = document.getElementById("formulario");
        let menu = document.getElementById("menu");
        let conteudo = document.getElementById("conteudo");

        for (var user of Usuarios) {

            if (email === user.email && senha === user.senha) {
                formulario.style.display = "none";
                menu.style.display = "flex";
                conteudo.style.display = "flex";


                logado.push({
                    email: email,
                    senha: senha,

                });

                localStorage.setItem("salvo", JSON.stringify(logado));

            }
        }

    }

    icone() {
        let icone = document.getElementById("logout");
        //logout.style.display = "flex";
        if (logout.style.display == "none") {
            logout.style.display = 'flex';
        } else {
            logout.style.display = 'none';
        }
    }


    sair() {
        localStorage.removeItem('salvo', JSON.stringify(logado));
        formulario.style.display = "flex";
        menu.style.display = "none";
        logout.style.display = "none";
        conteudo.style.display = "none";
        document.getElementById("cards").style.display = "none";

        email.value = "";
        senha.value = "";


    }
    
    encontarClick() {

        let query = document.querySelectorAll(".lista ");
        
        

              
          

        
          
      
      
      
      
      
      
        /* for (let i = 0; i < query.length; i++){
           
            
          query[i].addEventListener("click", function(e){
                    
             })
             
             
            
         };
         return console.log("vai merda", pos.push({
            id: 6,
            modelo: "uno"

         })
         )
        
        
*/
       
        



       

         let myHTML = 1;
         // const numbersList = this.ListaCarros;
          
          query.forEach((number, index, array) => {
            query[index].addEventListener("click", function (e) {
                for (let carro of ListaCarros){
                    
                        //console.log("asdsadsada",carro.id, query[carro.id])
                        myHTML = 3;
                        
                    
                   
                }
                
                
                
                alert('O elemento clicado foi o ' + this.innerText);
                
            })
            myHTML = 3;


              
                  
              
              //myHTML = index ;
          });
         //return console.log( "oi",myHTML += '</ul>');
        return myHTML;
  
      



        
        }
  
        




       

    

    registrarBotoes() {




        document.querySelectorAll(".lista").forEach((el) => {
            el.onclick = (event) => this.editar(event);
        }
        )






    }

    encontrar() {



        const novaLista = this.ListaCarros.find(carro =>
            carro.id == this.encontarClick());

        return novaLista;



    }



    editar(event) {
        //const cartaoEditado = this.encontarClick();
        // const idEditado = cartaoEditado;
        //const idEditado = this.encontarClick();

        // const cartaoEditado = event.path[3];
        // const idEditado = cartaoEditado.dataset.id;

        const recado = this.encontrar();
        let cartoes = "";



        // const recado = idEditado;
        //const recado = this.encontarClick();
        const car = new Card(recado);
        cartoes = car.pegaCard();
        console.log("encontrar", this.encontrar());

        document.getElementById("cards").style.display = "flex";
        document.getElementById("conteudo").style.display = "none";
        document.getElementById("cards").innerHTML = cartoes;

        console.log(" oque vem no recado", recado);
        //console.log("id Editado" , idEditado);
        console.log("cartao impresso", cartoes);




        //document.getElementById("tituloEditado").value = recado.titulo;
        //document.getElementById("mensagemEditada").value = recado.recado;

        //document.getElementById("codigo").value = recado.id;
    }

    mostrarGol() {
        document.getElementById("cards").style.display = "flex";
        document.getElementById("conteudo").style.display = "none";
        this.mostrarCard();



    }

    mostrarCard() {
        const novoCard = document.getElementById("cards");
        let cartoes = "";


        ListaCarros.filter(carro => {
            const car = new Card(carro);
            cartoes += car.pegaCard();
        })
        return cartoes;
        //console.log(cartoes);






    }



}




new App();
