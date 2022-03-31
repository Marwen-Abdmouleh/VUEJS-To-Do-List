<template >
  <div class="container" >
<h2 class="text-center mt-5" >Ma Liste</h2>  

<!-- Input -->
<div class="d-flex" >
  <input v-model="task" type="text" placeholder="ecrire une tache" class=""  @keyup.enter="testVide" 
  @keyup="focus($event)" ref="reds">
 <button @click="submitTask()" class="btn btn-warning rounded-0" >Ajouter</button>
</div>


<table class="table table-bordered mt-5 ">
  <thead>
    <tr>
      <th scope="col">Liste des Produits</th>
      
      <th scope="col" class="text-center" >Edit</th>
      <th scope="col" class="text-center"  >Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task,index) in tasks" :key="index" :ref="setTaskRef">
      <th scope="row">{{task.name}}</th>
      <td>
      
        <div class="text-center" @click="editTask(index)" >
          <span class="fa fa-pen"></span>
        </div> 
      </td>
      <td>
         <div @click="deletTask(index)" class="text-center">
          <span class="fa fa-trash"></span>
        </div>
       
      </td>

    </tr>

  </tbody>
</table>
  </div>
</template>

<script>
export default {

  data(){
    return {
      taskRef:[

      ],
    task:'',
      value:'',
      target:'',
      editTask1 : null, //lel update
      //tableau d'objet
      tasks:[
        
     
      ]
    }
  },
  
  methods:{
    setTaskRef(el){ //3la kol star f tr bech nzidoua ref mte7ha
      if(el && !this.taskRef.includes(el)){ //includes : traja3li true wala false
        this.taskRef.push(el)
      }
    },
    focus(e){ //ki nenzel 3al souris
              this.value = e.target.value ; //ken lvalue mta l'imput
              this.target = e.target ; //limut kemla
             console.log(this.value );
             console.log(this.target )
             //classList : bech tajouti wala tna7i class mta css
      if(this.value ==""){ //keni fer8a
        this.target.classList.add('red') // raj7ha rouge
      }else{
        this.target.classList.remove('red');
        this.value=""
      }
    },
//nads test ema ki nenzel entrer
        testVide(e){
    if(e.value ==""){
        e.target.classList.add('red')
      }else{
        e.target.classList.remove('red');
        this.value=""
      }
},
//ref -> $refs (par default fel vueJs)
    submitTask(){
      console.log(this.$refs.reds);
       if( this.$refs.reds.value != "" ){
            this.$refs.reds.classList.remove('red')
            }else{
                
            this.$refs.reds.classList.add('red')
            }
     
      if(this.task.length === 0) return; //ki nenzel ajouter w tebda fer8a maya3ml chy i7otni f nafs lpage
//edit
      if(this.editTask1 === null){

    this.tasks.push({
        name:this.task,
      });
       console.log(this.taskRef)
      }else{
        this.tasks[this.editTask1].name=this.task;
        this.editTask1 = null ; //ba3d mata3ml update traja3 linput fer8a
      }
//he4i bech ki najouti task jdid  l'input yarja3 yefre8
      this.task='';
      
    
    },

    deletTask(index){
      //this.tasks.splice(index,1)
      
      this.taskRef[index].remove();
      //1 hia 9adeh t7eb tafsa5 men ka3ba
      console.log(this.taskRef)
    },

    editTask(index){
      this.task=this.tasks[index].name ; //tjibli formulaire m3ebi
      this.editTask1 = index; //tamlou apdate
      }
  }
  
}
</script>
<style lang="scss" scoped>
  .red{
    border:5px solid red ;
  }
</style>