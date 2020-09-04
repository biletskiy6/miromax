<template>
  <label>
    <input type="checkbox" @change="$emit('input', $event.target.checked)" />
    <span class="round-decor"></span>
    <i class="material-icons">done</i>
    <span class="checkbox-view"></span>

  </label>
</template>

<script>
export default {
  name: "c-checkbox"
}
</script>

<style lang="scss" scoped>
label {
  position: relative;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    .round-decor {
      transform: scale(1);
      transition: all .35s ease;
    }
    .checkbox-view {
      border-color: #fff;
    }
  }

  i {
    position: absolute;
    font-size: 16px;
    opacity: 0;
    font-weight: 700;
    visibility: hidden;
    color: #fff;
    transition: opacity .25s ease;
  }

}

.round-decor {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #CE58E7;
  border-radius: 50%;
  transform: scale(0);
  position: absolute;
  z-index: -1;
  transition: all .35s ease;
}

.checkbox-view {
  width: 20px;
  height: 20px;
  border: 2px solid #CE58E7;
  display: inline-block;
  border-radius: 6px;
  transition: all linear 0.3s;
  //&::before {
  //  position: absolute;
  //  width: 24px;
  //  height: 24px;
  //  background: #CE58E7;
  //  border-radius: 50%;
  //  top: 50%;
  //  transform: translateY(-50%);
  //  left: 0;
  //  content: '';
  //  z-index: -1;
  //}

}
input {
  display: none;
  &:checked ~ span {
    //background: #ccc;
    &:after {
      //visibility: visible;
    }
  }
  &:checked ~ .round-decor {
    transform: scale(1);
  }
  &:checked ~ .checkbox-view {
    border-color: #fff;
  }
  &:checked ~ i {
    opacity: 1;
    visibility: visible;
    transition: opacity .25s ease;
  }
}
</style>
