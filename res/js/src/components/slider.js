const Vue = require("vue/dist/vue.min.js")

module.exports = Vue.component("slider", {
  props: {
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: 100,
    },

    step: {
      type: Number,
      default: 1,
    },

    "start-value": {
      type: Number,
      default: 50,
    },
  },

  template: /*html*/ `
    <div class="slider-answer-widget">
      <div class="slider slider-horizontal">
        <div class="slider-track">
          <div class="slider-track-low" style="left: 0px; width: 0%;"></div>
          <div class="slider-selection" :style="sliderSelectionStyle"></div>
          <div class="slider-track-high" :style="sliderTrackHighStyle"></div>
        </div>

        <div class="tooltip tooltip-main top in" role="presentation" :style="tooltipAndHandleStyle">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-inner">{{ value }}</div>
        </div>

        <div class="slider-handle min-slider-handle round" role="slider" :aria-valuemin="min" :aria-valuemax="max" :style="tooltipAndHandleStyle" :aria-valuenow="value" tabindex="0">
        </div>

        <div class="slider-handle max-slider-handle round hide" role="slider" :aria-valuemin="min" :aria-valuemax="max" style="tooltipAndHandleStyle" :aria-valuenow="value" tabindex="0">
        </div>
      </div>
    </div>
  `,

  data: function () {
    return {
      value: 50,
    }
  },

  computed: {
    percent: function () {
      const self = this
      return (100 * (self.value - self.min)) / (self.max - self.min)
    },

    sliderSelectionStyle: function () {
      const self = this
      return `left: 0%; width: ${self.percent}%;`
    },

    sliderTrackHighStyle: function () {
      const self = this
      return `right: 0px; width: ${100 - self.percent}%;`
    },

    tooltipAndHandleStyle: function () {
      const self = this
      return `left: ${self.percent}%;`
    },
  },

  mounted: function () {
    const self = this
    self.value = self.startValue
  },

  beforeDestroy: function () {},
})
