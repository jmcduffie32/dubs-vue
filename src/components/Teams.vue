<script setup lang="ts">
import { useMatch, ODD_DOG, type Player } from '@/stores/match'

const store = useMatch()

function translateTeamId(id: Player['teamId']): string {
  if (id === ODD_DOG) {
    return 'Odd Dog'
  }
  if (id === undefined) {
    return 'Not Assigned'
  }
  return '' + id
}
</script>

<template>
  <div class="flex flex-col">
  <button class="bg-blue-500 hover:bg-blue-800 rounded text-white p-1 my-4" type="button" @click="store.assignTeams()">Assign Teams</button>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="team in store.teams" class="bg-white rounded shadow p-4">
      <span>TEAM: {{ translateTeamId(team[0].teamId) }}</span>
      <div v-for="player in team">
        {{ player.name }}
      </div>
    </div>
  </div>
</div>
</template>

