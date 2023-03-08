<style type="text/css">
.q-calendar-weekly__head-weekdays {
	min-width: 100%;
    font-weight: normal !important;
    font-size: 12px;
    background: #1976D2;
    padding: 10px;
    color: white;
}	

.q-date {
	width: auto;
	min-width: auto;
}
</style>
<!-- <style src="@quasar/quasar-ui-qcalendar/dist/index.css"></style> -->/

<template>
<fragment>

<!-- 	<q-calendar mini-mode v-if="$q.screen.width < 1100 && $q.screen.width > 1000"
	  ref="calendar" class="rounded-borders"
	  v-model="date"
	></q-calendar>	 -->	

	<q-date :locale="myLocale" id="kalender_drawer" today-btn flat bordered
		v-model="date" 
	    ref="date"    
	    @mousewheel.prevent="onWheel"
	    v-touch-swipe.horizontal.mouse="changeDate"					
		mask="YYYY-M-D"
		:events="events" 
		/>
</fragment>
</template>

<script type="text/javascript">
// import { QCalendar } from '@quasar/quasar-ui-qcalendar'

export default {
	// components: {
	// 	QCalendar
	// },
	data () {
    	return {
			date: null,
			events: [ 
				// '2021/01/01', '2021/01/05', '2021/01/06', '2021/01/09', '2021/01/23' 
			],

			myLocale: {
				/* starting with Sunday */
				days: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
				daysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
				months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
				monthsShort: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
				firstDayOfWeek: 1
			}		      
	    }
  	},
	 methods: {
	    calendarNext () {
	      	this.$refs.calendar.next()
	    },

	    calendarPrev () {
	      	this.$refs.calendar.prev()
	    },
    	today() {
    		this.getYMD()
			// this.date = new Date().format('Y-m-d');    		
		},
	    onWheel (e) {
	      	this.changeDate({ direction: e.wheelDelta < 0 ? 'right' : 'left' })
	    },    	
		changeDate ({ direction }) {
			if (this.$refs.date === void 0 || this.$refs.date.view === 'Months') {
				return
			}

			const dir = direction === 'left' ? 1 : -1

			if (this.$refs.date.view === 'Calendar') {
				this.$refs.date.__goToMonth(dir)
			}
			else {
				this.$refs.date.startYear += dir * 20
			}
		},
		getYMD() {
			const today = new Date(); // new Date().toLocaleDateString('id-ID'),
			this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();	
		}	    
	},
	watch: {
		date(val) {
			console.log(val)
			if(!val) this.getYMD()
		}
	},
	created() {
		this.getYMD()
		// this.dispatchVuex('kalender/request_lokasi')
	},  	
};
</script>