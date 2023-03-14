<template>
<div>
  <q-tabs v-model="tab"
          inline-label
          indicator-color="primary"
          align="justify"
          active-color="white"
          class="bg-white text-white">
    <q-tab name="1"
           :class="tab == '1' ? 'bg-primary' : 'bg-blue-6'"
           icon="login"
           label="Login" />
    <q-tab name="2"
           :class="tab == '2' ? 'bg-primary' : 'bg-blue-6'"
           icon="o_perm_contact_calendar"
           label="Register" />
  </q-tabs>
  <q-tab-panels swipeable
                infinite
                v-model="tab"
                animated>
    <q-tab-panel class="q-pa-none q-ma-none"
                 name="1">
      <Login prop_style="max-height:100vh" />
    </q-tab-panel>
    <q-tab-panel class="q-pa-none q-ma-none"
                 name="2">
      <Register prop_style="max-height:100vh" />
    </q-tab-panel>
  </q-tab-panels>
</div>

</template>


<script>

import Login from 'src/pages/LoginPage'
import Register from 'src/pages/RegisterPage'



export default {
	computed: {
		// ...mapFields({
		// }),
	},
	data() {
		return {
			tab: '1',
		}
	},
	components: {
		Login,
		Register,
	},
};
</script>
