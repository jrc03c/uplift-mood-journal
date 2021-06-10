$(window).on("startMoodJournal", () => {
  const app = new Vue({
    el: "#mood-journal",

    template: `
      <div>
        <p class="text-center" v-if="chosenOption">
          <img :src="chosenOption.image" class="big-image">
        </p>

        <form @submit.prevent="submit">
          <p>
            <input type="range" min="0" max="100" step="1" v-model="mood">
          </p>

          <div class="custom-row">
            <div class="custom-row-item" v-for="option in options">
              <img :src="option.image" class="custom-clickable-img" @click="mood = (option.min + option.max) / 2">
            </div>
          </div>

          <input
            class="btn btn-default btn-lg btn-block"
            type="submit"
            :value="chosenOption.text.toUpperCase() + ' →'"
            v-if="chosenOption"
          />
        </form>
      </div>
    `,

    data: {
      mood: 50,
      chosenOption: null,

      options: [
        {
          value: 0,
          min: 0,
          max: 14,
          text: "not so good",
          image: "img/mood0.png",
        },
        {
          value: 1,
          min: 15,
          max: 37,
          text: "so-so",
          image: "img/mood1.png",
        },
        {
          value: 2,
          min: 38,
          max: 62,
          text: "okay",
          image: "img/mood2.png",
        },
        {
          value: 3,
          min: 63,
          max: 85,
          text: "pretty good",
          image: "img/mood3.png",
        },
        {
          value: 4,
          min: 86,
          max: 100,
          text: "wonderful",
          image: "img/mood4.png",
        },
      ],
    },

    watch: {
      mood: function () {
        const self = this

        self.options.forEach(option => {
          if (self.mood >= option.min && self.mood <= option.max) {
            Vue.set(self, "chosenOption", option)
          }
        })
      },
    },

    methods: {
      submit: function () {
        const self = this

        $(window).trigger("endMoodJournal", {
          ...self.chosenOption,
          mood: self.mood,
        })
      },
    },

    mounted: function () {
      const self = this
      Vue.set(self, "chosenOption", self.options[2])
    },
  })
})
