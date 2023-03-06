<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-xs-11 text-left">
    <q-timeline color="light-blue">
      <!-- <q-timeline-entry heading body="Timeline heading" /> -->
      <q-timeline-entry heading body="November, 2017" />

      <q-timeline-entry outlined
        title="Event Title"
        subtitle="05 Mar - 06 Mar"
        icon="event"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="event"
        :body="body"
      />

      <q-timeline-entry heading body="November, 2017" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        icon="event"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        icon="event"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="event"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        icon="event"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        icon="event"
        :body="body"
      />
    </q-timeline>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
  }
}
</script>
