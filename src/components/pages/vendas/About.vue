<template>
  <div id="market-about" class="">
  
   <div class="app-container">
      <div class="about-flow">
      
          <div class="dc-pg bd-red">
            <span class="dc-title  bd-red">O que vamos te proporcionar? </span>
            <p class="dc-description">
              O clube de inglês com Mathews Lins é um roteiro para quem quer alcançar a fluência e fazer parte dos benefícios que somente 5% dos brasileiros têm. O clube te dá base para aprender e praticar de forma consolidada com aulas e exercícios semanais. 
            </p>
          </div>
          <div class="about-right-fraction bd-red">
            <img src="../../../assets/online-classroom.svg" alt="">
          </div>

          <div class="dc-pg bd-red">
            <span class="dc-text">
              5% dos brasileiros falam inglês fluentemente. Quais benefícios exclusivos essas pessoas tem? 
            </span>
              
            <ul class=" dc-list">
                <li> Menos concorrentes com a mesma competência a uma vaga.</li>
                <li> Crescimento profissional </li>
                <li> Menos concorrentes com a mesma competência a uma vaga.</li>
                <li> Elevação do nível de cultura</li>
                <li> Possibilidade de ser entendido em qualquer lugar do mundo</li>
                <li> Mais autoconfiança </li>
                <li> Maior desenvolvimento do cérebro  </li>
              </ul>
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
  #market-about{
    margin:0;
    padding:96px 8px;
    width:100%;
    height: 100%;
  
  }
  .about-flow{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-template-rows: auto auto auto;
    column-gap: 22px;
    row-gap: 16px;
  }
  .about-right-fraction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    grid-row: span 3;
    
  }

@media only screen and (max-width:1200px){
  .about-flow{
     grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
}
.about-right-fraction img{ width: 100%;}
@media only screen and (max-width:960px){
  .about-flow{
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
  .about-right-fraction{
    height: fit-content;
  }
  .about-right-fraction img{ width: 320px}
}
@media only screen and (max-width:756px){

  .about-right-fraction img{ width: 82%}
}




</style>