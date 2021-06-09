$(window).on("startMoodJournal", () => {
  const app = new Vue({
    el: "#mood-journal",

    template: `
      <div>
        <form @submit.prevent="submit">
          <input type="range" min="-3" max="3" step="1" v-model="mood">
          <input type="submit" value="Submit">
        </form>
      </div>
    `,

    data: {
      mood: 0,
    },

    methods: {
      submit: function () {
        const self = this
        const mood = parseInt(self.mood)
        console.log("Your mood is:", mood)
        $(window).trigger("endMoodJournal")
      },
    },
  })
})
