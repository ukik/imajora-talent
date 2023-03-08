<template>
<div class="row q-pa-none q-px-sm text-grey">
    <q-item-section>
        <span class="vertical-middle" style="font-size:12px;">{{ prop_tanggal }}</span>
    </q-item-section>
    <div class="row q-pa-none">
        <div class="q-mr-sm">
            <q-btn flat color="grey" size="sm" round icon="chat_bubble_outline" />
            <span style="font-size:12px;">{{ computed_total('komentar').total <= 0 ? 'Komentar' : computed_total('komentar').total }}</span>
        </div>
        <div class="q-mr-sm">
            <q-btn flat color="grey" size="sm" round icon="favorite_border" />
            <span style="font-size:12px;">{{ computed_total('suka').total }}</span>
        </div>
        <q-btn flat color="grey" size="sm" round icon="share" />
    </div>
</div>
</template>

<script type="text/javascript">
    
export default {
    props: {
        props_total: {
            default: () => ([
                {
                  "id": null,
                  "id_user": null,
                  "label": null,
                  "total": null,
                  "created_at": null,
                  "updated_at": null
                },
            ])
        },
        prop_tanggal: {
            default: ""
        }
    },
    computed: {
        computed_total() {
            return function(val) {
                for (var i = this.props_total.length - 1; i >= 0; i--) {
                    if(val == this.props_total[i].label) {
                        return this.props_total[i]
                    }
                    return this.props_total[0]
                }
            }
        }
    }
};

</script>