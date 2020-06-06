<template>
  <div id="market-about2">
    <div class="app-container">
      <div class="about2-flow bd-green">
        <div class="ab2-item dc-pg bd-red">
          <span class="dc-subtitle mb-3  bd-red">Como funciona o clube?</span>
          <p class="dc-description">
              Somos um roteiro completo de estudos de inglês 100% online com acesso a aulas gravadas, 
              exercícios e feedbacks nas correções. Muitas pessoas querem estudar sozinhas, 
              mas não sabem por onde começar. Nós te damos a direção e ensinamos o caminho.            
          </p>
        </div>
        <div class="ab2-item dc-pg bd-red">
          <span class="dc-subtitle mb-3 bd-red">Aprenda inglês sem depender de ninguém</span>
          <p class="dc-description">
            Com essas aulas você é capaz de aprender a língua inglesa e ainda 
            criar um plano de estudos para continuar aprendendo sozinho.          
          </p>
        </div>
        <div class="ab2-item dc-pg bd-red">
          <span class="dc-subtitle mb-3  bd-red">7 dias por nossa conta?</span>
          <p class="dc-description">
            Pare de adiar o começo desse estudo, você pode começar gratuitamente. 
            Se inscreva e agora e conheça nossas aulas e plataforma por 7 dias sem pagar nada.
          </p>
        </div>
        <div class="ab2-item dc-pg bd-red">
          <span class="dc-subtitle mb-3  bd-red">Acesso ao mundo</span>
          <p class="dc-description">
            Torne-se mais criativo, mais confiante e conheça diferentes formas de enxergar 
            o mundo enquanto aprende uma nova língua. Língua é cultura.           
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  
  }
</script>

<style scoped>

  #market-about2{
  margin:0;
  padding:100px 8px;
  width:100%;
  height: 100%;
  background-color: #f3f3f3;
}
 #market-about2 .about2-flow{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto ;
  column-gap: 32px;
  overflow: auto;
}
@media only screen and (max-width: 960px){
  #market-about2 .about2-flow{

    display: inline;
    overflow: auto;

   
  }
 

}

</style>