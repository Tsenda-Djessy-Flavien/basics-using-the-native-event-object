const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  // function qui est executer par Vue lorsque ses dependances changes
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // à chaque fois que la proprièté(variable) name change, cette func name() observateur est réexécutée
    // (newValue, oldValue)
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
  },
  // Pour la sortie de value dynamic qui dependent de plusieurs values d'entrée
  computed: {
    fullName() {
      console.log("running again...");
      if (this.name === "" || this.lastName === "") {
        return '';
      }
      return this.name + " " + this.lastName;
    },
  },
  // utiliser les methodes uniquement pour calculer les values ou pour declencher les events
  methods: {
    outputFullName() {
      // console.log('running again...') // les methodes ne sont pas la meilleur solution
      // pour générer une valeur calculée dynamiquement comme celle-ci.
      if (this.name === "") {
        return;
      }
      return this.name + " " + "Mobile/Web Dev";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
