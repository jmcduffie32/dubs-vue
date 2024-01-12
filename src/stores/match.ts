import _ from 'lodash'
import { defineStore } from 'pinia'
import { computed, ref, watch, type Ref } from 'vue'

export interface Player {
  id: string
  name: string
  oddDog: boolean
  action: boolean
  ace: boolean
  ctp: boolean
  bounty: boolean
  teamId?: number
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const ODD_DOG = 1000000

export const useMatch = defineStore('match', () => {
  const players: Ref<Player[]> = ref([
    {
      name: 'Test Player',
      ctp: true,
      bounty: false,
      ace: true,
      action: true,
      id: crypto.randomUUID(),
      oddDog: true
    }
  ])
  const aceBuyIn = ref(0)
  const ctpBuyIn = ref(0)
  const actionBuyIn = ref(0)
  const bountyBuyIn = ref(0)
  const ctps: Ref<string> = ref('')
  const eventId: Ref<string | null> = ref(null)

  watch(eventId, async (id) => {
    try {
      const resp = await fetch(`/event/${eventId}/`)
      const json = await resp.json()
      aceBuyIn.value = json.aceBuyIn
      actionBuyIn.value = json.actionBuyIn
      ctpBuyIn.value = json.ctpBuyIn
      bountyBuyIn.value = json.bountyBuyIn
      ctps.value = json.ctps
      players.value = json.players
    } catch (e) {
      console.error(e)
    }
  })

  function addPlayer(player: Player) {
    players.value.push(player)
  }

  function assignTeams(): void {
    const playerCount = players.value.length
    let oddDogCount: number = 0
    switch (playerCount % 4) {
      case 0:
        oddDogCount = 0
        break
      case 1:
      case 3:
        oddDogCount = 1
        break
      case 2:
        oddDogCount = 2
        break
    }

    const numbers = [] // playerCount - oddDogCount
    for (let i = 1; i <= (playerCount - oddDogCount) / 2; i++) {
      numbers.push(i)
      numbers.push(i)
    }
    const shuffled: number[] = shuffle(numbers)

    const wantPartners: Player[] = shuffle(players.value.filter((p) => !p.oddDog))

    for (let i = 0; i < wantPartners.length; i++) {
      wantPartners[i].teamId = shuffled[i] || ODD_DOG
    }

    const remaining = shuffled.slice(wantPartners.length)

    for (let i = oddDogCount; i > 0; i--) {
      remaining.push(ODD_DOG)
    }

    const oddDogIn = shuffle(remaining)

    const wantOddDog = players.value.filter((p) => p.oddDog)

    for (let i = 0; i < wantOddDog.length; i++) {
      wantOddDog[i].teamId = oddDogIn[i]
    }
  }

  const teams = computed(() => {
    const sortedPlayers: Player[] = players.value.sort(
      (a, b) => (b.teamId || 100000) - (a.teamId || 100000)
    )

    return _.map(
      _.groupBy(sortedPlayers, (p) => p.teamId),
      (players, _team) => players
    )
  })

  function removePlayerByid(id: Player['id']) {
    players.value = players.value.filter((p) => p.id != id)
  }

  const totalBuyIn = computed(() => {
    return aceBuyIn.value + ctpBuyIn.value + actionBuyIn.value + bountyBuyIn.value
  })

  const moneySummary = computed(() => {
    const summary = {
      payout: [],
      totalCollected: 0,
      ctpTotal: 0,
      ctpValue: 0,
      aceTotal: 0,
      actionTotal: 0,
      bountyTotal: 0
    }

    for (const player of players.value) {
      if (player.ctp) {
        summary.ctpTotal += ctpBuyIn.value
      }
      if (player.ace) {
        summary.aceTotal += aceBuyIn.value
      }
      if (player.action) {
        summary.actionTotal += actionBuyIn.value
      }
      if (player.bounty) {
        summary.bountyTotal += bountyBuyIn.value
      }
    }
    summary.totalCollected +=
      summary.ctpTotal + summary.aceTotal + summary.actionTotal + summary.bountyTotal
    summary.ctpValue = summary.ctpTotal / ctps.value.split(',').length

    return summary
  })
  return {
    players,
    addPlayer,
    removePlayerByid,
    moneySummary,
    aceBuyIn,
    actionBuyIn,
    ctpBuyIn,
    ctps,
    eventId,
    bountyBuyIn,
    totalBuyIn,
    teams,
    assignTeams
  }
})
