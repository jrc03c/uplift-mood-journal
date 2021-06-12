const Vue = require("vue/dist/vue.min.js")
const SliderComponent = require("./components/slider.js")

$(window).on("startMoodJournal", () => {
  const app = new Vue({
    el: "#mood-journal",

    template: /*html*/ `
      <div>
        <p class="text-center big-image-container" v-if="chosenOption">
          <img :src="chosenOption.image" class="big-image">
        </p>

        <form @submit.prevent="submit">
          <p class="slider-container">
            <slider></slider>
          </p>

          <div class="custom-row">
            <div class="custom-row-item" v-for="option in options">
              <img :src="option.image" class="custom-clickable-img" @click="mood = (option.min + option.max) / 2">
            </div>
          </div>

          <div class="button-container">
            <input
              class="btn btn-default btn-lg btn-block"
              type="submit"
              :value="chosenOption.text.toUpperCase() + ' →'"
              v-if="chosenOption"
            />
          </div>
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
          image: "res/img/mood0.png",
        },
        {
          value: 1,
          min: 15,
          max: 37,
          text: "so-so",
          image: "res/img/mood1.png",
        },
        {
          value: 2,
          min: 38,
          max: 62,
          text: "okay",
          image: "res/img/mood2.png",
        },
        {
          value: 3,
          min: 63,
          max: 85,
          text: "pretty good",
          image: "res/img/mood3.png",
        },
        {
          value: 4,
          min: 86,
          max: 100,
          text: "wonderful",
          image: "res/img/mood4.png",
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
