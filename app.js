const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    outputFullName() {
      // console.log('running again...') // les methodes ne sont pas la meilleur solution 
      // pour générer une valeur calculée dynamiquement comme celle-ci.
      if (this.name === "") {
        return;
      }
      return this.name + ' ' + 'Mobile/Web Dev';
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
    },
  },
});

app.mount("#events");
