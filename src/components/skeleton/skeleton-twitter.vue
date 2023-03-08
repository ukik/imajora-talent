<template>
<q-page class="flex flex-center">
  <div class="full-width text-center">
    <!-- <q-spinner-dots size="lg" color="primary" /> -->
    <div v-for="i in 2" :key="i">
        <q-item>
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" width="80%" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <!-- <q-item-section avatar /> -->
          <q-item-section>
            <q-skeleton height="150px" class="q-mb-sm" />
          </q-item-section>
        </q-item>
    </div>
  </div>
</q-page>
</template>