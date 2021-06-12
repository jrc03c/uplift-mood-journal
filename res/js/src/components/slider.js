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
          <div class="slider-selection" style="left: 0%; width: 38%;"></div>
          <div class="slider-track-high" style="right: 0px; width: 62%;"></div>
        </div>

        <div class="tooltip tooltip-main top in" role="presentation" style="left: 38%;">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-inner">38</div>
        </div>

        <div class="slider-handle min-slider-handle round" role="slider" aria-valuemin="0" aria-valuemax="100" style="left: 38%;" aria-valuenow="38" tabindex="0">
        </div>

        <div class="slider-handle max-slider-handle round hide" role="slider" aria-valuemin="0" aria-valuemax="100" style="left: 0%;" aria-valuenow="0" tabindex="0">
        </div>
      </div>
    </div>
  `,
})
