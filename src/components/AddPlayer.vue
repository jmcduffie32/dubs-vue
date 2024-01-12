<script setup lang="ts">
import { useMatch, type Player } from '@/stores/match'
import { ref, type Ref } from 'vue'

const store = useMatch()
const emptyPlayer = {
  id: crypto.randomUUID(),
  name: '',
  ctp: false,
  ace: false,
  oddDog: false,
  bounty: false,
  action: true
}
const newPlayer: Ref<Player> = ref({ ...emptyPlayer })

function addAndReset() {
  store.addPlayer(newPlayer.value)
  newPlayer.value = { ...emptyPlayer, id: crypto.randomUUID() }
}
</script>

<template>
  <div class="bg-white rounded shadow p-4 mt-4 flex flex-col">
    <label
      >Name:
      <input
        class="border rounded ml-8"
        type="text"
        name="new-player-name"
        id="new-player-name"
        v-model="newPlayer.name"
    /></label>
    <label class="w-24 flex justify-between"
      >action?:
      <input
        type="checkbox"
        name="new-player-action"
        id="new-player-action"
        v-model="newPlayer.action"
    /></label>
    <label class="w-24 flex justify-between"
      >ctp?:
      <input type="checkbox" name="new-player-ctp" id="new-player-ctp" v-model="newPlayer.ctp"
    /></label>
    <label class="w-24 flex justify-between"
      >bounty?:
      <input
        type="checkbox"
        name="new-player-bounty"
        id="new-player-bounty"
        v-model="newPlayer.bounty"
    /></label>
    <label class="w-24 flex justify-between"
      >ace?:
      <input type="checkbox" name="new-player-ace" id="new-player-ace" v-model="newPlayer.ace"
    /></label>
    <label class="w-24 flex justify-between"
      >odd dog?:
      <input
        type="checkbox"
        name="new-player-odd-dog"
        id="new-player-odd-dog"
        v-model="newPlayer.oddDog"
    /></label>
    <button type="button" class="bg-blue-500 rounded text-white p-1 mt-4" @click="addAndReset">
      Add
    </button>
  </div>
</template>
