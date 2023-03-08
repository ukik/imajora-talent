<template>
	<div class="q-pa-sm" v-if="get_doa_detail">
		<div class="text-subtitle1 text-teal">{{ get_doa_detail.judul }}</div>
        
		<div class="text-right q-py-md q-px-xs arabic_6" style="font-size:32px; line-height: 200%;">
			{{ get_doa_detail.doa_ar }}
		</div>

		<!-- 
		<div class="text-right q-py-md arabic_1" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_2" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_3" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_4" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_5" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_6" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_7" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_8" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_9" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_10" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_11" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_12" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_13" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>

		<div class="text-right q-py-md arabic_14" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_15" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_16" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_17" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_18" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div>
		<div class="text-right q-py-md arabic_19" style="font-size:32px;">
			{{ get_doa_detail.doa_ar }}
		</div> -->


		<div class="q-mt-md text-grey-8">
			{{ get_doa_detail.doa_id }}
		</div>
		<div class="q-mt-md">
			{{ get_doa_detail.terjemah }}
		</div>		
		<div class="q-mt-md text-blue-6">
			{{ get_doa_detail.sumber }}
		</div>		
	</div>
</template>
