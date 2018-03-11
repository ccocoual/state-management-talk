<template>
  <div class="ComponentPrinciple">
    <div class="component">
      <div class="properties">properties</div>
      <div class="element">Element</div>
      <div class="event">event</div>
    </div>
    <div class="state-container">
      <div class="state">
        <div class="circle-arrow">
          <svg id="1f8d6b88-f3c4-4bae-ae46-65d2492a5f65" data-name="Circle arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.5 42.31"><title>circle-arrow</title><path d="M22.5-8.63" transform="translate(-2.25 -0.44)" style="stroke:#000;stroke-miterlimit:10;stroke-width:7px"/><path d="M22.5,4" transform="translate(-2.25 -0.44)" style="stroke:#000;stroke-miterlimit:10;stroke-width:5px"/><polygon points="20.28 2.13 18.93 3.6 18.93 0.65 20.28 2.13" style="stroke-miterlimit:10;stroke-width:0.5px"/><path d="M21,2.58a20,20,0,1,0,3,0" transform="translate(-2.25 -0.44)" style="fill:none;stroke-miterlimit:10;stroke-width:0.5px"/></svg>
        </div>
        <span class="text">state</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'ComponentPrinciple',
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@state-color: #bf9000;
.ComponentPrinciple {
    font-family: 'Courier New', Courier, monospace;
    height: 100vh;
    .component {
        display: flex;
        justify-content: space-around;
        .properties {
            color: #6fa8dc;
        }
        .element {
            color: #e06666;
        }
        .event {
            color: #6aa84f;
        }
    }
    .state-container {
        height: 100%;
        .state {
            color: @state-color;
            position: relative;
            display: flex;
            justify-content: center;

            .circle-arrow {
                position: absolute;
                stroke: @state-color;
                fill: @state-color;
                width: 15%;
                -webkit-animation: rotation 5s infinite linear;

                @-webkit-keyframes rotation {
                    from {
                        -webkit-transform: rotate(0deg);
                    }
                    to {
                        -webkit-transform: rotate(359deg);
                    }
                }
            }
            .text {
                display: flex;
                align-self: center;
                font-size: 85%;
            }
        }
    }
}
</style>
