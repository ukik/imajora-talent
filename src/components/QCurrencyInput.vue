<template>
  <q-input
    outlined
    ref="input"
    v-currency="options"
    :value="formattedValue"
    @input="onInput"
    @onChange="onChange"
  />
</template>

<script>
import { CurrencyDirective, setValue, getValue } from 'vue-currency-input'

export default {
  name: 'QCurrencyInput',
  props: {
    value: {
      type: Number,
      default: null
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  directives: {
    currency: CurrencyDirective
  },
  data() {
    return {
      formattedValue: null
    }
  },
  watch: {
    value(value) {
      this.setValue(value)
    }
  },
  mounted() {
    this.setValue(this.value)
  },
  methods: {
    setValue(value) {
      setValue(this.$refs.input, value)
    },
    onInput(value) {
      this.$emit('input', getValue(this.$refs.input))
      this.formattedValue = value
    },
    onChange(value) {
      this.$emit('change', getValue(this.$refs.input))
      this.formattedValue = value
    }
  }
}
</script>
