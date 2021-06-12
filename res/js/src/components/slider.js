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
  },

  template: /*html*/ `
    <div>
      <div id="answer_f12f6961b808951ca727e2f03d8de420a3defc2b" class="slider-answer-widget">
        <div class="slider slider-horizontal" id="" style="width: 752px;">
          <div class="slider-track">
            <div class="slider-track-low" style="left: 0px; width: 0%;"></div>
            <div class="slider-selection" style="left: 0%; width: 38%;"></div>
            <div class="slider-track-high" style="right: 0px; width: 62%;"></div>
          </div>

          <div class="tooltip tooltip-main top in" role="presentation" style="left: 38%;">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">38</div>
          </div>

          <div class="tooltip tooltip-min top" role="presentation" style="display: none;">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner"></div>
          </div>

          <div class="tooltip tooltip-max top" role="presentation" style="display: none;">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner"></div>
          </div>

          <div class="slider-handle min-slider-handle round" role="slider" aria-valuemin="0" aria-valuemax="100" style="left: 38%;" aria-valuenow="38" tabindex="0">
          </div>

          <div class="slider-handle max-slider-handle round hide" role="slider" aria-valuemin="0" aria-valuemax="100" style="left: 0%;" aria-valuenow="0" tabindex="0">
          </div>
        </div>

        <input style="display: none;" data-value="38" value="38">
      </div>
    </div>
  `,
})
