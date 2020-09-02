<template>
  <div class="order-confirm">
    <countdown :time="getTime(15)" :transform="transform">
      <template slot-scope="props">
        <div class="time">
          <div class="time-ticker">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path class="a" d="M0,0H32V32H0Z"/>
              <g transform="translate(2.741 0.685)">
                <path class="b"
                      d="M15.246,2A13.129,13.129,0,0,0,2,15.009,13.129,13.129,0,0,0,15.246,28.019,13.144,13.144,0,0,0,28.518,15.009,13.144,13.144,0,0,0,15.246,2Zm.013,23.417A10.506,10.506,0,0,1,4.652,15.009,10.506,10.506,0,0,1,15.259,4.6,10.506,10.506,0,0,1,25.866,15.009,10.506,10.506,0,0,1,15.259,25.417Z"
                      transform="translate(-2 1.925)"/>
                <path class="b" d="M13.056,7H11v8.223l7.2,4.317,1.028-1.686L13.056,14.2Z"
                      transform="translate(0.761 2.988)"/>
                <path class="b" d="M13.056,7H11v4.188h2.056Z" transform="translate(0.901 -6.315)"/>
                <path class="b" d="M2.056,0H0V3.979H2.056Z" transform="translate(22.353 3.86) rotate(30)"/>
                <path class="b" d="M17.167,7H11V9.056h6.167Z" transform="translate(-1.144 -7)"/>
              </g>
            </svg>
            <h6>{{ props.minutes }}:{{ props.seconds }}</h6>
          </div>
          <div class="time-text">
            Ваші квитки зарезервовані. За цей час ніхто не зможе їх викупити
          </div>

        </div>
      </template>
    </countdown>
  </div>
</template>

<script>
export default {
  name: "",
  layout: 'order',
  beforeMount() {
    this.$store.commit('setActiveBreadcrumb', 'confirm');
  },

  methods: {

    getTime(minutes) {
      const seconds_per_minute = 60;
      const milliseconds_per_minute = 1000;
      return minutes * seconds_per_minute * milliseconds_per_minute;
    },

    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        const digits = value < 10 ? `0${value}` : value;
        const word = value < 2 ? key.replace(/s$/, '') : key;
        props[key] = `${digits}`;
      });

      return props;
    },
  },
}
</script>
