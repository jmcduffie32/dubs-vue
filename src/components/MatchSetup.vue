<script setup lang="ts">
import { useMatch } from '@/stores/match'

const store = useMatch()
</script>

<template>
  <h1 class="text-xl font-bold">Setup your event below</h1>
  <form class="flex flex-col w-1/2">
    <label class="my-2 font-bold flex justify-between">
      Event Id
      <input
        class="border rounded px-4"
        type="text"
        name="eventId"
        id="eventId"
        v-model="store.eventId"
      />
    </label>
    <label class="my-2 font-bold flex justify-between">
      CTPs
      <input
        type="text"
        class="border rounded px-4"
        name="ctps"
        id="ctps"
        v-model="store.ctps"
        placeholder="1,2,3..."
      />
    </label>
    <label class="my-2 font-bold flex justify-between">
      CTP Buy In
      <input
        type="number"
        class="border rounded px-4"
        name="ctpBuyIn"
        id="ctyBuyIn"
        v-model="store.ctpBuyIn"
      />
    </label>
    <label class="my-2 font-bold flex justify-between">
      Ace Buy In
      <input
        type="number"
        class="border rounded px-4"
        name="aceBuyIn"
        id="aceBuyIn"
        v-model="store.aceBuyIn"
      />
    </label>
    <label class="my-2 font-bold flex justify-between">
      Action Buy In
      <input
        type="number"
        class="border rounded px-4"
        name="actionBuyIn"
        id="actionBuyIn"
        v-model="store.actionBuyIn"
      />
    </label>
    <label class="my-2 font-bold flex justify-between">
      Bounty Buy In
      <input
        type="number"
        class="border rounded px-4"
        name="bountyBuyIn"
        id="bountyBuyIn"
        v-model="store.bountyBuyIn"
      />
    </label>
  </form>
  <div>Total Buy In: ${{ store.totalBuyIn }}</div>
</template>
