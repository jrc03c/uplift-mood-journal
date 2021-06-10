$(window).on("startMoodJournal", () => {
  const app = new Vue({
    el: "#mood-journal",

    template: `
      <div>
        <p class="text-center">
          <img :src="options[mood].image">
        </p>

        <form @submit.prevent="submit">
          <p>
            <input type="range" min="0" max="4" step="1" v-model="mood">
          </p>

          <div class="custom-row">
            <div class="custom-row-item" v-for="option in options">
              <img :src="option.image" class="custom-clickable-img" @click="mood = option.value">
            </div>
          </div>

          <input class="btn btn-default btn-lg btn-block" type="submit" :value="options[mood].text.toUpperCase() + ' →'">
        </form>
      </div>
    `,

    data: {
      mood: 2,

      options: [
        { value: 0, text: "not so good", image: "img/mood0.png" },
        { value: 1, text: "so-so", image: "img/mood1.png" },
        { value: 2, text: "okay", image: "img/mood2.png" },
        { value: 3, text: "pretty good", image: "img/mood3.png" },
        { value: 4, text: "wonderful", image: "img/mood4.png" },
      ],
    },

    methods: {
      submit: function () {
        const self = this
        $(window).trigger("endMoodJournal", self.options[self.mood])
      },
    },
  })
})
