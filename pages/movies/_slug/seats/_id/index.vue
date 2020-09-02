<template>
  <div class="d-flex">
  <div class="cinema">
    <div class="cinema-hall">
      <div class="cinema-screen">
        Екран
      </div>
      <div class="cinema-seats">
        <div v-for="(row, rowIndex) in hallSeats" class="cinema-row">
          <div class="cinema-row-index cinema-row-index--start"> {{ rowIndex + 1 }}</div>
          <div @click="handleSeatClick(seat, rowIndex + 1, seatIndex + 1, row.rowId)"
               :key="seat.seatId"
               :class="{ [seat.seatType]: seat.seatType, free: seat.isFree,  taken: !seat.isFree, selected: seat.selected } "
               v-for="(seat, seatIndex) in row.rowSeats" class="cinema-seat">

            <div  v-if="seat.isFree && seat.seatType === 'good' || seat.seatType === 'lux'" class="seat-tooltip"
                 :class="{[seat.seatType]: seat.seatType}">
              <div class="seat-tooltip-left">
                <p class="seat-tooltip-row">{{ rowIndex + 1 }} ряд</p>
                <h6>{{ seatIndex + 1 }}</h6>
                <p class="seat-tooltip-text">
                  Місце
                </p>
              </div>
              <div class="seat-tooltip-right">
                <h6>{{ seat.seatType }}</h6>
                <p>
                  <b>{{ seat.price }} <small>грн</small></b>
                </p>
              </div>
            </div>
            <!--                    {{ seat }}-->
          </div>
          <div class="cinema-row-index cinema-row-index--end"> {{ rowIndex + 1 }}</div>
        </div>
      </div>
      <!--              {{ hallSeats }}-->
    </div>
  </div>
  <div class="cinema-types">
    <h6>Типи місць</h6>
    <p>Київ, ТРЦ Аладдин</p>

    <ul class="cinema-types-list">
      <li class="cinema-types-list__item">
                <span class="cinema-types-list__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g transform="translate(-1001 -438)"><g transform="translate(1001 438)"><path
                      class="a" d="M0,0H24V24H0Z"/></g><path class="b"
                                                             d="M-5185-6738h-4a6.006,6.006,0,0,1-6-6v-10h16v10A6.007,6.007,0,0,1-5185-6738Zm-8-14v8a4,4,0,0,0,4,4h4a4,4,0,0,0,4-4v-8Z"
                                                             transform="translate(6200 7196)"/></g></svg>
                </span>
        <div class="cinema-types-list-about">
          <h5>Стандартне місце <span>GOOD</span></h5>
          <p>
            <b>80</b>
            <small>грн</small>
          </p>
        </div>
      </li>
      <li class="cinema-types-list__item">
                <span class="cinema-types-list__icon lux">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g
                   transform="translate(-1001 -438)"><g transform="translate(1001 438)"><path class="a"
                                                                                              d="M0,0H24V24H0Z"/></g><path
                   class="b"
                   d="M-3199-6837a6.006,6.006,0,0,1-6-6v-6h2.5v-4h11v4h2.5v6a6.007,6.007,0,0,1-6,6Zm-4.5-6a4.5,4.5,0,0,0,4.5,4.5h4a4.506,4.506,0,0,0,4.5-4.5v-4.5h-1v4a4,4,0,0,1-4,4h-3a4,4,0,0,1-4-4v-4h-1Zm3-.5a2,2,0,0,0,2,2h3a2,2,0,0,0,2-2v-7.5h-7Z"
                   transform="translate(4210 7295)"/></g></svg>
                </span>
        <div class="cinema-types-list-about">
          <h5>Наші <b>LUX</b>-місця</h5>
          <p>
            <b>170</b>
            <small>грн</small>
          </p>
        </div>
      </li>
      <li class="cinema-types-list__item">
        <div class="cinema-helpers">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="translate(-1001 -438)">
                <g transform="translate(1001 438)">
                  <path class="a" d="M0,0H24V24H0Z"/>
                </g>
                <path class="b"
                      d="M-5185-6738h-4a6.006,6.006,0,0,1-6-6v-10h16v10A6.007,6.007,0,0,1-5185-6738Zm-8-14v8a4,4,0,0,0,4,4h4a4,4,0,0,0,4-4v-8Z"
                      transform="translate(6200 7196)"/>
              </g>
            </svg>
            <span>вільно</span>
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="translate(-1001 -438)">
                <g transform="translate(1001 438)">
                  <path class="a" d="M0,0H24V24H0Z"/>
                </g>
                <path class="b"
                      d="M-3216-6675h-4a5.96,5.96,0,0,1-4.243-1.757A5.96,5.96,0,0,1-3226-6681v-10h16v10a5.96,5.96,0,0,1-1.757,4.242A5.959,5.959,0,0,1-3216-6675Z"
                      transform="translate(4231 7133.001)"/>
              </g>
            </svg>
            <span>зайнято</span>
          </p>
        </div>
      </li>

    </ul>
  </div>
  </div>
</template>

<script>


export default {
  name: "index",
  layout: 'order',

  beforeMount() {
    this.$store.commit('setActiveBreadcrumb', 'seats')
  },
  methods: {
    goodOrLux(seat) {
      return seat.seatType === 'good' || seat.seatType === 'lux';
    },
    notSelectedAndFree(seat) {
      return !seat.selected && seat.isFree;
    },
    isValid(seat) {
      return this.notSelectedAndFree(seat) && this.goodOrLux(seat);
    },

    handleSeatClick(seat, seatRow, seatPlace, rowId) {
      if (this.isValid(seat)) {
        const preparedSeat = {
          ...seat,
          seatRow,
          seatPlace,
          rowId,
          hallId: 3124801241,
          movieDate: '17/07/2020',
          movieTime: '18:04'
        }

        console.log(preparedSeat)

        this.$store.commit('cart/addItem', preparedSeat);
        this.$store.commit('cart/calculateTotal');

      }

    },

  },

  computed: {
    hallSeats() {
      return this.$store.getters['hall/seats'];
    },
  },
}
</script>


