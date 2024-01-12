<script setup lang="ts">
import { useMatch } from '@/stores/match'

const store = useMatch()
</script>

<template>
  <div class="bg-white rounded shadow p-4 mt-4">
    <table class="table-auto text-center">
      <thead>
        <tr>
          <th class="p-2">name</th>
          <th class="p-2">ctp</th>
          <th class="p-2">action</th>
          <th class="p-2">bounty</th>
          <th class="p-2">ace</th>
          <th class="p-2">odd dog</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in store.players">
          <td class="p-2">{{ player.name }}</td>
          <td class="p-2"><input type="checkbox" v-model="player.ctp" /></td>
          <td class="p-2"><input type="checkbox" v-model="player.action" /></td>
          <td class="p-2"><input type="checkbox" v-model="player.bounty" /></td>
          <td class="p-2"><input type="checkbox" v-model="player.ace" /></td>
          <td class="p-2"><input type="checkbox" v-model="player.oddDog" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
