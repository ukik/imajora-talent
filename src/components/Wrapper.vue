<template>
<!--   <q-layout view="lHr LpR lFr">
    <q-header :style="!is_mobile_size ? 'margin-left:250px;' : ''" bordered unelevated class="bg-white q-pr-sm" height-hint="98">
      <slot name="navbar"></slot>
    </q-header>

    <q-page-container>
      <q-page style="height: calc(10vh) " dense class="q-pa-none q-ma-none">
        <slot name="body"></slot>
      </q-page>
    </q-page-container>

  </q-layout>
 -->

<slot name="body"></slot>

</template>