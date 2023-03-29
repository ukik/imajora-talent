<template>
    <!-- <q-item-label class="col-12 q-pa-sm text-dark q-mt-sm" header>Tags</q-item-label> -->

    <q-select class="full-width q-px-sm" :placeholder="!model ? 'Tambah tags' : ''"
      v-model="model" clearable
      use-input
      use-chips
      multiple
      input-debounce="0"
      @new-value="createValue"
      :options="filterOptions"
      @filter="filterFn"
      @update:model-value="$emit('onBubbleEvent', model)"
      hint="Tekan ENTER untuk menambahkan"
      new-value-mode="add"
      @keyup.enter="doAddInputValue"
    >
      <template v-slot:selected-item="scope">
        <q-chip
          removable
          @remove="scope.removeAtIndex(scope.index)"
          :tabindex="scope.tabindex"
          color="teal"
          text-color="white"
          class="q-ma-xs"
        >
          {{ scope.opt }}
        </q-chip>
      </template>
    </q-select>
</template>

<script>
import { ref } from 'vue'

// const stringOptions = [
//   // 'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
// ]

export default {
  setup () {
    const filterOptions = ref([])
    const stringOptions = ref([])

    return {
      model: ref(null),
      filterOptions,
      stringOptions,

      createValue (val, done) {
        let temp = val.replace(/\s\s+/g, ' ').trim()
        if (temp.length > 0) {
          console.log(temp, temp.replace(/\s/g, '_'))
          if (!stringOptions.value.includes(temp)) {
            done(temp.replace(/\s/g, '_').toLowerCase(), 'add-unique')
          }
        }
      },

      filterFn (val, update) {
        update(() => {
          if (val === '') {
            filterOptions.value = stringOptions.value
          }
          else {
            const needle = val.toLowerCase()
            filterOptions.value = stringOptions.value.filter(
              v => v.toLowerCase().indexOf(needle) > -1
            )
          }
        })
      }
    }
  },
  props: {
    tags: {
      default: () => ([])
    }
  },
  emits: ['onBubbleEvent'],
  mounted() {
    this.model = this.tags
    this.filterOptions = this.tags
    this.stringOptions = this.tags
  },
  methods: {
    doAddInputValue(inputValue) {
      if (this.$q.platform.is.ios) return

      const input = this.$refs.qSelect.inputValue
      this.$refs.qSelect.add(input, 'add-unique')
    }
  }
}
</script>
