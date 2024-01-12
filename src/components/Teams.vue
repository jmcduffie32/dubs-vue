<script setup lang="ts">
import { useMatch, ODD_DOG, type Player } from '@/stores/match'

const store = useMatch()

function translateTeamId(id: Player['teamId']): string {
  if (id === ODD_DOG) {
    return 'Odd Dog'
  }
  return '' + id
}
</script>

<template>
  <div class="grid">
    <button type="button" @click="store.assignTeams()">Assign Teams</button>
    <div v-for="team in store.teams" class="bg-white rounded shadow p-4 mt-4">
      <span>ID: {{ team[0].teamId }}</span>
      <div v-for="player in team">
        {{ player.name }}
      </div>
    </div>
  </div>
</template>
