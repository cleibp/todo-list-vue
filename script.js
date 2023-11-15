new Vue({
  el: "#app",
  data: {
    tasks: [],
    newTask: "",
  },
  methods: {
    addTask: function () {
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          name: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    removeTask: function (index) {
      this.tasks.splice(index, 1);
    },
    toggleCompleted: function (index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
  },
  mounted: function () {
    // Inicializa com algumas tarefas de exemplo
    this.tasks.push({ name: "Fazer compras", completed: false });
    this.tasks.push({ name: "Lavar o carro", completed: true });
  },
});
